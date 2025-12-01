import { onUnmounted } from 'vue';
import { useStateStore } from '../stores/state';
import { PhysicsWorkerInitPayload, PhysicsWorkerType } from '../workers/physics.worker';
import { DynamicDrawUsage, InstancedBufferAttribute, Mesh, Vector3 } from 'three';
import { ALERT_DISTANCE } from '../../../utility/constants';
import { useTres } from '@tresjs/core';

export function usePhysicsWorker(onStepComplete?: () => void): {
    initializePhysicsWorker: () => void;
    sendWorkerMessage: (message: any) => void;
} {
    let positionMatrixBuffer: SharedArrayBuffer;
    let focusedStateBuffer: SharedArrayBuffer;
    let earthDistanceBuffer: SharedArrayBuffer;
    let coreObjectPositionBuffer: SharedArrayBuffer;
    let cameraMatrixBuffer: SharedArrayBuffer;

    let earthDistanceFloatArray: Float32Array;
    let positionMatrixFloatArray: Float32Array;
    let focusedFloatArray: Float32Array;
    let coreObjectPositionFloatArray: Float32Array;
    let cameraMatrixFloatArray: Float32Array;

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
        positionMatrixBuffer = new SharedArrayBuffer(state.neos.length * 16 * 4);
        focusedStateBuffer = new SharedArrayBuffer(2 * 4);
        earthDistanceBuffer = new SharedArrayBuffer(state.neos.length * 4);
        coreObjectPositionBuffer = new SharedArrayBuffer(state.planets.length * 3 * 4);
        cameraMatrixBuffer = new SharedArrayBuffer(2 * 16 * 4);

        positionMatrixFloatArray = new Float32Array(positionMatrixBuffer);
        focusedFloatArray = new Float32Array(focusedStateBuffer);
        earthDistanceFloatArray = new Float32Array(earthDistanceBuffer);
        coreObjectPositionFloatArray = new Float32Array(coreObjectPositionBuffer);
        cameraMatrixFloatArray = new Float32Array(cameraMatrixBuffer);

        worker.postMessage({
            type: PhysicsWorkerType.INIT,
            payload: {
                objects: JSON.stringify(state.neos),
                coreObjects: JSON.stringify(state.planets),
                positionsBuffer: positionMatrixBuffer,
                focusedStateBuffer: focusedStateBuffer,
                earthDistanceBuffer: earthDistanceBuffer,
                corePositionBuffer: coreObjectPositionBuffer,
                cameraMatrixBuffer: cameraMatrixBuffer,
            } as PhysicsWorkerInitPayload,
        });

        if (state.meshes.neoInstancedMesh) {
            state.meshes.neoInstancedMesh.instanceMatrix = new InstancedBufferAttribute(positionMatrixFloatArray, 16);
            state.meshes.neoInstancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);
        }

        worker.onmessage = (event: MessageEvent) => {
            const type: PhysicsWorkerType = event.data.type;
            if (type === PhysicsWorkerType.TICK_COMPLETE) {
                onSimulationStepComplete();
            }
        };
    }

    function onSimulationStepComplete(): void {
        const focusedObject = state.focusedObject;
        if (focusedObject) {
            const index = state.focusedObjectIndex;
            const offset = index * 16;

            const x = positionMatrixFloatArray.at(offset + 12);
            const y = positionMatrixFloatArray.at(offset + 13);
            const z = positionMatrixFloatArray.at(offset + 14);

            focusedObject.currentPosition.x = x!;
            focusedObject.currentPosition.y = y!;
            focusedObject.currentPosition.z = z!;

            focusedObject.distanceToEarth = earthDistanceFloatArray[index];

            focusedObject.distanceToSun = focusedFloatArray[0];
            focusedObject.velocity = focusedFloatArray[1];
        }

        const nearEarthObjects: string[] = [];

        const length = earthDistanceFloatArray.length;
        const neos = state.neos;

        for (let i = 0; i < length; i++) {
            const distanceToEarth = earthDistanceFloatArray[i];
            if (distanceToEarth < ALERT_DISTANCE) {
                nearEarthObjects.push(`${neos[i].name} - ${distanceToEarth.toFixed(2)} KM`);
            }
        }

        state.setNearEarthObjects(nearEarthObjects.sort((a, b) => +a.split('-')[1].trim() - +b.split('-')[1].trim()));

        if (state.meshes.planetMeshes) {
            state.meshes.planetMeshes.forEach((mesh: Mesh, index: number) => {
                const offset = index * 3;
                const position = new Vector3(
                    coreObjectPositionFloatArray[offset],
                    coreObjectPositionFloatArray[offset + 1],
                    coreObjectPositionFloatArray[offset + 2]
                );

                mesh.position.copy(position);
            });
        }

        if (state.meshes.neoInstancedMesh) {
            if (first) {
                state.meshes.neoInstancedMesh.computeBoundingSphere();
                state.meshes.neoInstancedMesh.computeBoundingBox();

                first = false;
            }

            state.meshes.neoInstancedMesh.instanceMatrix.needsUpdate = true;
        }

        if (onStepComplete) {
            onStepComplete();
        }
    }

    function sendWorkerMessage(message: { type: PhysicsWorkerType; payload: any }): void {
        if (message.type === PhysicsWorkerType.TICK && camera.value) {
            const inverseWorldMatrix = camera.value.matrixWorldInverse.toArray();
            const projectionMatrix = camera.value.projectionMatrix.toArray();

            cameraMatrixFloatArray[0] = inverseWorldMatrix[0];
            cameraMatrixFloatArray[1] = inverseWorldMatrix[1];
            cameraMatrixFloatArray[2] = inverseWorldMatrix[2];
            cameraMatrixFloatArray[3] = inverseWorldMatrix[3];
            cameraMatrixFloatArray[4] = inverseWorldMatrix[4];
            cameraMatrixFloatArray[5] = inverseWorldMatrix[5];
            cameraMatrixFloatArray[6] = inverseWorldMatrix[6];
            cameraMatrixFloatArray[7] = inverseWorldMatrix[7];
            cameraMatrixFloatArray[8] = inverseWorldMatrix[8];
            cameraMatrixFloatArray[9] = inverseWorldMatrix[9];
            cameraMatrixFloatArray[10] = inverseWorldMatrix[10];
            cameraMatrixFloatArray[11] = inverseWorldMatrix[11];
            cameraMatrixFloatArray[12] = inverseWorldMatrix[12];
            cameraMatrixFloatArray[13] = inverseWorldMatrix[13];
            cameraMatrixFloatArray[14] = inverseWorldMatrix[14];
            cameraMatrixFloatArray[15] = inverseWorldMatrix[15];

            cameraMatrixFloatArray[16] = projectionMatrix[0];
            cameraMatrixFloatArray[17] = projectionMatrix[1];
            cameraMatrixFloatArray[18] = projectionMatrix[2];
            cameraMatrixFloatArray[19] = projectionMatrix[3];
            cameraMatrixFloatArray[20] = projectionMatrix[4];
            cameraMatrixFloatArray[21] = projectionMatrix[5];
            cameraMatrixFloatArray[22] = projectionMatrix[6];
            cameraMatrixFloatArray[23] = projectionMatrix[7];
            cameraMatrixFloatArray[24] = projectionMatrix[8];
            cameraMatrixFloatArray[25] = projectionMatrix[9];
            cameraMatrixFloatArray[26] = projectionMatrix[10];
            cameraMatrixFloatArray[27] = projectionMatrix[11];
            cameraMatrixFloatArray[28] = projectionMatrix[12];
            cameraMatrixFloatArray[29] = projectionMatrix[13];
            cameraMatrixFloatArray[30] = projectionMatrix[14];
            cameraMatrixFloatArray[31] = projectionMatrix[15];
        }

        worker.postMessage(message);
    }

    return {
        initializePhysicsWorker,
        sendWorkerMessage,
    };
}
