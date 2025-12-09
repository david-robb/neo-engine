<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { Pane } from 'tweakpane';
    import { format, parse } from '@formkit/tempo';
    import { SimulationStateFlags, useStateStore } from '../../simulation/stores/state';
    import { initializeSimulation } from '../../simulation/services/initialization.service';
    import { fetchTotalCount } from '../../simulation/services/database-api.service';
    import * as EssentialsPlugin from '@tweakpane/plugin-essentials';

    const START_UP_PARAMS = {
        simulationEpoch: format(new Date(), { date: 'medium', time: 'short' }),
        percent: 100,
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

        state.setLoading(true);

        await fetchTotalCount().then((count) => {
            state.setLoading(false);

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
                cells: (x: number, _: number) => ({
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

            state.setLoading(true);

            const epochDate = parse(START_UP_PARAMS.simulationEpoch, { date: 'medium', time: 'short' });
            state.setEpoch(epochDate);

            await initializeSimulation(epochDate, Math.floor(totalCount.value * (START_UP_PARAMS.percent / 100)));

            if (pane) {
                pane.hidden = true;
            }

            state.setFlags(SimulationStateFlags.SIMULATION_READY);
            state.setLoading(false);
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
