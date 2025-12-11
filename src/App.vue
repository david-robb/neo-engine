<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';

    import { CAMERA_START_POS } from './utility/constants';
    import Simulation from './features/simulation/components/Simulation.vue';
    import { useStateStore } from './features/simulation/stores/state';
    import UI from './features/ui/UI.vue';

    const state = useStateStore();
</script>

<template>
    <div id="scene-wrapper" class="fixed inset-0 overflow-hidden">
        <UI />
        <TresCanvas :antialias="true" clear-color="#000000" logarithmicDepthBuffer window-size>
            <TresPerspectiveCamera :position="CAMERA_START_POS" :look-at="[0, 0, 0]" :near="0.00001" :far="100000000000" :fov="20" />
            <Simulation v-if="state.isReady" />
        </TresCanvas>
    </div>
</template>
