<script setup lang="ts">
    import { onMounted, watch } from 'vue';
    import GUI from 'lil-gui';
    import { useStateStore } from '../stores/state';
    import { NeoEngineBody } from 'src/models/body';
    import { format } from '@formkit/tempo';

    const state = useStateStore();

    const controls = new GUI({ title: 'NEO Sim', width: 400 });
    const timeControlsFolder = controls.addFolder('Time Controls');
    const generalControlsFolder = controls.addFolder('General Controls');
    const selectedObjectFolder = controls.addFolder('Selected NEO');

    selectedObjectFolder.hide();

    const generalControlsInterface = {
        renderOrbits: true,
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
            .add(generalControlsInterface, 'dropDownSelectedObject', state.allObjectNames.sort())
            .name('Select Object')
            .onChange((newValue: string) => {
                state.focusByName(newValue);
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

        generalControlsFolder.add(generalControlsInterface, 'logState').name('Log State');

        selectedObjectFolder.add(selectedObjectInterface, 'name').name('Name').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'velocity').name('Velocity (km/s)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'distanceToSun').name('Distance To Sun (km)').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'isHazard').name('Is Hazardous?').listen().disable();
        selectedObjectFolder.add(selectedObjectInterface, 'estDiameter').name('Diameter Est. (miles)').listen().disable();
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
            generalControlsInterface.hoveredObjectName = hovered?.properties.name ?? '';
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

            const selected: NeoEngineBody = focusedState.object;

            selectedObjectInterface.name = selected.properties.name;
            selectedObjectInterface.isHazard = selected.properties.isHazardous!;
            selectedObjectInterface.estDiameter = selected.properties.diameterMiles;
            selectedObjectInterface.eccentricity = selected.orbit.eccentricity;
            selectedObjectInterface.semiMajorAxis = selected.orbit.semiMajorAxis;
            selectedObjectInterface.inclination = selected.orbit.inclination;
            selectedObjectInterface.ascendingNodeLongitude = selected.orbit.ascendingNodeLongitude;
            selectedObjectInterface.orbitalPeriod = selected.orbit.orbitalPeriod;
            selectedObjectInterface.perihelionDistance = selected.orbit.perihelionDistance;
            selectedObjectInterface.perihelionArgument = selected.orbit.perihelionArgument;
            selectedObjectInterface.aphelionDistance = selected.orbit.aphelionDistance;
            selectedObjectInterface.perihelionTime = selected.orbit.perihelionTime;
            selectedObjectInterface.meanAnomaly = selected.orbit.meanAnomaly;
            selectedObjectInterface.meanMotion = selected.orbit.meanMotion;
            selectedObjectInterface.equinox = selected.orbit.equinox;

            selectedObjectFolder.show();

            generalControlsInterface.dropDownSelectedObject = selected.properties.name;
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
