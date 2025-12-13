<script setup lang="ts">
    import SearchObjects from './general/SearchObjects.vue';
    import ObjectDetails from './general/ObjectDetails.vue';
    import StartupForm from './startup/StartupForm.vue';
    import SimulationControls from './general/SimulationControls.vue';
    import PrimaryBodyMenu from './general/PrimaryBodyMenu.vue';
    import { useSimulationStateStore } from '../simulation/stores/simulation-state';

    const state = useSimulationStateStore();
</script>

<template>
    <StartupForm />
    <template v-if="state.isReady">
        <PrimaryBodyMenu />
        <SimulationControls />
        <SearchObjects />
        <ObjectDetails />
    </template>
</template>
