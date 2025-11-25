<script setup lang="ts">
    import { useSimulationClock } from '../composable/use-simulation-clock';
    import { SimulationStateFlags, useStateStore } from '../../../stores/state';
    import { buildOrbitForNew } from '../../../utility/orbital-mechanics';
    import { useNeoRaycaster } from '../composable/use-neo-raycaster';
    import { EngineNEO, EngineNeoStateFlags } from '../types/neo-engine.types';
    import { FlagUtilities } from '../utilities/flag.utilities';
    import { useGui } from '../../ui/composables/use-gui';
    import { useKeyboardListener } from '../composable/use-keyboard-listener';
    import { useTres } from '@tresjs/core';
    import { InstancedBufferAttribute, Vector3 } from 'three';
    import SolarSystem from '../../system/SolarSystem.vue';
    import { OrbitControls } from '@tresjs/cientos';
    import { onMounted, onUnmounted } from 'vue';
    import { PhysicsWorkerInitPayload, PhysicsWorkerSelectionChangePayload, PhysicsWorkerType } from '../workers/physics.worker';

    const state = useStateStore();

    let positionMatrixBuffer: SharedArrayBuffer;
    let focusedStateBuffer: SharedArrayBuffer;

    let positionMatrixFloatArray: Float32Array;
    let focusedFloatArray: Float32Array;

    const { scene } = useTres();

    const { onFocusChange, onFocusUpdate, onTimeChange, onUnfocus } = useGui();

    useNeoRaycaster(onSelect);
    useSimulationClock(onSimulationStep, onRender);
    useKeyboardListener(onRayCastToggle, onGridToggle);

    const worker = new Worker(new URL('../workers/physics.worker.ts', import.meta.url), {
        type: 'module',
    });

    onUnmounted(() => {
        worker.terminate();
    })

    onMounted(() => {
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
    });

    function onGridToggle(): void {
        state.toggleFlag(SimulationStateFlags.GRID_ENABLED);
    }

    function onRayCastToggle(): void {
        state.toggleFlag(SimulationStateFlags.RAY_CASTING_ENABLED);
    }

    function renderOrbit(neo: EngineNEO): void {
        const orbitMesh = buildOrbitForNew(neo.neo.orbitalData);

        scene.value.add(orbitMesh);

        state.$patch((state) => {
            state.meshes.orbitsMesh = orbitMesh;
        });
    }

    function destroyOrbit(): void {
        const mesh = state.meshes.orbitsMesh;
        if (!mesh) {
            return;
        }

        mesh.visible = false;
        scene.value.remove(mesh);

        state.$patch((state) => {
            state.meshes.orbitsMesh = undefined;
        });

        mesh.geometry.dispose();
    }

    function onSelect(props: { oldVal: EngineNEO | undefined; newVal: EngineNEO | undefined }): void {
        const oldSelectedObject = props.oldVal;
        const newSelectedObject = props.newVal;

        if (newSelectedObject && oldSelectedObject?.id !== newSelectedObject?.id) {
            if (oldSelectedObject) {
                onUnfocus();

                destroyOrbit();

                oldSelectedObject.flags = FlagUtilities.clearFlag(oldSelectedObject.flags, EngineNeoStateFlags.SELECTED);

                state.setTarget(new Vector3(0, 0, 0));

                worker.postMessage({
                    type: PhysicsWorkerType.SELECTION_CHANGE,
                    payload: {
                        id: undefined,
                    } as PhysicsWorkerSelectionChangePayload,
                });
            }

            newSelectedObject.flags = FlagUtilities.setFlag(newSelectedObject.flags, EngineNeoStateFlags.SELECTED);

            onFocusChange(newSelectedObject);

            renderOrbit(newSelectedObject);

            state.setTarget(newSelectedObject.state.currentPosition);

            worker.postMessage({
                type: PhysicsWorkerType.SELECTION_CHANGE,
                payload: {
                    id: newSelectedObject.id,
                } as PhysicsWorkerSelectionChangePayload,
            });
        }

        if (newSelectedObject && oldSelectedObject?.id === newSelectedObject?.id) {
            onUnfocus();

            destroyOrbit();

            oldSelectedObject.flags = FlagUtilities.clearFlag(oldSelectedObject.flags, EngineNeoStateFlags.SELECTED);

            state.setTarget(new Vector3(0, 0, 0));

            worker.postMessage({
                type: PhysicsWorkerType.SELECTION_CHANGE,
                payload: {
                    id: undefined,
                } as PhysicsWorkerSelectionChangePayload,
            });
        }
    }

    function onRender(): void {
        const gridMesh = state.meshes.gridMesh;
        if (gridMesh) {
            gridMesh.visible = FlagUtilities.hasFlag(state.stateFlags, SimulationStateFlags.GRID_ENABLED);
        }
    }

    function onSimulationStep(t: number): void {
        worker.postMessage({ type: PhysicsWorkerType.TICK, payload: { t: t } });

        onTimeChange(t);
    }

    function onSimulationStepComplete(): void {
        if (state.focusedObject) {
            const index = state.focusedObjectIndex;
            const offset = index * 16;

            const x = positionMatrixFloatArray.at(offset + 12);
            const y = positionMatrixFloatArray.at(offset + 13);
            const z = positionMatrixFloatArray.at(offset + 14);

            state.focusedObject.state.currentPosition.x = x!;
            state.focusedObject.state.currentPosition.y = y!;
            state.focusedObject.state.currentPosition.z = z!;

            state.focusedObject.state.distanceToSun = focusedFloatArray[0];
            state.focusedObject.state.velocity = focusedFloatArray[1];

            onFocusUpdate(state.focusedObject);
        }

        if (state.meshes.neoInstancedMesh) {
            state.meshes.neoInstancedMesh.instanceMatrix.needsUpdate = true;
        }
    }
</script>

<template>
    <OrbitControls :target="state.cameraTarget" />
    <SolarSystem />
</template>
