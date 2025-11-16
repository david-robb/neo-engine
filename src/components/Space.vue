<script setup lang="ts">
    import { AsteroidModel, ResponseSchema } from '../asteroid';
    import { ASTEROID_JSON_LIST } from '../data';
    import Sun from './Sun.vue';
    import Bodies from './Bodies.vue';
    import Orbits from './Orbits.vue';
    import { TOTAL_ASTEROID_COUNT } from '../constants';

    const response = ResponseSchema.parse(ASTEROID_JSON_LIST);
    const allAsteroids = Object.entries(response.near_earth_objects!).flatMap(([_, value]) => value);

    const asteroids: AsteroidModel[] = allAsteroids.slice(0, TOTAL_ASTEROID_COUNT);
</script>

<template>
    <Sun />
    <Bodies :asteroids="asteroids" />
    <Orbits :asteroids="asteroids" />
</template>
