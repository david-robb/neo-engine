<script setup lang="ts">
    import { markRaw, onMounted, ref } from 'vue';
    import { Pane } from 'tweakpane';
    import { format, parse } from '@formkit/tempo';
    import { BindingApi } from '@tweakpane/core';
    import { SimulationMode, SimulationStartState } from '../../simulation/types/simulation.types';
    import { init } from '../../simulation/initialization/simulation-init';
    import { SimulationStateFlags, State, useStateStore } from '../../simulation/stores/state';

    const state = useStateStore();

    const paneContainer = ref<HTMLElement | null>(null);
    let pane: Pane | null = null;

    onMounted(() => {
        if (!paneContainer.value) {
            return;
        }

        const START_UP_PARAMS = {
            simulationMode: SimulationMode.ONLY_HAZARDOUS,
            amountSelected: 10,
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
            const epochDate = parse(START_UP_PARAMS.simulationEpoch, { date: 'medium', time: 'short' });

            state.setEpoch(epochDate);

            const initState: SimulationStartState = await init(START_UP_PARAMS.simulationMode, epochDate, START_UP_PARAMS.amountSelected);

            state.$patch((state: State) => {
                state.neos = initState.objects;
                state.meshes.neoInstancedMesh = markRaw(initState.objectsMesh);
                state.meshes.gridMesh = markRaw(initState.gridMesh);
            });

            if (pane) {
                pane.hidden = true;
            }

            state.clearFlag(SimulationStateFlags.SIMULATION_LOADING);
        });
    });
</script>

<template>
    <div ref="paneContainer" class="pane-holder"></div>
</template>

<style scoped>
    .pane-holder {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
        z-index: 10;

        width: 300px;
    }
</style>
