<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useStateStore } from '../../simulation/stores/state';
    import { EngineSecondaryBody } from '../../simulation/types/simulation.types';
    import { AutoCompleteCompleteEvent } from 'primevue/autocomplete';

    const state = useStateStore();
    const items = ref<EngineSecondaryBody[]>(Array.from(state._secondaryBody.values()));
    const filteredItems = ref<EngineSecondaryBody[]>([]);

    const selectedValue = ref<EngineSecondaryBody | undefined>(undefined);

    onMounted(() => {});

    const search = (event: AutoCompleteCompleteEvent) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                filteredItems.value = [...items.value];
            } else {
                filteredItems.value = items.value.filter((body) => body.name.toLowerCase().includes(event.query.toLowerCase()));
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
    <div v-if="state.isSearching" class="absolute z-10 grid place-items-center h-full w-full">
        <Form @submit="onFormSubmit" class="flex flex-col gap-1 w-lg">
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
            <Button type="submit" severity="secondary" label="Submit" fluid />
        </Form>
    </div>
</template>
