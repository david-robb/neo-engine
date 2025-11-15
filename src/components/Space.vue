<script setup lang="ts">
    import { Sphere } from '@tresjs/cientos';
    import type { AsteroidModel } from '../asteroid';
    import { AsteroidSchema } from '../asteroid';
    import { ASTEROID_JSON, ASTEROID_JSON_2 } from '../data';
    import Asteroid from './Asteroid.vue';

    const asteroid1: AsteroidModel = AsteroidSchema.parse(ASTEROID_JSON);
    const asteroid2: AsteroidModel = AsteroidSchema.parse(ASTEROID_JSON_2);
</script>

<template>
    <!--    <Stars />-->
    <!--    <TresGridHelper />-->

    <Sphere :position="[0, 0, 0]" :args="[0.00465047, 100, 100]" color="yellow" />
    <Asteroid :asteroid="asteroid1" />
    <Asteroid :asteroid="asteroid2" />

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
