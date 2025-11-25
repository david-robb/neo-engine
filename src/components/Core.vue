<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useTres } from '@tresjs/core';
    import { State, useStateStore } from '../stores/state';
    import Simulation from './simulation/components/Simulation.vue';
    import { SimulationMode, SimulationStartState } from './simulation/types/simulation.types';
    import { init } from './simulation/initialization/simulation-init';
    import { SIMULATION_MODE } from '../utility/constants';

    const isLoading = ref(true);

    const { scene, renderer, camera } = useTres();
    const state = useStateStore();

    onMounted(async () => {
        renderer.setPixelRatio(window.devicePixelRatio);

        camera.value?.layers.enable(1);
        camera.value?.layers.enable(2);

        const initState: SimulationStartState = await init(SIMULATION_MODE);

        state.$patch((state: State) => {
            state.neos = initState.objects;
            state.meshes.neoInstancedMesh = initState.objectsMesh;
            state.meshes.gridMesh = initState.gridMesh;
        });

        scene.value.add(initState.gridMesh);
        scene.value.add(initState.objectsMesh);

        isLoading.value = false;
    });
</script>

<template>
    <Simulation v-if="!isLoading" />
</template>
