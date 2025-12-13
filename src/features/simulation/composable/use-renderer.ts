import { useTres } from '@tresjs/core';
import { buildOrbitMeshLine } from '../services/mesh.service';
import { Color } from 'three';
import { markRaw } from 'vue';
import { useSimulationStateStore } from '../stores/simulation-state';

export function useRenderer(): { initializeScene: () => void; renderFrame: () => void } {
    const state = useSimulationStateStore();
    const { scene, renderer } = useTres();

    function initializeScene(): void {
        renderer.setPixelRatio(window.devicePixelRatio);

        if (state.globalMeshes.gridMesh) {
            scene.value.add(state.globalMeshes.gridMesh);
        }

        if (state.globalMeshes.secondaryBodiesMesh) {
            scene.value.add(state.globalMeshes.secondaryBodiesMesh);
        }

        if (state.globalMeshes.primaryBodyMeshes) {
            state.globalMeshes.primaryBodyMeshes.forEach((planetMesh) => scene.value.add(planetMesh));
        }

        if (state.globalMeshes.primaryBodyOrbitMeshes) {
            state.globalMeshes.primaryBodyOrbitMeshes.forEach((planetOrbitMesh) => scene.value.add(planetOrbitMesh));
        }
    }

    function renderFrame(): void {
        if (state.globalMeshes.gridMesh) {
            state.globalMeshes.gridMesh.visible = state.gridEnabled;
        }

        const secondaryBodyPool = state.focusedSecondaryBodyMap;
        for (const [_, value] of secondaryBodyPool.entries()) {
            if (!state.secondaryOrbitMeshMap.has(value.id)) {
                const mesh = buildOrbitMeshLine(value.orbit, new Color(0xa9a9a9), value.name, 50000);

                state.secondaryOrbitMeshMap.set(value.id, markRaw(mesh));

                scene.value.add(mesh);
            }
        }

        const secondaryBodyMeshPool = state.secondaryOrbitMeshMap;
        if (secondaryBodyMeshPool.size > secondaryBodyPool.size) {
            const toRemove: number[] = [];

            for (const [key, _] of secondaryBodyMeshPool.entries()) {
                if (!secondaryBodyPool.has(key)) {
                    toRemove.push(key);
                }
            }

            toRemove.forEach((value) => {
                const meshLine = secondaryBodyMeshPool.get(value);
                if (meshLine) {
                    meshLine.geometry.dispose();
                    meshLine.material.dispose();

                    scene.value.remove(meshLine);

                    state.setSecondaryBodyFocus(value, false);
                }
            });
        }
    }

    return {
        initializeScene,
        renderFrame,
    };
}
