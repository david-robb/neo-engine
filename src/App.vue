<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';

    import { CAMERA_START_POS } from './utility/constants';
    import Simulation from './features/simulation/components/Simulation.vue';
    import UI from './features/ui/UI.vue';
    import { useSimulationStateStore } from './features/simulation/stores/simulation-state';

    const state = useSimulationStateStore();
</script>

<template>
    <div id="scene-wrapper" class="fixed inset-0 overflow-hidden">
        <UI />
        <TresCanvas :antialias="true" clear-color="#171717" logarithmicDepthBuffer window-size>
            <TresPerspectiveCamera :position="CAMERA_START_POS" :look-at="[0, 0, 0]" :near="0.00001" :far="100000000000" />
            <Simulation v-if="state.isReady" />
        </TresCanvas>
    </div>
</template>
