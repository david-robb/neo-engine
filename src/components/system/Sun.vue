<script setup lang="ts">
    import * as THREE from 'three';
    import { useTres } from '@tresjs/core';
    import { onMounted } from 'vue';
    import { SCALE_FACTOR } from '../../utility/constants';
    import { Color, PointLight } from 'three';

    function addSun(): void {
        const sphereGeometry = new THREE.SphereGeometry((0.00465047 * 149600000) / SCALE_FACTOR, 30, 30);
        // const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xffff00});
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00});
        const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);

        // const light = new PointLight();
        // light.position.set(0, 0, 0);
        // light.intensity = 1000000000000000;
        // light.color = new Color('white');

        const { scene } = useTres();

        scene.value.add(sunMesh);
        // scene.value.add(light);
    }

    onMounted(() => {
        addSun();
    });
</script>

<template></template>
