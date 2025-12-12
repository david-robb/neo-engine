<script setup lang="ts">
    import { useSimulationClock } from '../composable/use-simulation-clock';
    import { useInput } from '../composable/use-input';
    import { CameraControls } from '@tresjs/cientos';
    import { onMounted } from 'vue';
    import { PhysicsWorkerTickPayload, PhysicsWorkerType } from '../workers/physics.worker';
    import { useStateStore } from '../stores/state';
    import { addSecond } from '@formkit/tempo';
    import { usePhysicsWorker } from '../composable/use-physics-worker';
    import { useRenderer } from '../composable/use-renderer';
    import { useCamera } from '../composable/use-camera';
    import { useObjectSelector } from '../composable/use-object-selector';

    const state = useStateStore();

    const { initializePhysicsWorker, sendWorkerMessage } = usePhysicsWorker();
    const { initializeScene, renderFrame } = useRenderer();

    const { updateCamera } = useCamera();

    useSimulationClock(onSimulationStep, onRender);

    useInput();
    useObjectSelector();

    onMounted(() => {
        initializePhysicsWorker();
        initializeScene();
    });

    function onRender(delta: number): void {
        renderFrame();

        updateCamera();
    }

    function onSimulationStep(t: number): void {
        const mousePosition = state._mousePosition;
        const cameraPosition = state._cameraPosition;

        sendWorkerMessage({
            type: PhysicsWorkerType.TICK,
            payload: {
                t: t,
                mousePosition: [mousePosition.x, mousePosition.y, mousePosition.z],
                cameraPosition: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
            } as PhysicsWorkerTickPayload,
        });

        state.updateSimulationClock(addSecond(state.simulationEpoch, t));
    }
</script>

<template>
    <CameraControls :max-distance="8000000000" :min-distance="695700 * 2" make-default />
</template>
