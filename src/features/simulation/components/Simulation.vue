<script setup lang="ts">
    import { useSimulationClock } from '../composable/use-simulation-clock';
    import { useKeyboardListener } from '../composable/use-keyboard-listener';
    import { CameraControls } from '@tresjs/cientos';
    import { onMounted, reactive } from 'vue';
    import { PhysicsWorkerSelectionChangePayload, PhysicsWorkerType } from '../workers/physics.worker';
    import { useStateStore } from '../stores/state';
    import { addSecond } from '@formkit/tempo';
    import { usePhysicsWorker } from '../composable/use-physics-worker';
    import { useObjectFocuser } from '../composable/use-object-focuser';
    import { useRenderer } from '../composable/use-renderer';
    import { Vector3 } from 'three';
    import { SimulationState } from '../stores/state.types';

    const controlsState = reactive({
        minDistance: 695700 * 2,
        maxDistance: 1000000000,
        target: new Vector3(0, 0, 0),
    });

    const state = useStateStore();

    const { initializePhysicsWorker, sendWorkerMessage } = usePhysicsWorker(onSimulationStepComplete);
    const { clearFocused, select, updateTracking } = useObjectFocuser(onFocusChange);
    const { initializeRenderer, renderFrame } = useRenderer();

    useSimulationClock(onSimulationStep, onRender);
    useKeyboardListener(onGridToggle);

    onMounted(() => {
        initializeRenderer();
        initializePhysicsWorker();
    });

    function onGridToggle(): void {
        state.toggleFlag(SimulationState.GRID_ENABLED);
    }

    function onRender(delta: number): void {
        if (state.hasFlag(SimulationState.CLEAR_FOCUSED)) {
            clearFocused();
        }

        if (state.hasFlag(SimulationState.SELECT_NEXT)) {
            select({
                newVal: state.neos[state.focusedObjectIndex + 1],
                oldVal: state.focusedObject,
            });

            state.clearFlag(SimulationState.SELECT_NEXT);
        }

        if (state.hasFlag(SimulationState.SELECT_PREVIOUS)) {
            select({
                newVal: state.neos[state.focusedObjectIndex - 1],
                oldVal: state.focusedObject,
            });

            state.clearFlag(SimulationState.SELECT_PREVIOUS);
        }

        renderFrame();
    }

    function onSimulationStep(t: number): void {
        const mousePosition = state.mousePosition;

        sendWorkerMessage({
            type: PhysicsWorkerType.TICK,
            payload: {
                t: t,
                mouseX: mousePosition.x,
                mouseY: mousePosition.y,
                mouseZ: mousePosition.z,
            },
        });

        state.updateSimulationClock(addSecond(state.simulationEpoch, t));
    }

    function onSimulationStepComplete(): void {
        updateTracking();
    }

    function onFocusChange(id: number | undefined): void {
        sendWorkerMessage({
            type: PhysicsWorkerType.SELECTION_CHANGE,
            payload: {
                id: id,
            } as PhysicsWorkerSelectionChangePayload,
        });
    }
</script>

<template>
    <CameraControls v-bind="controlsState" make-default />
</template>
