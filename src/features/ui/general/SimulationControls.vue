<script setup lang="ts">
    import { useStateStore } from '../../simulation/stores/state';

    enum SPEED_SELECTION {
        R_WEEK_PER_SEC = -86400 * 7,
        R_DAY_PER_SEC = -86400,
        PAUSED = 0,
        PLAY = 1,
        WEEK_PER_SEC = 86400 * 7,
        DAY_PER_SEC = 86400,
    }

    const state = useStateStore();

    const setTimeMultiplier = (multiplier: number): void => {
        state.updateTimeMultiplier(multiplier);
    };
</script>

<template>
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6 z-10">
        <Card class="opacity-90">
            <template #content>
                <div class="flex gap-2 h-8">
                    <ButtonGroup>
                        <Button
                            :outlined="state.timeMultiplier == SPEED_SELECTION.R_WEEK_PER_SEC"
                            icon="pi pi-angle-double-left"
                            size="small"
                            @click="setTimeMultiplier(-86400 * 7)"
                        />
                        <Button
                            :outlined="state.timeMultiplier == SPEED_SELECTION.R_DAY_PER_SEC"
                            icon="pi pi-angle-left"
                            size="small"
                            @click="setTimeMultiplier(-86400)"
                        />
                        <Button
                            :outlined="state.timeMultiplier == SPEED_SELECTION.PAUSED"
                            icon="pi pi-pause"
                            size="small"
                            @click="setTimeMultiplier(0)"
                        />
                    </ButtonGroup>
                    <DatePicker
                        v-model="state.simulationClock"
                        showTime
                        hourFormat="24"
                        inputClass="text-center"
                        showSeconds
                        disabled
                    ></DatePicker>
                    <ButtonGroup>
                        <Button
                            :outlined="state.timeMultiplier == SPEED_SELECTION.PLAY"
                            label=""
                            icon="pi pi-play"
                            size="small"
                            @click="setTimeMultiplier(1)"
                        />
                        <Button
                            :outlined="state.timeMultiplier == SPEED_SELECTION.DAY_PER_SEC"
                            label=""
                            icon="pi pi-angle-right"
                            size="small"
                            @click="setTimeMultiplier(86400)"
                        />
                        <Button
                            :outlined="state.timeMultiplier == SPEED_SELECTION.WEEK_PER_SEC"
                            label=""
                            icon="pi pi-angle-double-right"
                            size="small"
                            @click="setTimeMultiplier(86400 * 7)"
                        />
                    </ButtonGroup>
                </div>
            </template>
        </Card>
    </div>
</template>
