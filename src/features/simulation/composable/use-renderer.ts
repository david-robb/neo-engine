import { useStateStore } from '../stores/state';
import { useTres } from '@tresjs/core';
import { buildOrbitMeshLine } from '../services/mesh.service';
import { Color } from 'three';
import { markRaw } from 'vue';

export function useRenderer(): { initializeScene: () => void; renderFrame: () => void } {
    const state = useStateStore();
    const { scene, renderer } = useTres();

    function initializeScene(): void {
        renderer.setPixelRatio(window.devicePixelRatio);

        if (state._meshes.gridMesh) {
            scene.value.add(state._meshes.gridMesh);
        }

        if (state._meshes.secondaryBodiesMesh) {
            scene.value.add(state._meshes.secondaryBodiesMesh);
        }

        if (state._meshes.primaryBodyMeshes) {
            state._meshes.primaryBodyMeshes.forEach((planetMesh) => scene.value.add(planetMesh));
        }

        if (state._meshes.primaryBodyOrbitMeshes) {
            state._meshes.primaryBodyOrbitMeshes.forEach((planetOrbitMesh) => scene.value.add(planetOrbitMesh));
        }
    }

    function renderFrame(): void {
        if (state._meshes.gridMesh) {
            state._meshes.gridMesh.visible = state.gridEnabled;
        }

        const secondaryBodyPool = state.focusedPool;
        for (const [_, value] of secondaryBodyPool.entries()) {
            if (!state._secondaryBodyMeshPool.has(value.id)) {
                const mesh = buildOrbitMeshLine(value.orbit, new Color(0xa9a9a9), value.name, 50000);

                state._secondaryBodyMeshPool.set(value.id, markRaw(mesh));

                scene.value.add(mesh);
            }
        }

        const secondaryBodyMeshPool = state._secondaryBodyMeshPool;
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

                    state.unfocusObject(value);
                }
            });
        }
    }

    return {
        initializeScene,
        renderFrame,
    };
}
