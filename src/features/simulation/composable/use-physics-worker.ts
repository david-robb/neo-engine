import { onUnmounted } from 'vue';
import { useStateStore } from '../stores/state';
import { PhysicsWorkerInitPayload, PhysicsWorkerType } from '../workers/physics.worker';
import { DynamicDrawUsage, InstancedBufferAttribute } from 'three';
import { ALERT_DISTANCE } from '../../../utility/constants';
import { useTres } from '@tresjs/core';
import { EnginePrimaryBody, EngineSecondaryBody } from '../types/simulation.types';

export function usePhysicsWorker(): {
    initializePhysicsWorker: () => void;
    sendWorkerMessage: (message: any) => void;
} {
    let primaryBodyPositionBuffer: SharedArrayBuffer;
    let secondaryBodyPositionBuffer: SharedArrayBuffer;
    let earthDistanceBuffer: SharedArrayBuffer;
    let cameraMatrixBuffer: SharedArrayBuffer;

    let primaryBodyPositionArray: Float32Array;
    let secondaryBodyPositionArray: Float32Array;
    let earthDistanceArray: Float32Array;
    let cameraMatrixArray: Float32Array;

    let secondaryBodyLookupArray: EngineSecondaryBody[] = [];

    let first: boolean = true;

    const state = useStateStore();
    const { camera } = useTres();

    const worker = new Worker(new URL('../workers/physics.worker.ts', import.meta.url), {
        type: 'module',
    });

    onUnmounted(() => {
        worker.terminate();
    });

    function initializePhysicsWorker(): void {
        if (!state._meshes.secondaryBodiesMesh) {
            return;
        }

        secondaryBodyPositionBuffer = new SharedArrayBuffer(state._secondaryBody.size * 16 * 4);
        earthDistanceBuffer = new SharedArrayBuffer(state._secondaryBody.size * 4);
        primaryBodyPositionBuffer = new SharedArrayBuffer(state._primaryBody.size * 16 * 4);
        cameraMatrixBuffer = new SharedArrayBuffer(2 * 16 * 4);

        secondaryBodyPositionArray = new Float32Array(secondaryBodyPositionBuffer);
        earthDistanceArray = new Float32Array(earthDistanceBuffer);
        primaryBodyPositionArray = new Float32Array(primaryBodyPositionBuffer);
        cameraMatrixArray = new Float32Array(cameraMatrixBuffer);

        secondaryBodyLookupArray = Array.from(state._secondaryBody.values());

        state._meshes.secondaryBodiesMesh.instanceMatrix = new InstancedBufferAttribute(secondaryBodyPositionArray, 16);
        state._meshes.secondaryBodiesMesh.instanceMatrix.setUsage(DynamicDrawUsage);

        worker.postMessage({
            type: PhysicsWorkerType.INIT,
            payload: {
                primaryBodies: JSON.stringify(Array.from(state._primaryBody.values())),
                secondaryBodies: JSON.stringify(Array.from(state._secondaryBody.values())),

                primaryBodyPositionBuffer: primaryBodyPositionBuffer,
                secondaryBodyPositionBuffer: secondaryBodyPositionBuffer,
                earthDistanceBuffer: earthDistanceBuffer,
                cameraMatrixBuffer: cameraMatrixBuffer,
            } as PhysicsWorkerInitPayload,
        });

        worker.onmessage = (event: MessageEvent) => {
            const type: PhysicsWorkerType = event.data.type;
            if (type === PhysicsWorkerType.TICK_COMPLETE) {
                onSimulationStepComplete();
            }
        };
    }

    function onSimulationStepComplete(): void {
        updateNearEarthObjects();
        updatePrimaryBodies();
        updateSecondaryBodies();

        const secondaryBodiesMesh = state._meshes.secondaryBodiesMesh!;
        if (first) {
            secondaryBodiesMesh.computeBoundingSphere();
            secondaryBodiesMesh.computeBoundingBox();

            first = false;
        }

        secondaryBodiesMesh.instanceMatrix.needsUpdate = true;
    }

    function sendWorkerMessage(message: { type: PhysicsWorkerType; payload: any }): void {
        if (message.type === PhysicsWorkerType.TICK && camera.value) {
            const inverseWorldMatrix = camera.value.matrixWorldInverse.toArray();
            const projectionMatrix = camera.value.projectionMatrix.toArray();

            cameraMatrixArray.set(inverseWorldMatrix);
            cameraMatrixArray.set(projectionMatrix, 16);
        }

        worker.postMessage(message);
    }

    function updateNearEarthObjects(): void {
        const nearEarthObjects: string[] = [];

        const length = earthDistanceArray.length;
        for (let i = 0; i < length; i++) {
            const distanceToEarth = earthDistanceArray[i];
            if (distanceToEarth < ALERT_DISTANCE) {
                nearEarthObjects.push(`${secondaryBodyLookupArray[i].name} - ${distanceToEarth.toFixed(2)} KM`);
            }
        }

        state._objectsNearEarth = nearEarthObjects.sort((a, b) => +a.split('-')[1].trim() - +b.split('-')[1].trim());
    }

    function updateSecondaryBodies(): void {
        const secondaryBodyPool = state._secondaryBodyPool;

        for (const [_, value] of secondaryBodyPool.entries()) {
            const offset = 16 * value.meshIndex;

            value.currentPosition.x = secondaryBodyPositionArray[offset + 12];
            value.currentPosition.y = secondaryBodyPositionArray[offset + 13];
            value.currentPosition.z = secondaryBodyPositionArray[offset + 14];
        }
    }

    function updatePrimaryBodies(): void {
        const primaryBodies = state._meshes.primaryBodyMeshes!;

        for (let i = 0; i < primaryBodies.length; i++) {
            const mesh = primaryBodies[i];

            const offset = i * 3;

            mesh.position.setX(primaryBodyPositionArray[offset]);
            mesh.position.setY(primaryBodyPositionArray[offset + 1]);
            mesh.position.setZ(primaryBodyPositionArray[offset + 2]);

            const object: EnginePrimaryBody | undefined = state._primaryBody.get(mesh.name);
            if (object) {
                object.currentPosition.x = primaryBodyPositionArray[offset];
                object.currentPosition.y = primaryBodyPositionArray[offset + 1];
                object.currentPosition.z = primaryBodyPositionArray[offset + 2];
            }
        }
    }

    return {
        initializePhysicsWorker,
        sendWorkerMessage,
    };
}
