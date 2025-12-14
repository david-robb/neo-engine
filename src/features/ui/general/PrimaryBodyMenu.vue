<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { EnginePrimaryBody } from '../../simulation/types/simulation.types';
    import { useSimulationStateStore } from '../../simulation/stores/simulation-state';

    interface ListItem {
        name: string;
        isEnabled: boolean;
        disabled: boolean;
    }

    const state = useSimulationStateStore();
    const listItems = ref<ListItem[]>([]);

    const showMenu = ref(true);

    onMounted(() => {
        state.primaryBodyArray.forEach((body: EnginePrimaryBody) => {
            listItems.value.push({
                name: body.name,
                isEnabled: body.name === 'Earth',
                disabled: !body.orbitData,
            });

            state.setPrimaryObjectOrbitVisibility(body.name, body.name === 'Earth');
        });
    });

    const toggleOrbitForPrimaryBody = (bodyName: string, isEnabled: boolean) => {
        state.setPrimaryObjectOrbitVisibility(bodyName, isEnabled);
    };

    const setPrimaryBodyTarget = (bodyName: string) => {
        state.makePrimaryBodyTarget(bodyName);
    };

    const toggleMenu = () => {
        showMenu.value = !showMenu.value;
    };
</script>

<template>
    <div class="absolute z-10">
        <Button v-if="!showMenu" icon="pi pi-sliders-h" size="large" class="ml-8 mt-8" outlined rounded @click="toggleMenu" />
        <Card class="opacity-90 m-6" v-if="showMenu">
            <template #content>
                <dl class="divide-y divide-white/10 p-0">
                    <div v-for="item in listItems" class="px-0 py-2 sm:grid sm:grid-cols-6 sm:gap-2 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">{{ item.name }}</dt>
                        <dd class="mt-0.5 sm:col-span-2 sm:mt-0 text-center">
                            <ToggleSwitch
                                v-model="item.isEnabled"
                                :disabled="item.disabled"
                                @click="toggleOrbitForPrimaryBody(item.name, !item.isEnabled)"
                            />
                        </dd>
                        <dd class="mt-0.5 sm:col-span-2 sm:mt-0 text-center">
                            <Button
                                size="small"
                                icon="pi pi-bullseye"
                                @click="setPrimaryBodyTarget(item.name)"
                                severity="secondary"
                                rounded
                            ></Button>
                        </dd>
                    </div>
                </dl>
                <Divider />
                <Button label="Close" fluid class="h-8" @click="toggleMenu"></Button>
            </template>
        </Card>
    </div>
</template>
