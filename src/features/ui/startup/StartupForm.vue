<script setup lang="ts">
    import { onMounted, reactive, ref } from 'vue';
    import { fetchTotalCount } from '../../simulation/services/database.service';
    import { SimulationStateFlags, useSimulationStateStore } from '../../simulation/stores/simulation-state';

    enum SimulationSize {
        SMALL = 'SMALL',
        MEDIUM = 'MEDIUM',
        LARGE = 'LARGE',
    }

    interface StartupFormParameters {
        date: Date;
        simulationSize: SimulationSize;
    }

    const formParameters = reactive<StartupFormParameters>({
        date: new Date(),
        simulationSize: SimulationSize.MEDIUM,
    });

    const simulationSize = (size: SimulationSize): number => {
        switch (size) {
            case SimulationSize.SMALL:
                return Math.floor(objectCount.value * 0.1);
            case SimulationSize.MEDIUM:
                return Math.floor(objectCount.value * 0.5);
            case SimulationSize.LARGE:
                return Math.floor(objectCount.value);
        }
    };

    const state = useSimulationStateStore();
    const loading = ref(false);
    const objectCount = ref(0);

    const onSubmit = async () => {
        loading.value = true;

        await state.initializeSimulation(formParameters.date, simulationSize(formParameters.simulationSize));

        loading.value = false;
        state.setFlag(SimulationStateFlags.SIMULATION_READY);
    };

    onMounted(async () => {
        loading.value = true;
        await fetchTotalCount().then((count) => {
            objectCount.value = count;

            loading.value = false;
        });
    });
</script>

<template>
    <div v-if="!state.isReady" class="absolute z-10 grid place-items-center h-full w-full">
        <Card>
            <template #title>
                <div class="text-center"><span class="text-lg font-bold">Configure Simulation</span></div>
            </template>
            <template #content>
                <Divider />
                <div @submit="onSubmit" class="flex flex-col gap-8 w-lg">
                    <IftaLabel>
                        <DatePicker
                            v-model="formParameters.date"
                            input-id="simulation-epoch"
                            iconDisplay="input"
                            hourFormat="12"
                            showTime
                            showIcon
                            fluid
                        />
                        <label for="simulation-epoch">Simulation Epoch</label>
                    </IftaLabel>
                    <div class="flex flex-wrap gap-4 place-content-center">
                        <div class="flex items-center gap-2">
                            <RadioButton v-model="formParameters.simulationSize" inputId="small" :value="SimulationSize.SMALL" />
                            <label for="small">Small</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <RadioButton v-model="formParameters.simulationSize" inputId="medium" :value="SimulationSize.MEDIUM" />
                            <label for="medium">Medium</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <RadioButton v-model="formParameters.simulationSize" inputId="large" :value="SimulationSize.LARGE" />
                            <label for="large">Large</label>
                        </div>
                    </div>
                    <Button :onClick="onSubmit" label="Submit" severity="primary" variant="outlined" :loading="loading"></Button>
                </div>
            </template>
        </Card>
    </div>
</template>
