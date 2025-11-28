<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';

    import { CAMERA_START_POS } from './utility/constants';
    import Simulation from './features/simulation/components/Simulation.vue';
    import Startup from './features/ui/components/Startup.vue';
    import { useStateStore } from './features/simulation/stores/state';
    import SelectedObjectDetails from './features/ui/components/SelectedObjectDetails.vue';
    import SimulationClock from './features/ui/components/SimulationClock.vue';

    const state = useStateStore();
</script>

<style scoped>
    #scene-wrapper {
        position: relative;
        width: 100vw;
        height: 100vh;
    }
</style>

<template>
    <div id="scene-wrapper">
        <Startup />
        <SelectedObjectDetails v-if="state.isReady" />
        <SimulationClock v-if="state.isReady" />
        <!--        <Stats />-->
        <TresCanvas :antialias="true" clear-color="#1b1b1c" logarithmicDepthBuffer window-size>
            <TresPerspectiveCamera :position="CAMERA_START_POS" :look-at="[0, 0, 0]" :near="0.00001" :far="10000000000" />
            <Simulation v-if="state.isReady" />
        </TresCanvas>
    </div>
</template>
