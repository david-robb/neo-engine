<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';

    import { CAMERA_START_POS } from './utility/constants';
    import Simulation from './features/simulation/components/Simulation.vue';
    import { useStateStore } from './features/simulation/stores/state';
    import SimulationClock from './features/ui/controls/SimulationClock.vue';
    import SecondaryBodyPanel from './features/ui/details/SecondaryBodyPanel.vue';
    import PrimaryBodySelector from './features/ui/controls/PrimaryBodySelector.vue';
    import CloseApproachObjectList from './features/ui/details/CloseApproachObjectList.vue';
    import Startup from './features/ui/general/Startup.vue';
    import HelpMenu from './features/ui/general/HelpMenu.vue';

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
        <CloseApproachObjectList v-if="state.isReady" />
        <PrimaryBodySelector v-if="state.isReady" />
        <SecondaryBodyPanel v-if="state.isReady" />
        <SimulationClock v-if="state.isReady" />
        <TresCanvas :antialias="true" clear-color="#000000" logarithmicDepthBuffer window-size>
            <TresPerspectiveCamera :position="CAMERA_START_POS" :look-at="[0, 0, 0]" :near="0.00001" :far="100000000000" :fov="20" />
            <Simulation v-if="state.isReady" />
        </TresCanvas>
    </div>
</template>
