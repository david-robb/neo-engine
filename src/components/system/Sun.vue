<script setup lang="ts">
    import * as THREE from 'three';
    import { useTres } from '@tresjs/core';
    import { onMounted } from 'vue';
    import { SCALE_FACTOR } from '../../utility/constants';

    function addSun(): void {
        const sphereGeometry = new THREE.SphereGeometry((0.00465047 * 149600000) / SCALE_FACTOR, 30, 30);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00});
        const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);

        const { scene } = useTres();

        scene.value.add(sunMesh);
    }

    onMounted(() => {
        addSun();
    });
</script>

<template></template>
