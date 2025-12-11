<script setup lang="ts">
    interface HelpItem {
        label: string;
        value: string;
    }

    interface HelpMenu {
        items: HelpItem[];
    }

    const menu: HelpMenu = {
        items: [
            {
                label: 'S',
                value: 'Search',
            },
            {
                label: 'G',
                value: 'Toggle Grid',
            },
        ],
    };
</script>

<template>
    <div class="absolute z-10">
        <Card class="opacity-70 m-6">
            <template #title><div class="text-center text-base">Help</div></template>
            <template #content>
                <DataTable :value="menu.items" :size="'small'">
                    <Column field="label"></Column>
                    <Column field="value"></Column>
                </DataTable>
            </template>
        </Card>
    </div>
</template>
