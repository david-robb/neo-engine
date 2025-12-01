<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import { Pane, TabPageApi } from 'tweakpane';
    import { useStateStore } from '../../simulation/stores/state';
    import { AU_TO_KM_1 } from '../../../utility/constants';
    import { SimulationState } from '../../simulation/stores/state.types';
    import { EngineSecondaryBody } from '../../simulation/types/neo-engine.types';

    const SELECTED_OBJECT_DETAILS = {
        name: '',
        velocity: '',
        distanceToEarth: '',
        distanceToSun: '',
        isHazard: false,
        estDiameterMin: '',
        estDiameterMax: '',
        eccentricity: '',
        semiMajorAxis: '',
        inclination: '',
        ascendingNodeLongitude: '',
        orbitalPeriod: '',
        perihelionDistance: '',
        perihelionArgument: '',
        aphelionDistance: '',
        perihelionTime: '',
        meanAnomaly: '',
        meanMotion: '',
    };

    const kmToAu = (km: number): number => {
        return km / AU_TO_KM_1;
    };

    const radToDeg = (rad: number): number => {
        return (rad * 180) / Math.PI;
    };

    const secToDay = (sec: number): number => {
        return sec / 86400;
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
            title: undefined,
            expanded: true,
        });

        pane.hidden = true;

        const tab = pane.addTab({
            pages: [{ title: 'Overview' }, { title: 'Elements' }],
        });

        const overviewTab = tab.pages[0];
        const elementsTab = tab.pages[1];

        addSelectedObjectDefaultBinding(overviewTab, 'name', 'Name');
        addSelectedObjectDefaultBinding(overviewTab, 'velocity', 'Velocity');
        addSelectedObjectDefaultBinding(overviewTab, 'distanceToEarth', 'Distance To Earth');
        addSelectedObjectDefaultBinding(overviewTab, 'distanceToSun', 'Distance To Sun');
        addSelectedObjectDefaultBinding(overviewTab, 'isHazard', 'Is Hazard?');
        addSelectedObjectDefaultBinding(overviewTab, 'estDiameterMin', 'Est Diameter Min');
        addSelectedObjectDefaultBinding(overviewTab, 'estDiameterMax', 'Est Diameter Max');

        addSelectedObjectDefaultBinding(elementsTab, 'eccentricity', 'Eccentricity');
        addSelectedObjectDefaultBinding(elementsTab, 'inclination', 'Inclination');
        addSelectedObjectDefaultBinding(elementsTab, 'semiMajorAxis', 'Semi Major Axis');
        addSelectedObjectDefaultBinding(elementsTab, 'perihelionDistance', 'Perihelion Distance');
        addSelectedObjectDefaultBinding(elementsTab, 'ascendingNodeLongitude', 'Ascending Node Longitude');
        addSelectedObjectDefaultBinding(elementsTab, 'orbitalPeriod', 'Orbital Period');
        addSelectedObjectDefaultBinding(elementsTab, 'perihelionArgument', 'Perihelion Argument');
        addSelectedObjectDefaultBinding(elementsTab, 'aphelionDistance', 'Aphelion Distance');
        addSelectedObjectDefaultBinding(elementsTab, 'perihelionTime', 'Perihelion Time');
        addSelectedObjectDefaultBinding(elementsTab, 'meanAnomaly', 'Mean Anomaly');
        addSelectedObjectDefaultBinding(elementsTab, 'meanMotion', 'Mean Motion');

        pane.addBlade({ view: 'separator' });

        pane.addButton({ title: 'Select Next', label: undefined }).on('click', () => {
            state.setFlags(SimulationState.SELECT_NEXT);
        });

        pane.addBlade({ view: 'separator' });

        pane.addButton({ title: 'Select Previous', label: undefined }).on('click', () => {
            state.setFlags(SimulationState.SELECT_PREVIOUS);
        });

        pane.addBlade({ view: 'separator' });

        pane.addButton({ title: 'Deselect', label: undefined }).on('click', () => {
            state.setFlags(SimulationState.CLEAR_FOCUSED);
        });
    });

    const addSelectedObjectDefaultBinding = (tab: TabPageApi, key: string, label: string) => {
        const binding = tab.addBinding(SELECTED_OBJECT_DETAILS, key as any, { label: label });
        binding.disabled = true;
    };

    watch(
        () => state.timeMultiplier,
        (newValue) => {
            if (!pane) {
                return;
            }

            pane.disabled = newValue !== 1;
        }
    );

    const selectedObjectWatcher = watch(
        () => [state.focusedObject?.distanceToSun, state.focusedObject?.velocity, state.focusedObject?.distanceToEarth],
        (newValue) => {
            if (newValue && pane) {
                const distanceToSunKM = (newValue[0] ?? 0).toFixed(2);
                const velocity = (newValue[1] ?? 0).toFixed(2);
                const distanceToEarthKM = (newValue[2] ?? 0).toFixed(2);

                const distanceToSunAU = ((newValue[0] ?? 0) / AU_TO_KM_1).toFixed(4);
                const distanceToEarthAU = ((newValue[2] ?? 0) / AU_TO_KM_1).toFixed(4);

                SELECTED_OBJECT_DETAILS.distanceToSun = `${distanceToSunKM} KM / ${distanceToSunAU} AU`;
                SELECTED_OBJECT_DETAILS.velocity = `${velocity} KM / S`;
                SELECTED_OBJECT_DETAILS.distanceToEarth = `${distanceToEarthKM} KM / ${distanceToEarthAU} AU`;

                pane.refresh();
            }
        }
    );

    selectedObjectWatcher.pause();

    watch(
        () => state.focusedObject,
        (focusedObject: EngineSecondaryBody) => {
            if (!pane) {
                return;
            }

            if (!focusedObject) {
                pane.hidden = true;
                selectedObjectWatcher.pause();

                return;
            }

            pane.hidden = false;

            const estDiameterMinMt = focusedObject.estimatedDiameterMinKm * 1000;
            const estDiameterMinFt = focusedObject.estimatedDiameterMinKm * 1000 * 3.28084;

            const estDiameterMaxMt = focusedObject.estimatedDiameterMaxKm * 1000;
            const estDiameterMaxFt = focusedObject.estimatedDiameterMaxKm * 1000 * 3.28084;

            SELECTED_OBJECT_DETAILS.name = focusedObject.name;
            SELECTED_OBJECT_DETAILS.isHazard = focusedObject.isHazardous;
            SELECTED_OBJECT_DETAILS.estDiameterMin = `${estDiameterMinMt.toFixed(2)}M / ${estDiameterMinFt.toFixed(2)}FT`;
            SELECTED_OBJECT_DETAILS.estDiameterMax = `${estDiameterMaxMt.toFixed(2)}M / ${estDiameterMaxFt.toFixed(2)}FT`;
            SELECTED_OBJECT_DETAILS.eccentricity = focusedObject.orbit.eccentricity.toFixed(2);
            SELECTED_OBJECT_DETAILS.semiMajorAxis = kmToAu(focusedObject.orbit.semiMajorAxis).toFixed(2) + ' AU';
            SELECTED_OBJECT_DETAILS.inclination = radToDeg(focusedObject.orbit.inclination).toFixed(2) + '°';
            SELECTED_OBJECT_DETAILS.ascendingNodeLongitude = radToDeg(focusedObject.orbit.ascendingNodeLongitude).toFixed(2) + '°';
            SELECTED_OBJECT_DETAILS.orbitalPeriod = secToDay(focusedObject.orbit.orbitalPeriod).toFixed(2) + ' Days';
            SELECTED_OBJECT_DETAILS.perihelionDistance = kmToAu(focusedObject.orbit.perihelionDistance).toFixed(2) + ' AU';
            SELECTED_OBJECT_DETAILS.perihelionArgument = radToDeg(focusedObject.orbit.perihelionArgument).toFixed(2) + '°';
            SELECTED_OBJECT_DETAILS.aphelionDistance = kmToAu(focusedObject.orbit.aphelionDistance).toFixed(2) + ' AU';
            SELECTED_OBJECT_DETAILS.perihelionTime = focusedObject.orbit.perihelionTime.toFixed(2) + ' JD';
            SELECTED_OBJECT_DETAILS.meanAnomaly = radToDeg(focusedObject.orbit.meanAnomaly).toFixed(2) + '°';
            SELECTED_OBJECT_DETAILS.meanMotion = radToDeg(focusedObject.orbit.meanMotion).toFixed(8) + '°';

            selectedObjectWatcher.resume();
        }
    );
</script>

<template>
    <div ref="paneContainer" class="pane-holder"></div>
</template>

<style scoped>
    .pane-holder {
        position: absolute;
        top: 0;
        left: 100%;
        transform: translate(-110%, -0%);
        z-index: 10;

        width: 375px;
    }
</style>
