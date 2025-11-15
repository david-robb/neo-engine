<script setup lang="ts">
import { Line2, Sphere } from '@tresjs/cientos';
import { shallowRef } from 'vue';
import type { AsteroidModel } from '../asteroid';
import { TresInstance, useLoop } from '@tresjs/core';
import { calculateOrbit, calculatePosition } from '../orbit';

import { Vector3 } from 'three';

const props = defineProps({
        asteroid: { type: Object, required: true },
        color: { type: String, default: '#FFFFFF' },
    }) as { asteroid: AsteroidModel; color: string };

    const asteroidRef = shallowRef<TresInstance | null>(null);
    const orbitLineRef = shallowRef<TresInstance | null>(null);

    let t = 0.0;

    const { onBeforeRender } = useLoop();
    onBeforeRender(({ delta }) => {
        if (!asteroidRef.value) {
            return;
        }

        const nP: Vector3 = calculatePosition(props.asteroid, t);

        asteroidRef.value.instance.position.x = nP.x;
        asteroidRef.value.instance.position.y = nP.y;
        asteroidRef.value.instance.position.z = nP.z;

        t += delta;
    });
</script>

<template>
    <Line2 ref="orbitLineRef" :points="calculateOrbit(asteroid)" :line-width="0.5" color="#a9a9a9" />
    <Sphere ref="asteroidRef" :position="calculatePosition(props.asteroid)" :args="[0.01, 100, 100]" :color="props.color" />
</template>
