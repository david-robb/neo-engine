<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';

    import { CAMERA_START_POS } from './utility/constants';
    import Simulation from './features/simulation/components/Simulation.vue';
    import Startup from './features/ui/components/Startup.vue';
    import { useStateStore } from './features/simulation/stores/state';
    import SelectedObjectDetails from './features/ui/components/SelectedObjectDetails.vue';
    import SimulationClock from './features/ui/components/SimulationClock.vue';
    import HelpMenu from './features/ui/components/HelpMenu.vue';
    import CloseApproachObjectList from './features/ui/components/CloseApproachObjectList.vue';

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
        <HelpMenu />
        <Startup />
        <CloseApproachObjectList />
        <SelectedObjectDetails v-if="state.isReady" />
        <SimulationClock v-if="state.isReady" />
        <TresCanvas :antialias="true" clear-color="#000000" logarithmicDepthBuffer window-size>
            <TresPerspectiveCamera :position="CAMERA_START_POS" :look-at="[0, 0, 0]" :near="0.00001" :far="100000000000" :fov="20" />
            <Simulation v-if="state.isReady" />
        </TresCanvas>
    </div>
</template>
