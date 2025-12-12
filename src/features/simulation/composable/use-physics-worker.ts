import { onUnmounted } from 'vue';
import { useStateStore } from '../stores/state';
import { PhysicsWorkerInitPayload, PhysicsWorkerType } from '../workers/physics.worker';
import { DynamicDrawUsage, InstancedBufferAttribute, Vector3 } from 'three';
import { useTres } from '@tresjs/core';
import { EngineSecondaryBody } from '../types/simulation.types';
import { ALERT_DISTANCE } from '../../../utility/constants';

export function usePhysicsWorker(): {
    initializePhysicsWorker: () => void;
    sendWorkerMessage: (message: any) => void;
} {
    let primaryBodyPositionBuffer: SharedArrayBuffer;
    let secondaryBodyPositionBuffer: SharedArrayBuffer;
    let earthDistanceBuffer: SharedArrayBuffer;
    let velocityBuffer: SharedArrayBuffer;
    let cameraMatrixBuffer: SharedArrayBuffer;

    let primaryBodyPositionArray: Float32Array;
    let secondaryBodyPositionArray: Float32Array;
    let earthDistanceArray: Float32Array;
    let velocityArray: Float32Array;
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

        primaryBodyPositionBuffer = new SharedArrayBuffer(state._primaryBody.size * 16 * 4);
        secondaryBodyPositionBuffer = new SharedArrayBuffer(state._secondaryBody.size * 16 * 4);
        earthDistanceBuffer = new SharedArrayBuffer(state._secondaryBody.size * 4);
        velocityBuffer = new SharedArrayBuffer(state._secondaryBody.size * 4);
        cameraMatrixBuffer = new SharedArrayBuffer(2 * 16 * 4);

        primaryBodyPositionArray = new Float32Array(primaryBodyPositionBuffer);
        secondaryBodyPositionArray = new Float32Array(secondaryBodyPositionBuffer);
        earthDistanceArray = new Float32Array(earthDistanceBuffer);
        velocityArray = new Float32Array(velocityBuffer);
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
                velocityBuffer: velocityBuffer,
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
        updateSecondaryBodyPool();

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
        const toAdd = new Set<number>();

        const length = earthDistanceArray.length;
        for (let i = 0; i < length; i++) {
            const distanceToEarth = earthDistanceArray[i];
            if (distanceToEarth < ALERT_DISTANCE) {
                state.focusObject(secondaryBodyLookupArray[i].id);

                toAdd.add(secondaryBodyLookupArray[i].id);
            }
        }

        state.updateObjectsNearEarth(toAdd);
    }

    function updateSecondaryBodyPool(): void {
        const secondaryBodyPool = state.focusedPoolArray;

        for (let i = 0; i < secondaryBodyPool.length; i++) {
            const body = secondaryBodyPool[i];
            const offset = 16 * body.meshIndex;

            const distanceToEarth = earthDistanceArray[body.meshIndex];
            const velocity = velocityArray[body.meshIndex];

            state.updateSecondaryObjectState(
                body.id,
                new Vector3(
                    secondaryBodyPositionArray[offset + 12],
                    secondaryBodyPositionArray[offset + 13],
                    secondaryBodyPositionArray[offset + 14]
                ),
                velocity,
                distanceToEarth
            );
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

            state.updatePrimaryObjectState(
                mesh.name,
                new Vector3(primaryBodyPositionArray[offset], primaryBodyPositionArray[offset + 1], primaryBodyPositionArray[offset + 2])
            );
        }
    }

    return {
        initializePhysicsWorker,
        sendWorkerMessage,
    };
}
