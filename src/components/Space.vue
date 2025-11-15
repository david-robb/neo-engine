<script setup lang="ts">
    import { Sphere } from '@tresjs/cientos';
    import { onMounted } from 'vue';
    import { Asteroid, AsteroidSchema } from '../asteroid';
    import { ASTEROID_JSON, ASTEROID_JSON_2 } from '../data';
    import { useTres } from '@tresjs/core';
    import { calculateOrbit } from '../orbit';

    import * as THREE from 'three';
    import { LineBasicMaterialParameters } from 'three';

    function calculateOutline(asteroid: Asteroid, parameters?: LineBasicMaterialParameters): THREE.Line {
        const orbit = calculateOrbit(asteroid);

        const geometry = new THREE.BufferGeometry().setFromPoints(orbit);
        const material = new THREE.LineBasicMaterial(parameters);
        return new THREE.Line(geometry, material);
    }

    const { scene } = useTres();

    onMounted(() => {
        const asteroid1: Asteroid = AsteroidSchema.parse(ASTEROID_JSON);
        const asteroid2: Asteroid = AsteroidSchema.parse(ASTEROID_JSON_2);

        const circleOutline1 = calculateOutline(asteroid1, { color: 0xffffff });
        const circleOutline2 = calculateOutline(asteroid2, { color: 0xffffff });

        scene.value.add(circleOutline1);
        // scene.value.add(circleOutline2);
    });
</script>

<template>
    <!--    <Stars />-->
    <Sphere :position="[0, 0, 0]" :args="[0.00465047, 100, 100]" color="yellow" />

    <!--  <TresAxesHelper />-->
    <!--  <Grid-->
    <!--    cell-color="white"-->
    <!--    section-color="white"-->
    <!--    :section-thickness="0.2"-->
    <!--    :cell-thickness="1"-->
    <!--    :infinite-grid="true"-->
    <!--    :fade-distance="12"-->
    <!--    :fade-from="0"-->
    <!--  />-->
</template>
