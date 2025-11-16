<script setup lang="ts">
    import { SCALE_FACTOR } from '../constants';
    import * as THREE from 'three';
    import { useTres } from '@tresjs/core';

    const sphereGeometry = new THREE.SphereGeometry(0.00465047 * SCALE_FACTOR, 50, 50);
    const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xffff00 });
    const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);

    const { scene } = useTres();

    scene.value.add(sunMesh);
</script>
<template></template>
