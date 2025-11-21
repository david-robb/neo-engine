<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useTres } from '@tresjs/core';
    import Bodies from './Bodies.vue';
    import { useStateStore } from '../stores/state';
    import UserInterface from './UserInterface.vue';
    import SolarSystem from './system/SolarSystem.vue';
    import { buildGrid, loadEngineBodies } from './Space';
    import * as THREE from 'three';
    import { calculateIntersectedObject } from '../utility/raycast';
    import { NeoEngineBody } from 'src/models/body';

    const isLoading = ref(true);
    const { scene, renderer, camera } = useTres();
    const state = useStateStore();

    function onMouseMove(event: MouseEvent) {
        const pickPosition = getCanvasRelativePosition(event);

        const intersectedObject = calculateIntersectedObject(scene.value, pickPosition, camera.value!);
        state.updateHoveredObject(intersectedObject);
    }

    function onMouseClick(event: MouseEvent) {
        const pickPosition = getCanvasRelativePosition(event);

        const intersectedObject = calculateIntersectedObject(scene.value, pickPosition, camera.value!);
        state.focusObject(intersectedObject);
    }

    function getCanvasRelativePosition(event: MouseEvent): THREE.Vector2 {
        const canvas = renderer.domElement;

        if (!canvas) return new THREE.Vector2();

        const rect = canvas.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        return new THREE.Vector2(x, y);
    }

    onMounted(() => {
        const bodies: NeoEngineBody[] = loadEngineBodies();
        const grid: THREE.GridHelper = buildGrid();

        bodies.forEach((body) => {
            scene.value.add(body.mesh.orbit!);
            scene.value.add(body.mesh.sphere!);
        });

        scene.value.add(grid);

        renderer.setPixelRatio(window.devicePixelRatio);

        state.$patch({
            bodies,
        });

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
    <TresPlane :args="[new THREE.Vector3(1, 0, 0), 10000]"></TresPlane>
</template>
