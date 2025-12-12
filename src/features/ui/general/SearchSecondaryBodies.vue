<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { IdNamePair, useStateStore } from '../../simulation/stores/state';
    import { AutoCompleteCompleteEvent } from 'primevue/autocomplete';

    const state = useStateStore();
    const filteredItems = ref<IdNamePair[]>([]);

    const selectedValue = ref<IdNamePair | undefined>(undefined);

    onMounted(() => {});

    const search = (event: AutoCompleteCompleteEvent) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                filteredItems.value = [...state.idNamePairs];
            } else {
                filteredItems.value = state.idNamePairs.filter((body) => body.name.toLowerCase().includes(event.query.toLowerCase()));
            }
        }, 250);
    };

    const onFormSubmit = () => {
        const selected = selectedValue.value;
        if (!selected) {
            return;
        }

        state.focusObject(selected.id);

        selectedValue.value = undefined;

        state.toggleSearch(false);
    };
</script>

<template>
    <div class="absolute z-10 bottom-0 flex flex-col">
        <Button icon="pi pi-search" size="large" class="ml-2 mb-2" outlined rounded @click="state.toggleSearch(true)" />
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
