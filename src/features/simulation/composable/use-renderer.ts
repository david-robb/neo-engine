import { useStateStore } from '../stores/state';
import { useTres } from '@tresjs/core';
import { SimulationState } from '../types/state.types';
import { GRID_RENDER_ORDER, OBJECTS_RENDER_ORDER } from '../../../utility/constants';

export function useRenderer(): { initializeRenderer: () => void; renderFrame: () => void } {
    const state = useStateStore();
    const { scene, renderer } = useTres();

    function initializeRenderer(): void {
        renderer.setPixelRatio(window.devicePixelRatio);

        if (state.meshes.gridMesh) {
            state.meshes.gridMesh.renderOrder = GRID_RENDER_ORDER;
            scene.value.add(state.meshes.gridMesh);
        }

        if (state.meshes.neoInstancedMesh) {
            state.meshes.neoInstancedMesh.renderOrder = OBJECTS_RENDER_ORDER;
            scene.value.add(state.meshes.neoInstancedMesh);
        }
    }

    function renderFrame(): void {
        if (state.meshes.gridMesh) {
            state.meshes.gridMesh.visible = state.hasFlag(SimulationState.GRID_ENABLED);
        }
    }

    return {
        initializeRenderer,
        renderFrame,
    };
}
