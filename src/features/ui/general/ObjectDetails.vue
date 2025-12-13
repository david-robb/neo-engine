<script setup lang="ts">
    import { EngineSecondaryBody } from '../../simulation/types/simulation.types';
    import { ref } from 'vue';
    import { ALERT_DISTANCE } from '../../../utility/constants';
    import { useSimulationStateStore } from '../../simulation/stores/simulation-state';

    const state = useSimulationStateStore();
    const showDetails = ref(false);

    const selected = ref<EngineSecondaryBody | null>(null);

    const deleteFromPool = (row: EngineSecondaryBody) => {
        state.setSecondaryBodyFocus(row.id, false);
    };

    const changeTarget = (row: EngineSecondaryBody) => {
        state.setCameraTarget(row.currentPosition);
    };

    const displayOrbitDetails = (row: EngineSecondaryBody) => {
        selected.value = row;
        showDetails.value = true;
    };

    const rowStyle = (row: EngineSecondaryBody) => {
        if (row.distanceToEarth < ALERT_DISTANCE) {
            return { fontWeight: 'bold', color: 'red' };
        }
    };
</script>

<template>
    <Drawer v-model:visible="showDetails" :header="selected?.name ?? ''" position="right" class="opacity-90 md:w-120! lg:w-120!">
        <div>
            <div class="mt-0 border-t border-white/10">
                <dl class="divide-y divide-white/10">
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">NEO Reference ID</dt>
                        <dd class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            <a
                                target="_blank"
                                :href="`https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${selected?.neoReferenceId}`"
                                class="font-medium text-indigo-400 hover:text-indigo-300"
                            >
                                {{ selected?.neoReferenceId }}
                                <i class="pi pi-external-link ml-2" style="font-size: 0.75rem"></i>
                            </a>
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Orbit Uncertainty</dt>
                        <dd v-orbit-uncertainty class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.orbit.orbitUncertainty }}
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Orbit Class</dt>
                        <dd class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">{{ selected?.orbitalClass }}</dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Is Hazardous?</dt>
                        <dd v-to-upper class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">{{ selected?.isHazardous }}</dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Is Sentry?</dt>
                        <dd v-to-upper class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">{{ selected?.isSentry }}</dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Estimated Diameter Max.</dt>
                        <dd v-km-to-m class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.estimatedDiameterMaxKm }}
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Estimated Diameter Min.</dt>
                        <dd v-km-to-m class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.estimatedDiameterMinKm }}
                        </dd>
                    </div>

                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Eccentricity</dt>
                        <dd class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.orbit.eccentricity.toFixed(4) }}
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Semi Major Axis</dt>
                        <dd v-km-to-au class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.orbit.semiMajorAxis }}
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Inclination</dt>
                        <dd v-rad-to-deg class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.orbit.inclination }}
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Ascending Node Longitude</dt>
                        <dd v-rad-to-deg class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.orbit.ascendingNodeLongitude }}
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Perihelion Distance</dt>
                        <dd v-km-to-au class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.orbit.perihelionDistance }}
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Perihelion Argument</dt>
                        <dd v-rad-to-deg class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.orbit.perihelionArgument }}
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Aphelion Distance</dt>
                        <dd v-km-to-au class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.orbit.aphelionDistance }}
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Mean Anomaly</dt>
                        <dd v-rad-to-deg class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.orbit.meanAnomaly }}
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Mean Motion</dt>
                        <dd v-rads-to-degd class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.orbit.meanMotion }}
                        </dd>
                    </div>
                    <div class="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                        <dt class="text-sm/6 font-medium text-gray-100 sm:col-span-2">Aphelion Distance</dt>
                        <dd v-km-to-au class="mt-0.5 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {{ selected?.orbit.aphelionDistance }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </Drawer>
    <div v-if="state.focusedSecondaryBodyArray.length" class="absolute top-0 right-0 z-10">
        <Card class="opacity-80 m-6 w-xl">
            <template #content>
                <DataTable :value="state.focusedSecondaryBodyArray" class="p-datatable-sm" :rowStyle="rowStyle">
                    <Column field="name" header="Name" class="text-xs"></Column>
                    <Column field="distanceToEarth" header="Distance from Earth" class="text-xs">
                        <template #body="slotProps">
                            {{ slotProps.data.distanceToEarth.toFixed(2) }}
                        </template>
                    </Column>
                    <Column field="velocity" header="Velocity" class="text-xs">
                        <template #body="slotProps">
                            {{ slotProps.data.velocity.toFixed(2) }}
                        </template>
                    </Column>
                    <Column>
                        <template #body="{ data }">
                            <Button size="small" icon="pi pi-bullseye" @click="changeTarget(data)" severity="secondary" rounded></Button>
                        </template>
                    </Column>
                    <Column>
                        <template #body="{ data }">
                            <Button size="small" icon="pi pi-info" @click="displayOrbitDetails(data)" severity="secondary" rounded></Button>
                        </template>
                    </Column>
                    <Column>
                        <template #body="{ data }">
                            <Button
                                :disabled="data.distanceToEarth < ALERT_DISTANCE"
                                size="small"
                                icon="pi pi-trash"
                                @click="deleteFromPool(data)"
                                severity="secondary"
                                rounded
                            ></Button>
                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>
    </div>
</template>
