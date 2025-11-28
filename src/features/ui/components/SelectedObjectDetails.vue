<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import { Pane, TabPageApi } from 'tweakpane';
    import { SimulationState } from '../../simulation/types/state.types';
    import { useStateStore } from '../../simulation/stores/state';

    const SELECTED_OBJECT_DETAILS = {
        name: '',
        velocity: '',
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
        return km / 149600000;
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
            pages: [{ title: 'Overview' }, { title: 'Details' }],
        });

        const overviewTab = tab.pages[0];
        const advancedTab = tab.pages[1];

        addSelectedObjectDefaultBinding(overviewTab, 'name', 'Name');
        addSelectedObjectDefaultBinding(overviewTab, 'velocity', 'Velocity');
        addSelectedObjectDefaultBinding(overviewTab, 'distanceToSun', 'Distance To Sun');
        addSelectedObjectDefaultBinding(overviewTab, 'isHazard', 'Is Hazard?');
        addSelectedObjectDefaultBinding(overviewTab, 'estDiameterMin', 'Est Diameter Min');
        addSelectedObjectDefaultBinding(overviewTab, 'estDiameterMax', 'Est Diameter Max');
        addSelectedObjectDefaultBinding(overviewTab, 'eccentricity', 'Eccentricity');
        addSelectedObjectDefaultBinding(overviewTab, 'inclination', 'Inclination');
        addSelectedObjectDefaultBinding(overviewTab, 'semiMajorAxis', 'Semi Major Axis');
        addSelectedObjectDefaultBinding(overviewTab, 'perihelionDistance', 'Perihelion Distance');

        addSelectedObjectDefaultBinding(advancedTab, 'ascendingNodeLongitude', 'Ascending Node Longitude');
        addSelectedObjectDefaultBinding(advancedTab, 'orbitalPeriod', 'Orbital Period');
        addSelectedObjectDefaultBinding(advancedTab, 'perihelionArgument', 'Perihelion Argument');
        addSelectedObjectDefaultBinding(advancedTab, 'aphelionDistance', 'Aphelion Distance');
        addSelectedObjectDefaultBinding(advancedTab, 'perihelionTime', 'Perihelion Time');
        addSelectedObjectDefaultBinding(advancedTab, 'meanAnomaly', 'Mean Anomaly');
        addSelectedObjectDefaultBinding(advancedTab, 'meanMotion', 'Mean Motion');

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

    const selectedObjectWatcher = watch(
        () => [state.focusedObject?.distanceToSun, state.focusedObject?.velocity],
        (newValue) => {
            if (newValue && pane) {
                SELECTED_OBJECT_DETAILS.distanceToSun = newValue[0]?.toFixed() + ' KM';
                SELECTED_OBJECT_DETAILS.velocity = newValue[1]?.toFixed(2) + ' KM/S';

                pane.refresh();
            }
        }
    );

    selectedObjectWatcher.pause();

    watch(
        () => state.focusedObject,
        (focusedObject) => {
            if (!pane) {
                return;
            }

            if (!focusedObject) {
                pane.hidden = true;
                selectedObjectWatcher.pause();

                return;
            }

            pane.hidden = false;

            const estDiameterMinMt = focusedObject.neo.diameter.km.min * 1000;
            const estDiameterMinFt = focusedObject.neo.diameter.km.min * 1000 * 3.28084;

            const estDiameterMaxMt = focusedObject.neo.diameter.km.max * 1000;
            const estDiameterMaxFt = focusedObject.neo.diameter.km.max * 1000 * 3.28084;

            SELECTED_OBJECT_DETAILS.name = focusedObject.neo.name;
            SELECTED_OBJECT_DETAILS.isHazard = focusedObject.neo.isHazardous;
            SELECTED_OBJECT_DETAILS.estDiameterMin = `${estDiameterMinMt.toFixed(2)}M / ${estDiameterMinFt.toFixed(2)}FT`;
            SELECTED_OBJECT_DETAILS.estDiameterMax = `${estDiameterMaxMt.toFixed(2)}M / ${estDiameterMaxFt.toFixed(2)}FT`;
            SELECTED_OBJECT_DETAILS.eccentricity = focusedObject.neo.orbitalData.eccentricity.toFixed(2);
            SELECTED_OBJECT_DETAILS.semiMajorAxis = kmToAu(focusedObject.neo.orbitalData.semiMajorAxis).toFixed(2) + ' AU';
            SELECTED_OBJECT_DETAILS.inclination = radToDeg(focusedObject.neo.orbitalData.inclination).toFixed(2) + '°';
            SELECTED_OBJECT_DETAILS.ascendingNodeLongitude =
                radToDeg(focusedObject.neo.orbitalData.ascendingNodeLongitude).toFixed(2) + '°';
            SELECTED_OBJECT_DETAILS.orbitalPeriod = secToDay(focusedObject.neo.orbitalData.orbitalPeriod).toFixed(2) + ' Days';
            SELECTED_OBJECT_DETAILS.perihelionDistance = kmToAu(focusedObject.neo.orbitalData.perihelionDistance).toFixed(2) + ' AU';
            SELECTED_OBJECT_DETAILS.perihelionArgument = radToDeg(focusedObject.neo.orbitalData.perihelionArgument).toFixed(2) + '°';
            SELECTED_OBJECT_DETAILS.aphelionDistance = kmToAu(focusedObject.neo.orbitalData.aphelionDistance).toFixed(2) + ' AU';
            SELECTED_OBJECT_DETAILS.perihelionTime = focusedObject.neo.orbitalData.perihelionTime.toFixed(2) + ' JD';
            SELECTED_OBJECT_DETAILS.meanAnomaly = radToDeg(focusedObject.neo.orbitalData.meanAnomaly).toFixed(2) + '°';
            SELECTED_OBJECT_DETAILS.meanMotion = radToDeg(focusedObject.neo.orbitalData.meanMotion).toFixed(8) + '°';

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
