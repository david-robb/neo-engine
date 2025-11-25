import { useStateStore } from '../../../stores/state';
import GUI from 'lil-gui';
import { onMounted } from 'vue';
import { addSecond, format } from '@formkit/tempo';
import { START_TIME } from '../../../utility/constants';
import { EngineNEO } from '../../simulation/types/neo-engine.types';

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
};

export function useGui() {
    const state = useStateStore();

    const controls = new GUI({ title: 'NEO Engine', width: 400 });
    const timeControlsFolder = controls.addFolder('Time Controls');
    const selectedObjectFolder = controls.addFolder('Selected NEO');

    selectedObjectFolder.hide();

    onMounted(() => {

        timeControlsFolder.add(timeControlsInterface, 'currentDateTime').name('Simulation Time (s)').listen().disable();
        timeControlsFolder
            .add(timeControlsInterface, 'multiplier', [1, 10000, 1000000, 100000000])
            .name('Time Multiplier')
            .onChange((value: number) => {
                state.updateTimeMultiplier(value);
            });

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
    });

    function onTimeChange(t: number): void {
        const date = addSecond(START_TIME, t);

        timeControlsInterface.currentDateTime = format(date, { date: 'medium', time: 'long' });
    }

    function onFocusChange(selected: EngineNEO): void {
        selectedObjectInterface.name = selected.neo.name;
        selectedObjectInterface.isHazard = selected.neo.isHazardous;
        selectedObjectInterface.estDiameter = (selected.neo.diameter.km.min + selected.neo.diameter.km.max) / 2;
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
    }

    function onUnfocus() {
        selectedObjectFolder.hide();
    }

    function onFocusUpdate(neo: EngineNEO): void {
        selectedObjectInterface.velocity = neo.state.velocity.toFixed(2);
        selectedObjectInterface.distanceToSun = neo.state.distanceToSun.toFixed(2);
    }

    return {
        onFocusChange,
        onFocusUpdate,
        onTimeChange,
        onUnfocus
    };
}
