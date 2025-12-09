<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import { Pane } from 'tweakpane';
    import { useStateStore } from '../../simulation/stores/state';
    import * as EssentialsPlugin from '@tweakpane/plugin-essentials';

    const CLOCK_DETAILS = {
        time: '',
        multiplier: '',
    };

    const state = useStateStore();

    const paneContainer = ref<HTMLElement | null>(null);
    let pane: Pane | null = null;

    onMounted(() => {
        if (!paneContainer.value) {
            return;
        }

        pane = new Pane({
            container: paneContainer.value,
            title: undefined,
            expanded: true,
        });

        pane.registerPlugin(EssentialsPlugin);

        addSelectedObjectDefaultBinding(pane, 'time');

        const labels = ['<<<', '<<', '<', '-', '>', '>>', '>>>'];
        const values = [-86400 * 30, -86400 * 7, -86400, 1, 86400, 86400 * 7, 86400 * 30];
        pane.addBinding(CLOCK_DETAILS, 'multiplier', {
            view: 'radiogrid',
            groupName: 'scale',
            size: [7, 1],
            cells: (x: number, _: number) => ({
                title: labels[x],
                value: values[x],
            }),
            label: undefined,
        }).on('change', (ev) => {
            const multiplier = +ev.value;

            state.updateTimeMultiplier(multiplier);
        });

        pane.hidden = true;
    });

    const addSelectedObjectDefaultBinding = (pane: Pane, key: string) => {
        const binding = pane.addBinding(CLOCK_DETAILS, key as any, { label: undefined });
        binding.disabled = true;
    };

    watch(
        () => state._time.simulationClock,
        (date) => {
            if (date && pane) {
                pane.hidden = false;

                CLOCK_DETAILS.time = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
                pane.refresh();
            }
        }
    );
</script>

<template>
    <div ref="paneContainer" class="pane-holder"></div>
</template>

<style scoped>
    .pane-holder {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -0%);
        z-index: 10;

        width: 220px;
    }
</style>
