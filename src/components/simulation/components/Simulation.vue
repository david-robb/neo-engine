<script setup lang="ts">
    import { useSimulationClock } from '../composable/use-simulation-clock';
    import { buildOrbitForNew } from '../../../utility/orbital-mechanics';
    import { useNeoRaycaster } from '../composable/use-neo-raycaster';
    import { EngineNEO, EngineNeoStateFlags } from '../types/neo-engine.types';
    import { FlagUtilities } from '../utilities/flag.utilities';
    import { useKeyboardListener } from '../composable/use-keyboard-listener';
    import { useTres } from '@tresjs/core';
    import { InstancedBufferAttribute, Vector3 } from 'three';
    import SolarSystem from '../../system/SolarSystem.vue';
    import { OrbitControls } from '@tresjs/cientos';
    import { markRaw, onMounted, onUnmounted } from 'vue';
    import * as ThreeOrbitControls from 'three/addons/controls/OrbitControls.js';
    import { PhysicsWorkerInitPayload, PhysicsWorkerSelectionChangePayload, PhysicsWorkerType } from '../workers/physics.worker';
    import { SimulationStateFlags, useStateStore } from '../stores/state';
    import { addSecond } from '@formkit/tempo';

    const state = useStateStore();

    let positionMatrixBuffer: SharedArrayBuffer;
    let focusedStateBuffer: SharedArrayBuffer;

    let positionMatrixFloatArray: Float32Array;
    let focusedFloatArray: Float32Array;

    const { scene, camera, controls, renderer } = useTres();

    useNeoRaycaster(onSelect);
    useSimulationClock(onSimulationStep, onRender);
    useKeyboardListener(onGridToggle);

    const worker = new Worker(new URL('../workers/physics.worker.ts', import.meta.url), {
        type: 'module',
    });

    onUnmounted(() => {
        worker.terminate();
    });

    onMounted(() => {
        renderer.setPixelRatio(window.devicePixelRatio);

        if (camera.value) {
            camera.value.layers.enable(1);
            camera.value.layers.enable(2);
        }

        if (state.meshes.gridMesh) {
            scene.value.add(state.meshes.gridMesh);
        }

        if (state.meshes.neoInstancedMesh) {
            scene.value.add(state.meshes.neoInstancedMesh);
        }

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

    function renderOrbit(neo: EngineNEO): void {
        const orbitMesh = buildOrbitForNew(neo.neo.orbitalData);

        scene.value.add(orbitMesh);

        state.$patch((state) => {
            state.meshes.orbitsMesh = markRaw(orbitMesh);
        });
    }

    function onSelect(props: { oldVal: EngineNEO | undefined; newVal: EngineNEO | undefined }): void {
        const oldSelectedObject = props.oldVal;
        const newSelectedObject = props.newVal;

        if (newSelectedObject) {
            if (oldSelectedObject) {
                clearFocused();
            }

            worker.postMessage({
                type: PhysicsWorkerType.SELECTION_CHANGE,
                payload: {
                    id: newSelectedObject.id,
                } as PhysicsWorkerSelectionChangePayload,
            });

            newSelectedObject.flags = FlagUtilities.setFlag(newSelectedObject.flags, EngineNeoStateFlags.SELECTED);
            state.setTarget(newSelectedObject.state.currentPosition);
            renderOrbit(newSelectedObject);
        }
    }

    function clearFocused(): void {
        worker.postMessage({
            type: PhysicsWorkerType.SELECTION_CHANGE,
            payload: {
                id: undefined,
            } as PhysicsWorkerSelectionChangePayload,
        });

        const focusedObject = state.focusedObject;
        if (focusedObject) {
            focusedObject.flags = FlagUtilities.clearFlag(focusedObject.flags, EngineNeoStateFlags.SELECTED);
        }

        scene.value.remove(state.meshes.orbitsMesh!);

        state.clearFocus();

        state.clearFlag(SimulationStateFlags.CLEAR_FOCUSED);
    }

    function onRender(delta: number): void {
        const gridMesh = state.meshes.gridMesh;
        if (gridMesh) {
            gridMesh.visible = state.hasFlag(SimulationStateFlags.GRID_ENABLED);
        }

        if (state.hasFlag(SimulationStateFlags.IS_FLYING) && camera.value && controls.value) {
            const target = state.focusedObject?.state.currentPosition ?? new Vector3(0, 0, 0);
            const orbitControls = controls.value as ThreeOrbitControls.OrbitControls;
            const cameraPosition = new Vector3();
            camera.value.getWorldPosition(cameraPosition);

            orbitControls.enabled = false;

            const vectorToCurrentTarget = orbitControls.target.clone().sub(cameraPosition.clone()).normalize();
            const vectorToSelectedTarget = target.clone().sub(cameraPosition.clone()).normalize();
            const alpha = vectorToCurrentTarget.dot(vectorToSelectedTarget);

            if (alpha < 0.9999) {
                orbitControls.target.lerp(target, alpha / 15);
            } else {
                state.clearFlag(SimulationStateFlags.IS_FLYING);

                orbitControls.target = target;
                orbitControls.enabled = true;
            }

            orbitControls.update();
        }

        if (state.hasFlag(SimulationStateFlags.CLEAR_FOCUSED)) {
            clearFocused();
        }
    }

    function onSimulationStep(t: number): void {
        worker.postMessage({ type: PhysicsWorkerType.TICK, payload: { t: t } });

        state.time.simulationClock = addSecond(state.simulationEpoch, t);
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
        }

        if (state.meshes.neoInstancedMesh) {
            state.meshes.neoInstancedMesh.instanceMatrix.needsUpdate = true;
        }
    }
</script>

<template>
    <OrbitControls :target="[0, 0, 0]" :enable-damping="true" :damping-factor="0.1" :make-default="true" />
    <SolarSystem />
</template>
