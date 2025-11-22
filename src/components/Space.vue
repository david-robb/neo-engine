<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useTres } from '@tresjs/core';
    import Bodies from './Bodies.vue';
    import { useStateStore } from '../stores/state';
    import * as THREE from 'three';
    import { calculateIntersectedObject } from '../utility/raycast';
    import { buildGrid, loadEngineNEOs } from './Space';
    import SolarSystem from './system/SolarSystem.vue';
    import UserInterface from './UserInterface.vue';
    import { EngineNEO } from './simulation/types/neo-engine';

    const isLoading = ref(true);

    const { scene, renderer, camera } = useTres();
    const state = useStateStore();

    function onMouseMove(event: MouseEvent) {
        const pickPosition = getCanvasRelativePosition(event);

        const intersectedNeo = calculateIntersectedObject(scene.value, pickPosition, camera.value!);
        state.updateHoveredNeo(intersectedNeo);
    }

    function onMouseClick(event: MouseEvent) {
        const pickPosition = getCanvasRelativePosition(event);

        const intersectedNeo = calculateIntersectedObject(scene.value, pickPosition, camera.value!);
        state.focusNeo(intersectedNeo);
    }

    function getCanvasRelativePosition(event: MouseEvent): THREE.Vector2 {
        const canvas = renderer.domElement;

        if (!canvas) return new THREE.Vector2();

        const rect = canvas.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        return new THREE.Vector2(x, y);
    }

    onMounted(async () => {
        const neos: EngineNEO[] = await loadEngineNEOs();
        const grid: THREE.GridHelper = buildGrid();

        neos.forEach((neo) => {
            scene.value.add(neo.mesh.orbit);
            scene.value.add(neo.mesh.sphere);
        });

        scene.value.add(grid);

        renderer.setPixelRatio(window.devicePixelRatio);

        state.$patch({ bodies: neos });

        camera.value?.layers.enable(1);
        camera.value?.layers.enable(2);

        isLoading.value = false;

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseClick);
    });
</script>

<template>
    <SolarSystem />
    <UserInterface v-if="!isLoading" />
    <Bodies v-if="!isLoading" />
</template>
