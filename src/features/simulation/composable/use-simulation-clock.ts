import { onMounted } from 'vue';
import { useLoop } from '@tresjs/core';
import { SIMULATION_TICKS_PER_SECOND } from '../../../utility/constants';
import { useSimulationStateStore } from '../stores/simulation-state';

export type PhysicsCallback = (t: number) => void;
export type RenderCallback = (delta: number) => void;

export function useSimulationClock(physicsCallback?: PhysicsCallback, renderCallback?: RenderCallback): void {
    const state = useSimulationStateStore();
    const { onBeforeRender } = useLoop();

    onMounted(() => {
        let t = 0.0;
        const dt = 1 / SIMULATION_TICKS_PER_SECOND;
        let accumulator = 0;

        onBeforeRender(({ delta }) => {
            if (renderCallback) {
                renderCallback(delta);
            }

            let frameTime = delta;
            if (frameTime > 0.25) {
                frameTime = 0.25;
            }

            accumulator += frameTime;

            while (accumulator >= dt) {
                if (physicsCallback) {
                    physicsCallback(t);
                }

                t += dt * state.timeMultiplier;
                accumulator -= dt;
            }
        });
    });
}
