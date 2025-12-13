import { EngineOrbit, EnginePrimaryBody } from '../types/simulation.types';
import { AU_TO_KM_1 } from '../../../utility/constants';
import { Color, Vector3 } from 'three';
import * as tempo from '@formkit/tempo';
import { parse, tzDate } from '@formkit/tempo';
import { calculatePosition } from '../services/position.service';

export const buildPrimaryBodies = (simulationEpoch: Date): EnginePrimaryBody[] => {
    const epochDate = tzDate(parse('2000-01-01 12:00:00'), 'UTC');
    const offsetSeconds = tempo.diffSeconds(epochDate, simulationEpoch);
    const epochOffset = offsetSeconds < 0 ? Math.abs(offsetSeconds) : -1 * offsetSeconds;

    const bodyScaleFactor = 100;
    const positionVector = new Vector3();

    const sun = buildPrimaryBody({
        name: 'Sun',
        color: new Color(0xffd700),
        epochOffset: epochOffset,
        radiusKm: 695700,
    });

    const mercuryOrbit = buildMercuryOrbit();
    calculatePosition(mercuryOrbit, epochOffset, positionVector);

    const mercury = buildPrimaryBody({
        name: 'Mercury',
        color: new Color(0xe0ffff),
        epochOffset: epochOffset,
        orbitData: mercuryOrbit,
        radiusKm: 3396.2 * bodyScaleFactor,
        currentPosition: positionVector,
    });

    const venusOrbit = buildVenusOrbit();
    calculatePosition(venusOrbit, epochOffset, positionVector);

    const venus = buildPrimaryBody({
        name: 'Venus',
        color: new Color(0xffff00),
        epochOffset: epochOffset,
        orbitData: venusOrbit,
        radiusKm: 6051.8 * bodyScaleFactor,
        currentPosition: positionVector,
    });

    const earthOrbit = buildEarthOrbit();
    calculatePosition(earthOrbit, epochOffset, positionVector);

    const earth = buildPrimaryBody({
        name: 'Earth',
        orbitData: earthOrbit,
        color: new Color(0x00bfff),
        epochOffset: epochOffset,
        radiusKm: 6357 * bodyScaleFactor,
        currentPosition: positionVector,
    });

    const marsOrbit = buildMarsOrbit();
    calculatePosition(marsOrbit, epochOffset, positionVector);

    const mars = buildPrimaryBody({
        name: 'Mars',
        color: new Color(0xff4500),
        epochOffset: epochOffset,
        orbitData: marsOrbit,
        radiusKm: 2439.7 * bodyScaleFactor,
        currentPosition: positionVector,
    });

    const jupiterOrbit = buildJupiterOrbit();
    calculatePosition(jupiterOrbit, epochOffset, positionVector);

    const jupiter = buildPrimaryBody({
        name: 'Jupiter',
        color: new Color(0xffa500),
        epochOffset: epochOffset,
        orbitData: jupiterOrbit,
        radiusKm: 71492 * bodyScaleFactor,
        currentPosition: positionVector,
    });

    const saturnOrbit = buildSaturnOrbit();
    calculatePosition(saturnOrbit, epochOffset, positionVector);

    const saturn = buildPrimaryBody({
        name: 'Saturn',
        color: new Color(0x32cd32),
        epochOffset: epochOffset,
        orbitData: saturnOrbit,
        radiusKm: 58232 * bodyScaleFactor,
        currentPosition: positionVector,
    });

    const uranusOrbit = buildUranusOrbit();
    calculatePosition(uranusOrbit, epochOffset, positionVector);

    const uranus = buildPrimaryBody({
        name: 'Uranus',
        color: new Color(0xff69b4),
        epochOffset: epochOffset,
        orbitData: uranusOrbit,
        radiusKm: 25362 * bodyScaleFactor,
        currentPosition: positionVector,
    });

    const neptuneOrbit = buildNeptuneOrbit();
    calculatePosition(neptuneOrbit, epochOffset, positionVector);

    const neptune = buildPrimaryBody({
        name: 'Neptune',
        color: new Color(0xff00ff),
        epochOffset: epochOffset,
        orbitData: neptuneOrbit,
        radiusKm: 24622 * bodyScaleFactor,
        currentPosition: positionVector,
    });

    return [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
};

export const buildEarthOrbit = (): EngineOrbit => {
    return {
        orbitalPeriod: 31558150,
        ascendingNodeLongitude: 0,
        eccentricity: 0.01671022,
        inclination: degreesToRadians(0.00005),
        semiMajorAxis: 149597887.1558,
        meanAnomaly: degreesToRadians(358.617),
        perihelionArgument: degreesToRadians(102.94719),
        meanMotion: (2 * Math.PI) / 31558150,
        epoch: '2000-01-01 12:00:00',
    } as EngineOrbit;
};

export const buildMarsOrbit = (): EngineOrbit => {
    return {
        orbitalPeriod: 59354355,
        ascendingNodeLongitude: degreesToRadians(49.71),
        eccentricity: 0.09337,
        inclination: degreesToRadians(1.852),
        semiMajorAxis: 227942276,
        meanAnomaly: degreesToRadians(19.387),
        perihelionArgument: degreesToRadians(336.08) - degreesToRadians(49.71),
        meanMotion: (2 * Math.PI) / 59354355,
        epoch: '2000-01-01 12:00:00',
    } as EngineOrbit;
};

export const buildMercuryOrbit = (): EngineOrbit => {
    const ascendingNodeLongitude = degreesToRadians(48.34);

    return {
        orbitalPeriod: 7603200,
        ascendingNodeLongitude: ascendingNodeLongitude,
        eccentricity: 0.20564,
        inclination: degreesToRadians(7.006),
        semiMajorAxis: 57909335.7,
        meanAnomaly: degreesToRadians(174.79),
        perihelionArgument: degreesToRadians(77.46) - ascendingNodeLongitude,
        meanMotion: (2 * Math.PI) / 7603200,
        epoch: '2000-01-01 12:00:00',
    } as EngineOrbit;
};

export const buildVenusOrbit = (): EngineOrbit => {
    const ascendingNodeLongitude = degreesToRadians(76.67);

    return {
        orbitalPeriod: 19394640,
        ascendingNodeLongitude: ascendingNodeLongitude,
        eccentricity: 0.00676,
        inclination: degreesToRadians(3.398),
        semiMajorAxis: 0.7233 * AU_TO_KM_1,
        meanAnomaly: degreesToRadians(50.115),
        perihelionArgument: degreesToRadians(131.77) - ascendingNodeLongitude,
        meanMotion: (2 * Math.PI) / 19394640,
        epoch: '2000-01-01 12:00:00',
    } as EngineOrbit;
};

export const buildJupiterOrbit = (): EngineOrbit => {
    const ascendingNodeLongitude = degreesToRadians(100.29);

    return {
        orbitalPeriod: 374332000,
        ascendingNodeLongitude: ascendingNodeLongitude,
        eccentricity: 0.04854,
        inclination: degreesToRadians(1.299),
        semiMajorAxis: 5.2025 * AU_TO_KM_1,
        meanAnomaly: degreesToRadians(20.02),
        perihelionArgument: degreesToRadians(14.27) - ascendingNodeLongitude,
        meanMotion: (2 * Math.PI) / 374332000,
        epoch: '2000-01-01 12:00:00',
    } as EngineOrbit;
};

export const buildSaturnOrbit = (): EngineOrbit => {
    const ascendingNodeLongitude = degreesToRadians(113.64);
    const orbitalPeriodSec = 29.47 * 31540000;

    return {
        orbitalPeriod: orbitalPeriodSec,
        ascendingNodeLongitude: ascendingNodeLongitude,
        eccentricity: 0.05551,
        inclination: degreesToRadians(2.494),
        semiMajorAxis: 9.5415 * AU_TO_KM_1,
        meanAnomaly: degreesToRadians(317.02),
        perihelionArgument: degreesToRadians(92.86) - ascendingNodeLongitude,
        meanMotion: (2 * Math.PI) / orbitalPeriodSec,
        epoch: '2000-01-01 12:00:00',
    } as EngineOrbit;
};

export const buildUranusOrbit = (): EngineOrbit => {
    const ascendingNodeLongitude = degreesToRadians(73.96);
    const orbitalPeriodSec = 84.05 * 31540000;

    return {
        orbitalPeriod: orbitalPeriodSec,
        ascendingNodeLongitude: ascendingNodeLongitude,
        eccentricity: 0.04686,
        inclination: degreesToRadians(0.773),
        semiMajorAxis: 19.188 * AU_TO_KM_1,
        meanAnomaly: degreesToRadians(142.238),
        perihelionArgument: degreesToRadians(172.43) - ascendingNodeLongitude,
        meanMotion: (2 * Math.PI) / orbitalPeriodSec,
        epoch: '2000-01-01 12:00:00',
    } as EngineOrbit;
};

export const buildNeptuneOrbit = (): EngineOrbit => {
    const ascendingNodeLongitude = degreesToRadians(131.79);
    const orbitalPeriodSec = 164.9 * 31540000;

    return {
        orbitalPeriod: orbitalPeriodSec,
        ascendingNodeLongitude: ascendingNodeLongitude,
        eccentricity: 0.00895,
        inclination: degreesToRadians(1.77),
        semiMajorAxis: 30.07 * AU_TO_KM_1,
        meanAnomaly: degreesToRadians(259.883),
        perihelionArgument: degreesToRadians(46.68) - ascendingNodeLongitude,
        meanMotion: (2 * Math.PI) / orbitalPeriodSec,
        epoch: '2000-01-01 12:00:00',
    } as EngineOrbit;
};

const degreesToRadians = (degrees: number): number => {
    return (degrees * Math.PI) / 180;
};

const buildPrimaryBody = (props: Partial<EnginePrimaryBody>): EnginePrimaryBody => {
    return {
        name: props.name,
        orbitData: props.orbitData,
        epochOffset: props.epochOffset,
        color: props.color,
        radiusKm: props.radiusKm,
        currentPosition: props.currentPosition ?? new Vector3(0, 0, 0),
    } as EnginePrimaryBody;
};
