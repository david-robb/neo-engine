<script setup lang="ts">
    import { markRaw, onMounted, ref } from 'vue';
    import { Pane } from 'tweakpane';
    import { format, parse } from '@formkit/tempo';
    import { SimulationMode, SimulationStartState } from '../../simulation/types/simulation.types';
    import { useStateStore } from '../../simulation/stores/state';
    import { initializeSimulation } from '../../simulation/services/simulation-initializer.service';
    import { SimulationState } from '../../simulation/stores/state.types';
    import { fetchTotalCount } from '../../simulation/services/database-api.service';
    import * as EssentialsPlugin from '@tweakpane/plugin-essentials';

    const START_UP_PARAMS = {
        simulationMode: SimulationMode.ONLY_HAZARDOUS,
        amountSelected: 3,
        simulationEpoch: format(new Date(), { date: 'medium', time: 'short' }),
        percent: 50,
        label: '',
    };

    const state = useStateStore();

    const paneContainer = ref<HTMLElement | null>(null);
    let pane: Pane | null = null;

    let totalCount = ref(0);

    onMounted(async () => {
        if (!paneContainer.value) {
            return;
        }

        await fetchTotalCount().then((count) => {
            totalCount.value = count;

            if (pane) {
                pane.refresh();
            }
        });

        pane = new Pane({
            container: paneContainer.value,
            title: 'NEO Engine',
            expanded: true,
        });

        pane.registerPlugin(EssentialsPlugin);

        pane.addBinding(START_UP_PARAMS, 'simulationEpoch', {
            label: 'Epoch',
        });

        const sizes = [10, 25, 50, 75, 100];
        const binding = pane
            .addBinding(START_UP_PARAMS, 'percent', {
                view: 'radiogrid',
                groupName: 'scale',
                size: [5, 1],
                cells: (x: number, y: number) => ({
                    title: `${sizes[x]}%`,
                    value: sizes[x],
                }),
                label: `Object Count (${Math.floor(totalCount.value * (START_UP_PARAMS.percent / 100))})`,
            })
            .on('change', (event) => {
                if (pane) {
                    START_UP_PARAMS.percent = event.value;

                    binding.label = `Object Count (${Math.floor(totalCount.value * (START_UP_PARAMS.percent / 100))})`;

                    pane.refresh();
                }
            });

        pane.addBlade({
            view: 'separator',
        });

        const startButton = pane.addButton({
            title: 'Start',
        });

        startButton.on('click', async () => {
            if (pane) {
                pane.hidden = true;
                pane.refresh();
            }

            state.setFlags(SimulationState.SIMULATION_LOADING);

            const epochDate = parse(START_UP_PARAMS.simulationEpoch, { date: 'medium', time: 'short' });
            state.setEpoch(epochDate);

            const initState: SimulationStartState = await initializeSimulation(
                SimulationMode.CUSTOM_AMOUNT,
                epochDate,
                Math.floor(totalCount.value * (START_UP_PARAMS.percent / 100))
            );

            state.$patch((state: any) => {
                state.neos = initState.objects;
                state.planets = initState.planets;

                state.meshes.neoInstancedMesh = markRaw(initState.objectsMesh);
                state.meshes.gridMesh = markRaw(initState.gridMesh);
                state.meshes.planetMeshes = markRaw(initState.planetMeshes);
                state.meshes.planetOrbitMeshes = markRaw(initState.planetOrbitMesh);
            });

            if (pane) {
                pane.hidden = true;
            }

            state.setFlags(SimulationState.SIMULATION_READY);
            state.clearFlag(SimulationState.SIMULATION_LOADING);
        });
    });
</script>

<template>
    <span v-if="state.isLoading" class="loader"></span>
    <div ref="paneContainer" class="pane-holder"></div>
</template>

<style scoped>
    .loader {
        z-index: 100;
        top: calc(50% - 24px);
        left: calc(50% - 24px);
        font-size: 48px;
        color: #fff;
        width: 1em;
        height: 1em;
        box-sizing: border-box;
        background-color: currentcolor;
        position: absolute;
        border-radius: 50%;
        transform: rotateX(-60deg) perspective(1000px);
    }

    .loader:before,
    .loader:after {
        content: '';
        display: block;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        animation: flowerFlow 1s ease-out infinite;
    }
    .loader:after {
        animation-delay: 0.4s;
    }

    @keyframes flowerFlow {
        0% {
            opacity: 1;
            transform: rotate(0deg);
            box-shadow:
                0 0 0 -0.5em currentcolor,
                0 0 0 -0.5em currentcolor,
                0 0 0 -0.5em currentcolor,
                0 0 0 -0.5em currentcolor,
                0 0 0 -0.5em currentcolor,
                0 0 0 -0.5em currentcolor,
                0 0 0 -0.5em currentcolor,
                0 0 0 -0.5em currentcolor;
        }
        100% {
            opacity: 0;
            transform: rotate(180deg);
            box-shadow:
                -1em -1em 0 -0.35em currentcolor,
                0 -1.5em 0 -0.35em currentcolor,
                1em -1em 0 -0.35em currentcolor,
                -1.5em 0 0 -0.35em currentcolor,
                1.5em -0 0 -0.35em currentcolor,
                -1em 1em 0 -0.35em currentcolor,
                0 1.5em 0 -0.35em currentcolor,
                1em 1em 0 -0.35em currentcolor;
        }
    }

    .pane-holder {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
        z-index: 10;

        width: 400px;
    }
</style>
