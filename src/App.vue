<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';

    import Space from './components/Space.vue';
    import { CameraControls, Stats } from '@tresjs/cientos';
</script>

<template>
    <div id="canvas">
        <TresCanvas clear-color="#000000" window-size>
            <TresPerspectiveCamera :position="[-2, 4, 2]" :look-at="[0, 0, 0]" :near="0.0001" />

            <CameraControls />
            <Space />
            <Stats />
        </TresCanvas>
    </div>
</template>
