import { onMounted } from 'vue';
import { Vector2 } from 'three';
import { getCanvasRelativePosition } from './use-object-selector';
import { useTres } from '@tresjs/core';
import { SimulationStateFlags, useStateStore } from '../stores/state';

export function useInput(gridToggleEnabled: boolean = true): void {
    const state = useStateStore();
    const { renderer } = useTres();

    const onMouseMove = (event: MouseEvent): void => {
        const pickPosition: Vector2 = getCanvasRelativePosition(event, renderer);

        state._mousePosition.x = pickPosition.x;
        state._mousePosition.y = pickPosition.y;
    };

    onMounted(() => {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'g' || event.key == 'G') {
                if (gridToggleEnabled) {
                    state.toggleFlag(SimulationStateFlags.GRID_ENABLED);
                }
            }
        });

        window.addEventListener('mousemove', (event: MouseEvent) => {
            onMouseMove(event);
        });
    });
}
