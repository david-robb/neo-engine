<script setup lang="ts">
    import { onMounted, watch } from 'vue';
    import GUI from 'lil-gui';
    import { format } from '@formkit/tempo';
    import { useStateStore } from '../stores/state';
    import { EngineNEO } from './simulation/types/neo-engine';

    const state = useStateStore();

    const controls = new GUI({ title: 'NEO Engine', width: 400 });
    const timeControlsFolder = controls.addFolder('Time Controls');
    const generalControlsFolder = controls.addFolder('General Controls');
    const selectedObjectFolder = controls.addFolder('Selected NEO');

    selectedObjectFolder.hide();

    const generalControlsInterface = {
        renderAllNEOs: false,
        renderOrbits: false,
        dropDownSelectedObject: '',
        hoveredObjectName: '',
        logState: () => {
            console.log(state);
        },
    };

    const timeControlsInterface = {
        currentDateTime: '',
        multiplier: 1,
    };

    const selectedObjectInterface = {
        name: '',
        velocity: '',
        distanceToSun: '',
        isHazard: false,
        estDiameter: 0,
        eccentricity: 0,
        semiMajorAxis: 0,
        inclination: 0,
        ascendingNodeLongitude: 0,
        orbitalPeriod: 0,
        perihelionDistance: 0,
        perihelionArgument: 0,
        aphelionDistance: 0,
        perihelionTime: 0,
        meanAnomaly: 0,
        meanMotion: 0,
        equinox: '',
    };

    onMounted(() => {
        generalControlsFolder.add(generalControlsInterface, 'hoveredObjectName').listen().disable().name('Hovered Object Name');
        generalControlsFolder
            .add(generalControlsInterface, 'dropDownSelectedObject', state.neoNames.sort())
            .name('Select Object')
            .onChange((newValue: string) => {
                state.focusNeoByName(newValue);
            });

        timeControlsFolder.add(timeControlsInterface, 'currentDateTime').name('Simulation Time (s)').listen().disable();
        timeControlsFolder
            .add(timeControlsInterface, 'multiplier', [1, 10000, 1000000, 100000000])
            .name('Time Multiplier')
            .onChange((value: number) => {
                state.updateTimeMultiplier(value);
            });

        generalControlsFolder
            .add(generalControlsInterface, 'renderOrbits')
            .name('Render All Orbits?')
            .setValue(false)
            .onChange((enabled: boolean) => {
                state.$patch({
                    renderOrbits: enabled,
                });
            });

        generalControlsFolder
            .add(generalControlsInterface, 'renderAllNEOs')
            .name('Render All NEOs?')
            .setValue(false)
            .onChange((enabled: boolean) => {
                if (enabled) {
                    state.markAllActive();
                } else {
                    state.markAllInactive();
                }
            });

        generalControlsFolder.add(generalControlsInterface, 'logState').name('Log State');

        selectedObjectFolder.add(selectedObjectInterface, 'name').name('Name').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'velocity').name('Velocity (km/s)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'distanceToSun').name('Distance To Sun (km)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'isHazard').name('Is Hazardous?').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'estDiameter').name('Diameter Est. (km)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'eccentricity').name('Eccentricity').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'semiMajorAxis').name('Semi-Major Axis (km)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'inclination').name('Inclination (rad)').listen().disable();

        selectedObjectFolder
            .add(selectedObjectInterface, 'ascendingNodeLongitude')
            .name('Ascending Node Longitude (rad)')
            .listen()
            .disable();

        selectedObjectFolder.add(selectedObjectInterface, 'orbitalPeriod').name('Orbital Period (s)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'perihelionDistance').name('Perihelion Distance (km)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'perihelionArgument').name('Perihelion Argument (rad)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'aphelionDistance').name('Aphelion Distance (km)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'perihelionTime').name('Perihelion Time (jd)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'meanAnomaly').name('Mean Anomaly (rad)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'meanMotion').name('Mean Motion (rad/s)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'equinox').name('Equinox (jd)').listen().disable();
    });

    watch(
        () => state.hoveredObject,
        (hovered) => {
            generalControlsInterface.hoveredObjectName = hovered?.neo.name ?? '';
        }
    );

    watch(
        () => state.focusedState,
        (focusedState) => {
            console.log('Focus Change');

            if (!focusedState) {
                selectedObjectFolder.hide();

                generalControlsFolder.open();

                return;
            }

            generalControlsFolder.close();

            const selected: EngineNEO = focusedState.object;

            selectedObjectInterface.name = selected.neo.name;
            selectedObjectInterface.isHazard = selected.neo.isHazardous;
            selectedObjectInterface.estDiameter = selected.neo.diameter.km.min;
            selectedObjectInterface.eccentricity = selected.neo.orbitalData.eccentricity;
            selectedObjectInterface.semiMajorAxis = selected.neo.orbitalData.semiMajorAxis;
            selectedObjectInterface.inclination = selected.neo.orbitalData.inclination;
            selectedObjectInterface.ascendingNodeLongitude = selected.neo.orbitalData.ascendingNodeLongitude;
            selectedObjectInterface.orbitalPeriod = selected.neo.orbitalData.orbitalPeriod;
            selectedObjectInterface.perihelionDistance = selected.neo.orbitalData.perihelionDistance;
            selectedObjectInterface.perihelionArgument = selected.neo.orbitalData.perihelionArgument;
            selectedObjectInterface.aphelionDistance = selected.neo.orbitalData.aphelionDistance;
            selectedObjectInterface.perihelionTime = selected.neo.orbitalData.perihelionTime;
            selectedObjectInterface.meanAnomaly = selected.neo.orbitalData.meanAnomaly;
            selectedObjectInterface.meanMotion = selected.neo.orbitalData.meanMotion;

            selectedObjectFolder.show();

            generalControlsInterface.dropDownSelectedObject = selected.neo.name;
        }
    );

    watch(
        () => state.timeState.currentDateTime,
        (newTime) => {
            timeControlsInterface.currentDateTime = format(newTime, { date: 'medium', time: 'long' });
        }
    );

    watch(
        () => state.focusedState?.velocity,
        (velocity) => (selectedObjectInterface.velocity = velocity?.toFixed(4) ?? '')
    );

    watch(
        () => state.focusedState?.distanceToSun,
        (distanceToSun) => (selectedObjectInterface.distanceToSun = distanceToSun?.toFixed() ?? '')
    );
</script>
<template></template>
