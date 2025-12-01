<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { Pane } from 'tweakpane';
    import * as TextareaPlugin from '@pangenerator/tweakpane-textarea-plugin';

    const paneContainer = ref<HTMLElement | null>(null);
    let pane: Pane | null = null;

    onMounted(() => {
        if (!paneContainer.value) {
            return;
        }

        pane = new Pane({
            container: paneContainer.value,
            title: 'Help',
            expanded: true,
        });

        pane.registerPlugin(TextareaPlugin);

        pane.addBlade({
            view: 'text',
            label: 'G',
            parse: (v: any) => String(v),
            value: 'Toggle Grid',
        }).disabled = true;

        pane.addBlade({
            view: 'text',
            label: 'Left Click',
            parse: (v: any) => String(v),
            value: 'Select Object',
        }).disabled = true;

        pane.refresh();
    });
</script>

<template>
    <div ref="paneContainer" class="pane-holder"></div>
</template>

<style scoped>
    .pane-holder {
        position: absolute;
        z-index: 10;

        width: 300px;
    }
</style>
