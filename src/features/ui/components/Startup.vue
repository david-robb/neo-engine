<script setup lang="ts">
    import { markRaw, onMounted, ref } from 'vue';
    import { Pane } from 'tweakpane';
    import { format, parse } from '@formkit/tempo';
    import { BindingApi } from '@tweakpane/core';
    import { SimulationMode, SimulationStartState } from '../../simulation/types/simulation.types';
    import { useStateStore } from '../../simulation/stores/state';
    import { SimulationState, State } from '../../simulation/types/state.types';
    import { initializeSimulation } from '../../simulation/services/simulation-initializer.service';

    const state = useStateStore();

    const paneContainer = ref<HTMLElement | null>(null);
    let pane: Pane | null = null;

    onMounted(() => {
        if (!paneContainer.value) {
            return;
        }

        const START_UP_PARAMS = {
            simulationMode: SimulationMode.ONLY_HAZARDOUS,
            amountSelected: 100,
            simulationEpoch: format(new Date(), { date: 'medium', time: 'short' }),
        };

        let simulationObjectAmountBinding: BindingApi;

        pane = new Pane({
            container: paneContainer.value,
            title: 'NEO Engine',
            expanded: true,
        });

        pane.addBinding(START_UP_PARAMS, 'simulationEpoch', {
            label: 'Simulation Epoch',
        });

        pane.addBinding(START_UP_PARAMS, 'simulationMode', {
            view: 'list',
            label: 'Mode',
            options: [
                { text: 'All Objects', value: SimulationMode.ALL },
                { text: 'Hazardous Only', value: SimulationMode.ONLY_HAZARDOUS },
                { text: 'Custom Amount', value: SimulationMode.CUSTOM_AMOUNT },
            ],
            value: SimulationMode.ONLY_HAZARDOUS,
        }).on('change', (val) => {
            simulationObjectAmountBinding.hidden = val.value !== SimulationMode.CUSTOM_AMOUNT;
        });

        simulationObjectAmountBinding = pane.addBinding(START_UP_PARAMS, 'amountSelected', {
            label: 'Amount',
            step: 1,
            min: 1,
            max: 10000,
        });
        simulationObjectAmountBinding.hidden = true;

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
                START_UP_PARAMS.simulationMode,
                epochDate,
                START_UP_PARAMS.amountSelected
            );

            state.$patch((state: State) => {
                state.neos = initState.objects;
                state.meshes.neoInstancedMesh = markRaw(initState.objectsMesh);
                state.meshes.gridMesh = markRaw(initState.gridMesh);
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

        width: 300px;
    }
</style>
