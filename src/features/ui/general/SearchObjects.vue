<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { AutoCompleteCompleteEvent } from 'primevue/autocomplete';
    import { IdNamePair, useSimulationStateStore } from '../../simulation/stores/simulation-state';

    const state = useSimulationStateStore();
    const secondaryBodySearchArray = state.secondaryBodySearchArray;

    const filteredItems = ref<IdNamePair[]>([]);
    const selectedValue = ref<IdNamePair | undefined>(undefined);

    onMounted(() => {});

    const search = (event: AutoCompleteCompleteEvent) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                filteredItems.value = [...secondaryBodySearchArray];
            } else {
                filteredItems.value = secondaryBodySearchArray.filter((body) =>
                    body.name.toLowerCase().includes(event.query.toLowerCase())
                );
            }
        }, 250);
    };

    const onFormSubmit = () => {
        const selected = selectedValue.value;
        if (!selected) {
            return;
        }

        state.setSecondaryBodyFocus(selected.id, true);

        selectedValue.value = undefined;

        state.setSearchFlag(false);
    };
</script>

<template>
    <div class="absolute z-10 bottom-0 flex flex-col">
        <Button icon="pi pi-search" size="large" class="ml-8 mb-8" outlined rounded @click="state.setSearchFlag(true)" />
    </div>
    <div v-if="state.isSearching" class="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Card>
            <template #content>
                <Form @submit="onFormSubmit" class="flex flex-col gap-4 w-lg">
                    <AutoComplete
                        v-model="selectedValue"
                        @complete="search"
                        :suggestions="filteredItems"
                        :virtualScrollerOptions="{ itemSize: 38 }"
                        optionLabel="name"
                        dropdown
                        showClear
                        fluid
                    />
                    <Button type="submit" severity="secondary" label="Submit" />
                </Form>
            </template>
        </Card>
    </div>
</template>
