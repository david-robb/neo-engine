<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import { Pane, TabPageApi } from 'tweakpane';
    import { SimulationStateFlags, useStateStore } from '../../simulation/stores/state';
    import { Vector3 } from 'three';

    const SELECTED_OBJECT_DETAILS = {
        name: '',
        velocity: '',
        distanceToSun: '',
        isHazard: false,
        estDiameter: '',
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
            title: 'Selected Object',
            expanded: true,
        });

        pane.hidden = true;

        const tab = pane.addTab({
            pages: [{ title: 'Overview' }, { title: 'Advanced' }],
        });

        const overviewTab = tab.pages[0];
        const advancedTab = tab.pages[1];

        addSelectedObjectDefaultBinding(overviewTab, 'name', 'Name');
        addSelectedObjectDefaultBinding(overviewTab, 'velocity', 'Velocity (km/s)');
        addSelectedObjectDefaultBinding(overviewTab, 'distanceToSun', 'Distance To Sun (km)');
        addSelectedObjectDefaultBinding(overviewTab, 'isHazard', 'Is Hazard?');
        addSelectedObjectDefaultBinding(overviewTab, 'estDiameter', 'Estimated Diameter (km)');
        addSelectedObjectDefaultBinding(overviewTab, 'eccentricity', 'Eccentricity');
        addSelectedObjectDefaultBinding(overviewTab, 'inclination', 'Inclination (°)');
        addSelectedObjectDefaultBinding(overviewTab, 'semiMajorAxis', 'Semi Major Axis (AU)');
        addSelectedObjectDefaultBinding(overviewTab, 'perihelionDistance', 'Perihelion Distance (AU)');

        addSelectedObjectDefaultBinding(advancedTab, 'ascendingNodeLongitude', 'Ascending Node Longitude (°)');
        addSelectedObjectDefaultBinding(advancedTab, 'orbitalPeriod', 'Orbital Period (Days)');
        addSelectedObjectDefaultBinding(advancedTab, 'perihelionArgument', 'Perihelion Argument (°)');
        addSelectedObjectDefaultBinding(advancedTab, 'aphelionDistance', 'Aphelion Distance (AU)');
        addSelectedObjectDefaultBinding(advancedTab, 'perihelionTime', 'Perihelion Time (JD)');
        addSelectedObjectDefaultBinding(advancedTab, 'meanAnomaly', 'Mean Anomaly (°)');
        addSelectedObjectDefaultBinding(advancedTab, 'meanMotion', 'Mean Motion (°/s)');

        pane.addBlade({ view: 'separator' });
        pane.addButton({ title: 'Close', label: undefined }).on('click', () => {
            state.setFlags(SimulationStateFlags.CLEAR_FOCUSED);
        });
    });

    const addSelectedObjectDefaultBinding = (tab: TabPageApi, key: string, label: string) => {
        const binding = tab.addBinding(SELECTED_OBJECT_DETAILS, key as any, { label: label });
        binding.disabled = true;
    };

    const selectedObjectWatcher = watch(
        () => state.focusedObject?.state,
        (newValue) => {
            if (newValue && pane) {
                SELECTED_OBJECT_DETAILS.distanceToSun = newValue.distanceToSun?.toFixed() ?? '';
                SELECTED_OBJECT_DETAILS.velocity = newValue.velocity?.toFixed(2) ?? '';

                pane.refresh();
            }
        },
        { deep: true }
    );

    selectedObjectWatcher.pause();

    watch(
        () => state.target,
        (newVal) => {
            if (!pane) {
                return;
            }

            const unfocus = newVal.equals(new Vector3(0, 0, 0));
            pane.hidden = !!unfocus;

            if (unfocus) {
                selectedObjectWatcher.pause();
            }

            if (state.focusedObject) {
                SELECTED_OBJECT_DETAILS.name = state.focusedObject.neo.name;
                SELECTED_OBJECT_DETAILS.isHazard = state.focusedObject.neo.isHazardous;
                SELECTED_OBJECT_DETAILS.estDiameter =
                    (state.focusedObject.neo.diameter.km.min + state.focusedObject.neo.diameter.km.max) / 2 + '';
                SELECTED_OBJECT_DETAILS.eccentricity = state.focusedObject.neo.orbitalData.eccentricity + '';
                SELECTED_OBJECT_DETAILS.semiMajorAxis = kmToAu(state.focusedObject.neo.orbitalData.semiMajorAxis) + '';
                SELECTED_OBJECT_DETAILS.inclination = radToDeg(state.focusedObject.neo.orbitalData.inclination) + '';
                SELECTED_OBJECT_DETAILS.ascendingNodeLongitude = radToDeg(state.focusedObject.neo.orbitalData.ascendingNodeLongitude) + '';
                SELECTED_OBJECT_DETAILS.orbitalPeriod = secToDay(state.focusedObject.neo.orbitalData.orbitalPeriod) + '';
                SELECTED_OBJECT_DETAILS.perihelionDistance = kmToAu(state.focusedObject.neo.orbitalData.perihelionDistance) + '';
                SELECTED_OBJECT_DETAILS.perihelionArgument = radToDeg(state.focusedObject.neo.orbitalData.perihelionArgument) + '';
                SELECTED_OBJECT_DETAILS.aphelionDistance = kmToAu(state.focusedObject.neo.orbitalData.aphelionDistance) + '';
                SELECTED_OBJECT_DETAILS.perihelionTime = state.focusedObject.neo.orbitalData.perihelionTime + '';
                SELECTED_OBJECT_DETAILS.meanAnomaly = radToDeg(state.focusedObject.neo.orbitalData.meanAnomaly) + '';
                SELECTED_OBJECT_DETAILS.meanMotion = radToDeg(state.focusedObject.neo.orbitalData.meanMotion) + '';

                selectedObjectWatcher.resume();
            }
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
