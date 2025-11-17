<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';

    import Space from './components/Space.vue';
    import { CameraControls, Stats } from '@tresjs/cientos';
    import { CAMERA_START_POS } from './constants';
</script>

<template>
    <div id="canvas">
        <TresCanvas clear-color="#000000" window-size>
            <TresPerspectiveCamera :position="CAMERA_START_POS" :look-at="[0, 0, 0]" :near="0.00001" :far="100000" />

            <CameraControls />
            <Stats />
            <Space />
        </TresCanvas>
    </div>
</template>
