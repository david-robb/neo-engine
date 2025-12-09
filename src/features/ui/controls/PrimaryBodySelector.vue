<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import { Pane } from 'tweakpane';
    import { useStateStore } from '../../simulation/stores/state';
    import * as EssentialsPlugin from '@tweakpane/plugin-essentials';
    import { BindingApi } from '@tweakpane/core';

    const SELECTED_BODY = {
        selection: 'Sun',
    };

    const state = useStateStore();

    const paneContainer = ref<HTMLElement | null>(null);
    let pane: Pane | null = null;
    let selectionBinding: BindingApi | undefined = undefined;

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

        resetBinding();

        pane.refresh();
    });

    watch(
        () => state.uiDisabled,
        (uiDisabled) => {
            if (pane) {
                pane.disabled = uiDisabled;

                if (!uiDisabled) {
                    resetBinding();
                }

                pane.refresh();
            }
        }
    );

    watch(
        () => state._focusedBody,
        () => {
            resetBinding();
        }
    );

    function destroy(): void {
        if (pane) {
            pane.hidden = true;
        }

        if (selectionBinding) {
            selectionBinding.dispose();
        }
    }

    function resetBinding(): void {
        if (!pane) {
            return;
        }

        if (selectionBinding) {
            selectionBinding.dispose();
        }

        if (state._focusedBody) {
            SELECTED_BODY.selection = state.focusedBodyName;
        }

        const labels = Array.from(state._primaryBody.keys());
        selectionBinding = pane
            .addBinding(SELECTED_BODY, 'selection', {
                view: 'radiogrid',
                groupName: 'scale',
                size: [1, labels.length],
                cells: (_: number, y: number) => ({
                    title: labels[y],
                    value: labels[y],
                }),
                label: undefined,
            })
            .on('change', (ev) => {
                state.setFocusByName(ev.value);
            });

        pane.hidden = false;
        pane.disabled = false;
    }
</script>

<template>
    <div ref="paneContainer" class="pane-holder"></div>
</template>

<style scoped>
    .pane-holder {
        position: absolute;
        z-index: 10;

        top: 50%;
        transform: translateY(-25%);

        width: 150px;
    }
</style>
