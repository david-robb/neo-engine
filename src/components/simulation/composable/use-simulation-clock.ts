import { onMounted } from 'vue';
import { useLoop } from '@tresjs/core';
import { useStateStore } from '../../../stores/state';
import { SIMULATION_TICKS_PER_SECOND } from '../../../utility/constants';

export type PhysicsCallback = (t: number) => void;
export type RenderCallback = () => void;

export function useSimulationClock(physicsCallback?: PhysicsCallback, renderCallback?: RenderCallback): void {
    const state = useStateStore();
    const { onBeforeRender } = useLoop();

    onMounted(() => {
        let t = 0.0;
        const dt = 1 / SIMULATION_TICKS_PER_SECOND;
        let accumulator = 0;

        onBeforeRender(({ delta }) => {
            if (renderCallback) {
                renderCallback();
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
