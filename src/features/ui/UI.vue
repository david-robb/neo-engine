<script setup lang="ts">
    import SimulationClock from './controls/SimulationClock.vue';
    import SearchSecondaryBodies from './search/SearchSecondaryBodies.vue';
    import CloseApproachObjectList from './details/CloseApproachObjectList.vue';
    import { useStateStore } from '../simulation/stores/state';
    import Help from './general/Help.vue';
    import SecondaryPoolTable from './general/SecondaryPoolTable.vue';
    import StartupForm from './startup/StartupForm.vue';

    const state = useStateStore();
</script>

<template>
    <StartupForm />
    <Help />
    <template v-if="state.isReady">
        <SearchSecondaryBodies />
        <CloseApproachObjectList />
        <SimulationClock />
        <SecondaryPoolTable />
    </template>
</template>
