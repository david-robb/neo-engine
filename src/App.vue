<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';

    import { CAMERA_START_POS } from './utility/constants';
    import Simulation from './components/simulation/components/Simulation.vue';
    import { FlagUtilities } from './components/simulation/utilities/flag.utilities';
    import Startup from './components/ui/components/Startup.vue';
    import { SimulationStateFlags, useStateStore } from './components/simulation/stores/state';
    import SelectedObjectDetails from './components/ui/components/SelectedObjectDetails.vue';
    import SimulationClock from './components/ui/components/SimulationClock.vue';

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
        <SelectedObjectDetails />
        <SimulationClock />
        <TresCanvas :antialias="true" clear-color="#000000" window-size>
            <TresPerspectiveCamera :position="CAMERA_START_POS" :look-at="[0, 0, 0]" :near="0.00001" :far="104104577000" />
            <Simulation v-if="!FlagUtilities.hasFlag(state.stateFlags, SimulationStateFlags.SIMULATION_LOADING)" />
        </TresCanvas>
    </div>
</template>
