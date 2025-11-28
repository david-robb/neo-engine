import { onUnmounted } from 'vue';
import { useStateStore } from '../stores/state';
import { PhysicsWorkerInitPayload, PhysicsWorkerType } from '../workers/physics.worker';
import { DynamicDrawUsage, InstancedBufferAttribute } from 'three';

export function usePhysicsWorker(onStepComplete?: () => void): {
    initializePhysicsWorker: () => void;
    sendWorkerMessage: (message: any) => void;
} {
    let positionMatrixBuffer: SharedArrayBuffer;
    let focusedStateBuffer: SharedArrayBuffer;

    let positionMatrixFloatArray: Float32Array;
    let focusedFloatArray: Float32Array;

    let first: boolean = true;

    const state = useStateStore();

    const worker = new Worker(new URL('../workers/physics.worker.ts', import.meta.url), {
        type: 'module',
    });

    onUnmounted(() => {
        worker.terminate();
    });

    function initializePhysicsWorker(): void {
        positionMatrixBuffer = new SharedArrayBuffer(state.neos.length * 16 * 4);
        focusedStateBuffer = new SharedArrayBuffer(2 * 4);

        positionMatrixFloatArray = new Float32Array(positionMatrixBuffer);
        focusedFloatArray = new Float32Array(focusedStateBuffer);

        worker.postMessage({
            type: PhysicsWorkerType.INIT,
            payload: {
                objects: JSON.stringify(state.neos),
                positionsBuffer: positionMatrixBuffer,
                focusedStateBuffer: focusedStateBuffer,
            } as PhysicsWorkerInitPayload,
        });

        if (state.meshes.neoInstancedMesh) {
            const positionMatrixArray = new Float32Array(positionMatrixBuffer);

            state.meshes.neoInstancedMesh.instanceMatrix = new InstancedBufferAttribute(positionMatrixArray, 16);
        }

        worker.onmessage = (event: MessageEvent) => {
            const type: PhysicsWorkerType = event.data.type;
            if (type === PhysicsWorkerType.TICK_COMPLETE) {
                onSimulationStepComplete();
            }
        };
    }

    function onSimulationStepComplete(): void {
        if (state.focusedObject) {
            const index = state.focusedObjectIndex;
            const offset = index * 16;

            const x = positionMatrixFloatArray.at(offset + 12);
            const y = positionMatrixFloatArray.at(offset + 13);
            const z = positionMatrixFloatArray.at(offset + 14);

            state.focusedObject.currentPosition.x = x!;
            state.focusedObject.currentPosition.y = y!;
            state.focusedObject.currentPosition.z = z!;

            state.focusedObject.distanceToSun = focusedFloatArray[0];
            state.focusedObject.velocity = focusedFloatArray[1];
        }

        if (state.meshes.neoInstancedMesh) {
            if (first) {
                state.meshes.neoInstancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);
                state.meshes.neoInstancedMesh.computeBoundingSphere();
                state.meshes.neoInstancedMesh.computeBoundingBox();
            }

            state.meshes.neoInstancedMesh.instanceMatrix.needsUpdate = true;
        }

        if (onStepComplete) {
            onStepComplete();
        }
    }

    function sendWorkerMessage(message: any): void {
        worker.postMessage(message);
    }

    return {
        initializePhysicsWorker,
        sendWorkerMessage,
    };
}
