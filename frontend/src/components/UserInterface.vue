<script setup lang="ts">
    import { onMounted, watch } from 'vue';
    import GUI from 'lil-gui';
    import { useStateStore } from '../stores/state';
    import { START_BODY_COUNT } from '../utility/constants';
    import { useTres } from '@tresjs/core';
    import { Vector3 } from 'three';
    import { NeoEngineBody } from 'src/models/body';
    import { format } from '@formkit/tempo';

    const state = useStateStore();

    const { camera } = useTres();

    const controls = new GUI({ title: 'NEO Sim', width: 350 });
    const timeControlsFolder = controls.addFolder('Time Controls');
    const generalControlsFolder = controls.addFolder('General Controls');
    const selectedObjectFolder = controls.addFolder('Selected NEO');

    selectedObjectFolder.hide();

    const generalControlsInterface = {
        neoCount: state.getActiveTotal,
        renderOrbits: true,
        selectedObjectName: '',
        logState: () => {
            state.bodies.forEach((body) => {
                if (body.state.active) {
                    console.log(body.state.currentPosition);
                }
            });
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
        timeControlsFolder.add(timeControlsInterface, 'currentDateTime').name('Simulation Time (s)').listen().disable();
        timeControlsFolder
            .add(timeControlsInterface, 'multiplier', [1, 100, 1000, 10000])
            .name('Time Multiplier')
            .onChange((value: number) => {
                state.updateTimeMultiplier(value);
            });

        generalControlsFolder.add(generalControlsInterface, 'selectedObjectName').listen().disable().name('Hovered Object Name');

        generalControlsFolder
            .add(generalControlsInterface, 'neoCount', 1, state.getTotal, 1)
            .name('NEO Count')
            .setValue(START_BODY_COUNT)
            .onChange((value: number) => state.updateSliderInactive(value));

        generalControlsFolder
            .add(generalControlsInterface, 'renderOrbits')
            .name('Render Orbits?')
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
        (selected) => {
            if (selected) {
                generalControlsInterface.selectedObjectName = selected.properties.name;
            } else {
                generalControlsInterface.selectedObjectName = '';
            }
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
        (velocity) => (selectedObjectInterface.velocity = velocity!.toFixed(4))
    );

    watch(
        () => state.focusedState?.distanceToSun,
        (distanceToSun) => (selectedObjectInterface.distanceToSun = '' + distanceToSun!)
    );
</script>
<template></template>
