<script setup lang="ts">
import { AsteroidModel } from '../asteroid';
import * as THREE from 'three';
import { Vector3 } from 'three';
import { calculateOrbit } from '../orbit';
import { useTres } from '@tresjs/core';

const props = defineProps({
        asteroids: { type: Array, default: () => [] },
    }) as { asteroids: AsteroidModel[] };

    const allOrbits: Vector3[][] = props.asteroids.map((asteroid) => calculateOrbit(asteroid));
    const allOrbitPositions: Vector3[] = [];

    allOrbits.forEach((orbit) => {
        allOrbitPositions.push(...orbit);
    });

    const indicies: number[] = [];
    let offset = 0;
    allOrbits.forEach((orbit) => {
        const pointCount = orbit.length;

        for (let i = 0; i < pointCount - 1; i++) {
            indicies.push(offset + i, offset + i + 1);
        }

        offset += pointCount;
    });

    const allPoints = Float32Array.from(allOrbitPositions.flatMap((i) => [i.x, i.y, i.z]));

    const material = new THREE.LineBasicMaterial({ color: 0xa9a9a9 });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(allPoints, 3));
    geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indicies), 1));

    const lineSegments = new THREE.LineSegments(geometry, material);

    const { scene } = useTres();
    scene.value.add(lineSegments);
</script>

<template></template>
