import { onMounted } from 'vue';
import { Vector2 } from 'three';
import { getCanvasRelativePosition } from './use-object-selector';
import { useTres } from '@tresjs/core';
import { SimulationStateFlags, useSimulationStateStore } from '../stores/simulation-state';

export function useInput(gridToggleEnabled: boolean = true): void {
    const state = useSimulationStateStore();
    const { renderer } = useTres();

    const onMouseMove = (event: MouseEvent): void => {
        const pickPosition: Vector2 = getCanvasRelativePosition(event, renderer);

        state.setMousePosition(pickPosition.x, pickPosition.y);
    };

    onMounted(() => {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'g' || event.key == 'G') {
                if (gridToggleEnabled) {
                    state.toggleFlag(SimulationStateFlags.GRID_ENABLED);
                }
            }

            if (event.key === 'Escape') {
                state.setSearchFlag(false);
            }
        });

        window.addEventListener('mousemove', (event: MouseEvent) => {
            onMouseMove(event);
        });
    });
}
