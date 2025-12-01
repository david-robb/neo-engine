<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import { Pane } from 'tweakpane';
    import { useStateStore } from '../../simulation/stores/state';

    const CLOSE_OBJECT_PARAMS = {
        closeObjsJson: '',
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
            title: 'Close Objects',
            expanded: true,
        });

        pane.addBinding(CLOSE_OBJECT_PARAMS, 'closeObjsJson', {
            readonly: true,
            multiline: true,
            label: undefined,
            rows: 10,
        });

        pane.hidden = true;
    });

    watch(
        () => state.nearEarthObjects,
        (objects) => {
            if (!pane) {
                return;
            }

            pane.hidden = !(objects.length > 0);

            CLOSE_OBJECT_PARAMS.closeObjsJson = objects.join('\n');

            pane.refresh();
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
        top: 100%;
        transform: translate(-120%, -120%);

        width: 320px;
    }
</style>
