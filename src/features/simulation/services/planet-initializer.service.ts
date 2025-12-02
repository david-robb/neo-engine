import { EngineOrbit, EnginePrimaryBody } from '../types/neo-engine.types';
import * as THREE from 'three';
import { Color, Mesh, Vector3 } from 'three';
import * as tempo from '@formkit/tempo';
import { parse, tzDate } from '@formkit/tempo';
import { buildOrbitMeshLine } from './orbit-mesh.service';
import { MeshLine } from '@lume/three-meshline';
import { AU_TO_KM_1 } from '../../../utility/constants';

export const initializePlanets = (simulationDate: Date): EnginePrimaryBody[] => {
    return [
        buildSun(),
        buildMercury(simulationDate, new Color(0xe0ffff)),
        buildVenus(simulationDate, new Color(0xffff00)),
        buildEarth(simulationDate, new Color(0x00bfff)),
        buildMars(simulationDate, new Color(0xff4500)),
        buildJupiter(simulationDate, new Color(0xffa500)),
        buildSaturn(simulationDate, new Color(0x32cd32)),
        buildUranus(simulationDate, new Color(0xff69b4)),
        buildNeptune(simulationDate, new Color(0xff00ff)),
    ];
};

export const initializePlanetMeshes = (
    planets: EnginePrimaryBody[]
): {
    bodyMeshes: Mesh[];
    orbitMeshes: MeshLine[];
} => {
    const bodyMeshes = planets.map((planet) => buildSphere(planet.radiusKm, planet.color, planet.name));
    const orbitMeshes = planets
        .filter((planet) => !!planet.orbitData)
        .map((planet) => buildOrbitMeshLine(planet.orbitData!, planet.color, planet.name, Math.min(planet.radiusKm / 2, 10000000)));

    return {
        bodyMeshes,
        orbitMeshes,
    };
};

const buildSun = (): EnginePrimaryBody => {
    return {
        name: 'Sun',
        orbitData: undefined,
        epochOffset: 0,
        currentPosition: new Vector3(0, 0, 0),
        radiusKm: 695700,
        color: new Color(0xffd700),
    };
};

const buildEarth = (simulationDate: Date, color: Color): EnginePrimaryBody => {
    const orbitalData = {
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

    const epochDate = tzDate(parse('2000-01-01 12:00:00'), 'UTC');
    const offsetSeconds = tempo.diffSeconds(epochDate, simulationDate);

    const epochOffset = offsetSeconds < 0 ? Math.abs(offsetSeconds) : -1 * offsetSeconds;

    return {
        name: 'Earth',
        orbitData: orbitalData,
        epochOffset,
        color: color,
        radiusKm: 6357 * 100,
        currentPosition: new Vector3(0, 0, 0),
    };
};

const buildMars = (simulationDate: Date, color: Color): EnginePrimaryBody => {
    const orbitalData = {
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

    const epochDate = tzDate(parse('2000-01-01 12:00:00'), 'UTC');
    const offsetSeconds = tempo.diffSeconds(epochDate, simulationDate);

    const epochOffset = offsetSeconds < 0 ? Math.abs(offsetSeconds) : -1 * offsetSeconds;

    return {
        name: 'Mars',
        orbitData: orbitalData,
        epochOffset,
        color: color,
        radiusKm: 2439.7 * 100,
        currentPosition: new Vector3(0, 0, 0),
    };
};

const buildMercury = (simulationDate: Date, color: Color): EnginePrimaryBody => {
    const ascendingNodeLongitude = degreesToRadians(48.34);

    const orbitalData = {
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

    const epochDate = tzDate(parse('2000-01-01 12:00:00'), 'UTC');
    const offsetSeconds = tempo.diffSeconds(epochDate, simulationDate);

    const epochOffset = offsetSeconds < 0 ? Math.abs(offsetSeconds) : -1 * offsetSeconds;

    return {
        name: 'Mercury',
        orbitData: orbitalData,
        epochOffset,
        color: color,
        radiusKm: 3396.2 * 100,
        currentPosition: new Vector3(0, 0, 0),
    };
};

const buildVenus = (simulationDate: Date, color: Color): EnginePrimaryBody => {
    const ascendingNodeLongitude = degreesToRadians(76.67);

    const orbitalData = {
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

    const epochDate = tzDate(parse('2000-01-01 12:00:00'), 'UTC');
    const offsetSeconds = tempo.diffSeconds(epochDate, simulationDate);

    const epochOffset = offsetSeconds < 0 ? Math.abs(offsetSeconds) : -1 * offsetSeconds;

    return {
        name: 'Venus',
        orbitData: orbitalData,
        epochOffset,
        color: color,
        radiusKm: 6051.8 * 100,
        currentPosition: new Vector3(0, 0, 0),
    };
};

const buildJupiter = (simulationDate: Date, color: Color): EnginePrimaryBody => {
    const ascendingNodeLongitude = degreesToRadians(100.29);

    const orbitalData = {
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

    const epochDate = tzDate(parse('2000-01-01 12:00:00'), 'UTC');
    const offsetSeconds = tempo.diffSeconds(epochDate, simulationDate);

    const epochOffset = offsetSeconds < 0 ? Math.abs(offsetSeconds) : -1 * offsetSeconds;

    return {
        name: 'Jupiter',
        orbitData: orbitalData,
        epochOffset,
        color: color,
        radiusKm: 71492 * 100,
        currentPosition: new Vector3(0, 0, 0),
    };
};

const buildSaturn = (simulationDate: Date, color: Color): EnginePrimaryBody => {
    const ascendingNodeLongitude = degreesToRadians(113.64);
    const orbitalPeriodSec = 29.47 * 31540000;

    const orbitalData = {
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

    const epochDate = tzDate(parse('2000-01-01 12:00:00'), 'UTC');
    const offsetSeconds = tempo.diffSeconds(epochDate, simulationDate);

    const epochOffset = offsetSeconds < 0 ? Math.abs(offsetSeconds) : -1 * offsetSeconds;

    return {
        name: 'Saturn',
        orbitData: orbitalData,
        epochOffset,
        color: color,
        radiusKm: 58232 * 100,
        currentPosition: new Vector3(0, 0, 0),
    };
};

const buildUranus = (simulationDate: Date, color: Color): EnginePrimaryBody => {
    const ascendingNodeLongitude = degreesToRadians(73.96);
    const orbitalPeriodSec = 84.05 * 31540000;

    const orbitalData = {
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

    const epochDate = tzDate(parse('2000-01-01 12:00:00'), 'UTC');
    const offsetSeconds = tempo.diffSeconds(epochDate, simulationDate);

    const epochOffset = offsetSeconds < 0 ? Math.abs(offsetSeconds) : -1 * offsetSeconds;

    return {
        name: 'Uranus',
        orbitData: orbitalData,
        epochOffset,
        color: color,
        radiusKm: 25362 * 100,
        currentPosition: new Vector3(0, 0, 0),
    };
};

const buildNeptune = (simulationDate: Date, color: Color): EnginePrimaryBody => {
    const ascendingNodeLongitude = degreesToRadians(131.79);
    const orbitalPeriodSec = 164.9 * 31540000;

    const orbitalData = {
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

    const epochDate = tzDate(parse('2000-01-01 12:00:00'), 'UTC');
    const offsetSeconds = tempo.diffSeconds(epochDate, simulationDate);

    const epochOffset = offsetSeconds < 0 ? Math.abs(offsetSeconds) : -1 * offsetSeconds;

    return {
        name: 'Neptune',
        orbitData: orbitalData,
        epochOffset,
        color: color,
        radiusKm: 24622 * 100,
        currentPosition: new Vector3(0, 0, 0),
    };
};

const degreesToRadians = (degrees: number): number => {
    return (degrees * Math.PI) / 180;
};

const buildSphere = (radius: number, color: Color, name: string): Mesh => {
    const sphereGeometry = new THREE.SphereGeometry(radius, 30, 30);
    const material = new THREE.MeshBasicMaterial({ color: color });

    const mesh = new THREE.Mesh(sphereGeometry, material);
    mesh.name = name;

    return mesh;
};
