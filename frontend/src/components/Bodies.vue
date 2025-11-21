<script setup lang="ts">
    import { useLoop } from '@tresjs/core';
    import { onMounted } from 'vue';
    import { useStateStore } from '../stores/state';
    import { calculatePosition, calculateVelocity } from '../utility/orbital-mechanics';
    import { NeoBodyMesh, NeoBodyState } from 'src/models/body';
    import { SCALE_FACTOR, SIM_SPEED_SCALAR } from '../utility/constants';
    import { Matrix4, Vector3 } from 'three';

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

                t += dt * state.getTimeMultiplier;
                accumulator -= dt;
            }
        });
    }

    function updateVisibility(): void {
        state.bodies.forEach((body) => {
            const bodyState: NeoBodyState = body.state;
            const bodyMesh: NeoBodyMesh = body.mesh;

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

            const velocity = calculateVelocity(body.orbit, t);

            const distanceToSun = body.state.currentPosition.multiplyScalar(SCALE_FACTOR).length();

            state.updateFocusedObjectState({ velocity, distanceToSun });
        }
    }
    function updatePhysics(t: number): void {
        for (let i = 0; i < state.getActiveBodies.length; i++) {
            const body = state.bodies[i];

            body.state.currentPosition = calculatePosition(body.orbit, t);
            body.mesh.sphere!.position.set(body.state.currentPosition.x, body.state.currentPosition.y, body.state.currentPosition.z);
        }
    }
</script>
<template></template>
