import { useStateStore } from '../stores/state';
import { useTres } from '@tresjs/core';
import { SimulationState } from '../stores/state.types';
import { Mesh } from 'three';
import { MeshLine } from '@lume/three-meshline';

export function useRenderer(): { initializeRenderer: () => void; renderFrame: () => void } {
    const state = useStateStore();
    const { scene, renderer } = useTres();

    function initializeRenderer(): void {
        renderer.setPixelRatio(window.devicePixelRatio);

        if (state.meshes.gridMesh) {
            scene.value.add(state.meshes.gridMesh);
        }

        if (state.meshes.neoInstancedMesh) {
            scene.value.add(state.meshes.neoInstancedMesh);
        }

        if (state.meshes.planetMeshes) {
            state.meshes.planetMeshes.forEach((planetMesh: Mesh) => scene.value.add(planetMesh));
        }

        if (state.meshes.planetOrbitMeshes) {
            state.meshes.planetOrbitMeshes.forEach((planetOrbitMesh: MeshLine) => scene.value.add(planetOrbitMesh));
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
