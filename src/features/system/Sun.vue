<script setup lang="ts">
    import * as THREE from 'three';
    import { useTres } from '@tresjs/core';
    import { onMounted } from 'vue';
    import { OBJECTS_RENDER_ORDER } from '../../utility/constants';

    function addSun(): void {
        const sphereGeometry = new THREE.SphereGeometry(695700, 30, 30);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
        sunMesh.renderOrder = OBJECTS_RENDER_ORDER;

        const { scene } = useTres();

        scene.value.add(sunMesh);
    }

    onMounted(() => {
        addSun();
    });
</script>

<template></template>
