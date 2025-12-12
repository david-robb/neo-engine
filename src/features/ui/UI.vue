<script setup lang="ts">
    import SearchSecondaryBodies from './general/SearchSecondaryBodies.vue';
    import { useStateStore } from '../simulation/stores/state';
    import SecondaryObjectDetails from './general/SecondaryObjectDetails.vue';
    import StartupForm from './startup/StartupForm.vue';
    import SimulationControls from './general/SimulationControls.vue';
    import PrimaryBodyMenu from './general/PrimaryBodyMenu.vue';

    const state = useStateStore();
</script>

<template>
    <StartupForm />
    <template v-if="state.isReady">
        <PrimaryBodyMenu />
        <SimulationControls />
        <SearchSecondaryBodies />
        <SecondaryObjectDetails />
    </template>
</template>
