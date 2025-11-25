<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';

    import Core from './components/Core.vue';
    import { Stats } from '@tresjs/cientos';
    import { CAMERA_START_POS } from './utility/constants';
</script>

<template>
    <TresCanvas :antialias="true" clear-color="#000000" window-size>
        <TresPerspectiveCamera :position="CAMERA_START_POS" :look-at="[0, 0, 0]" :near="0.00001" :far="104104577000" />
        <Stats />
        <Core />
    </TresCanvas>
</template>
