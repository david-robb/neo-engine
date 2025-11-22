<script setup lang="ts">
    import { useLoop } from '@tresjs/core';
    import { onMounted } from 'vue';
    import { useStateStore } from '../stores/state';
    import { calculateFocusedState, calculateScaledPosition } from '../utility/orbital-mechanics';
    import { EngineNEOMesh, EngineNEOState } from './simulation/types/neo-engine';

    const state = useStateStore();

    onMounted(() => {
        mainLoop();
    });

    function mainLoop(): void {
        let t = 0.0;
        const dt = 1 / 60;
        let accumulator = 0;

        const { onBeforeRender } = useLoop();

        onBeforeRender(({ delta }) => {
            let frameTime = delta;
            if (frameTime > 0.25) {
                frameTime = 0.25;
            }

            accumulator += frameTime;

            while (accumulator >= dt) {
                state.updateTime(t);

                updatePhysics(t);
                updateSelectedBody(t);

                updateVisibility();

                t += dt * state.timeMultiplier;
                accumulator -= dt;
            }
        });
    }

    function updateVisibility(): void {
        state.bodies.forEach((body) => {
            const bodyState: EngineNEOState = body.state;
            const bodyMesh: EngineNEOMesh = body.mesh;

            if (bodyState.active) {
                bodyMesh.sphere!.visible = true;
                bodyMesh.orbit!.visible = bodyState.isSelected || bodyState.isHovered || state.renderOrbits;
            } else {
                bodyMesh.sphere!.visible = false;
                bodyMesh.orbit!.visible = false;
            }
        });
    }

    function updateSelectedBody(t: number): void {
        if (state.focusedState) {
            const body = state.focusedState.object;

            const focusedState = calculateFocusedState(body);

            state.updateFocusedNeoState(focusedState);
        }
    }
    function updatePhysics(t: number): void {
        state.activeNeos.forEach((neo) => {
            neo.state.currentPosition = calculateScaledPosition(neo.neo.orbitalData, t);
            neo.mesh.sphere!.position.set(neo.state.currentPosition.x, neo.state.currentPosition.y, neo.state.currentPosition.z);
        });
    }
</script>
<template></template>
