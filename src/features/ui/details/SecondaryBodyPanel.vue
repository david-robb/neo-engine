<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import { ButtonApi, Pane } from 'tweakpane';
    import { useStateStore } from '../../simulation/stores/state';
    import { EngineSecondaryBody } from '../../simulation/types/simulation.types';

    const state = useStateStore();

    const paneContainer = ref<HTMLElement | null>(null);
    let pane: Pane | null = null;

    const bodies: Set<number> = new Set();

    onMounted(() => {
        if (!paneContainer.value) {
            return;
        }

        pane = new Pane({
            container: paneContainer.value,
            title: undefined,
            expanded: true,
        });

        pane.hidden = true;
        pane.refresh();
    });

    function removeBody(body: EngineSecondaryBody, button: ButtonApi): void {
        state._secondaryBodyPool.delete(body.id);

        button.dispose();
        if (pane) {
            pane.refresh();
        }

        bodies.delete(body.id);

        if (bodies.size === 0 && pane) {
            pane.hidden = true;
        }
    }

    function addBody(body: EngineSecondaryBody): void {
        if (!pane) {
            return;
        }

        bodies.add(body.id);

        const button = pane
            .addButton({
                title: '🗑',
                label: body.name,
            })
            .on('click', () => {
                removeBody(body, button);
            });

        pane.hidden = false;
        pane.refresh();
    }

    watch(
        () => state.secondaryPoolSize,
        (value) => {
            if (bodies.size < value) {
                for (const [key, value] of state._secondaryBodyPool) {
                    if (!bodies.has(key)) {
                        addBody(value);
                    }
                }
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
        z-index: 10;

        left: 100%;
        transform: translateX(-120%);

        width: 200px;
    }

    .pane-holder :deep(.tp-lblv_v) {
        width: 30px;
    }
</style>
