<script setup lang="ts">
    import { AsteroidModel } from '../asteroid';
    import * as THREE from 'three';
    import { ASTEROID_RADIUS } from '../constants';
    import { calculatePosition } from '../orbit';
    import { useLoop, useTres } from '@tresjs/core';

    const props = defineProps({
        asteroids: { type: Array, default: () => [] },
    }) as { asteroids: AsteroidModel[] };

    const geometry = new THREE.SphereGeometry(ASTEROID_RADIUS, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0xa9a9a9 });
    const mesh = new THREE.InstancedMesh(geometry, material, props.asteroids.length);

    const { scene } = useTres();
    scene.value.add(mesh);

    let t = 0.0;
    const dt = 1 / 60;
    let accumulator = 0;

    const { onBeforeRender } = useLoop();
    const matrix = new THREE.Matrix4();

    onBeforeRender(({ delta }) => {
        let frameTime = delta;
        if (frameTime > 0.25) {
            frameTime = 0.25;
        }

        accumulator += frameTime;

        while (accumulator >= dt) {
            for (let i = 0; i < props.asteroids.length; i++) {
                const asteroid = props.asteroids[i];

                // 120 fps => t / 24 => 24 HRS per minute
                // calculatePosition takes t in days
                const asteroidPosition = calculatePosition(asteroid, t / 24);

                matrix.setPosition(asteroidPosition);
                mesh.setMatrixAt(i, matrix);

                mesh.instanceMatrix.needsUpdate = true;
            }

            t += dt;
            accumulator -= dt;
        }
    });
</script>
<template></template>
