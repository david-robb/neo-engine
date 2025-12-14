import { EngineOrbit } from '../types/simulation.types';
import { Matrix4, Vector3 } from 'three';
import { ORBIT_SEGMENT_COUNT } from '../../../utility/constants';

const DEFAULT_ROTATION = new Matrix4().makeRotationX((3 * Math.PI) / 2);

interface ObjectTrigCache {
    cosAscNode: number;
    sinAscNode: number;
    cosArgPeri: number;
    sinArgPeri: number;
    cosInclination: number;
    sinInclination: number;
}

const SIMULATION_TRIG_CACHE = new Map<string, ObjectTrigCache>();

export const calculatePosition = (objectName: string, orbitElements: EngineOrbit, t: number, targetVector: Vector3): void => {
    const eccentricAnomaly = calculateEccentricAnomaly(orbitElements, t);
    const trueAnomaly = calculateTrueAnomaly(orbitElements, eccentricAnomaly);

    toOrbitalCoordinates(orbitElements, trueAnomaly, targetVector);
    toEclipticCoordinates(objectName, orbitElements, targetVector);
};

export const calculateOrbit = (objectName: string, orbit: EngineOrbit): Vector3[] => {
    let trueAnomaly: number = 0.0;

    const segments: number = ORBIT_SEGMENT_COUNT;
    const accumulator: number = 360.0 / segments;

    const points: Vector3[] = [];
    for (let i = 0; i < segments; i++) {
        const position = new Vector3();

        toOrbitalCoordinates(orbit, trueAnomaly, position);
        toEclipticCoordinates(objectName, orbit, position);

        points.push(position);

        trueAnomaly += accumulator;
    }

    return points;
};

export const toOrbitalCoordinates = (orbitElements: EngineOrbit, trueAnomaly: number, targetVector: Vector3): void => {
    const radius = calculateRadius(orbitElements, trueAnomaly);

    const xOrb = radius * Math.cos(trueAnomaly);
    const yOrb = radius * Math.sin(trueAnomaly);

    targetVector.x = xOrb;
    targetVector.y = yOrb;
    targetVector.z = 0;
};

export const toEclipticCoordinates = (objectName: string, orbitElements: EngineOrbit, targetVector: Vector3): void => {
    const longAscendingNode = orbitElements.ascendingNodeLongitude;
    const argPerihelion = orbitElements.perihelionArgument;
    const inclination = orbitElements.inclination;

    let objectTrigCache = SIMULATION_TRIG_CACHE.get(objectName);
    if (!objectTrigCache) {
        const newCache: ObjectTrigCache = {
            cosAscNode: Math.cos(longAscendingNode),
            sinAscNode: Math.sin(longAscendingNode),
            cosArgPeri: Math.cos(argPerihelion),
            sinArgPeri: Math.sin(argPerihelion),
            cosInclination: Math.cos(inclination),
            sinInclination: Math.sin(inclination),
        };

        SIMULATION_TRIG_CACHE.set(objectName, newCache);

        objectTrigCache = newCache;
    }

    const cosAscNode = objectTrigCache.cosAscNode!;
    const sinAscNode = objectTrigCache.sinAscNode!;
    const cosArgPeri = objectTrigCache.cosArgPeri!;
    const sinArgPeri = objectTrigCache.sinArgPeri!;
    const cosInclination = objectTrigCache.cosInclination!;
    const sinInclination = objectTrigCache.sinInclination!;

    const x1 = targetVector.x * (cosAscNode * cosArgPeri - sinAscNode * sinArgPeri * cosInclination);
    const x2 = targetVector.y * (sinAscNode * cosArgPeri + cosAscNode * sinArgPeri * cosInclination);
    const xComp = x1 - x2;

    const y1 = targetVector.x * (sinAscNode * cosArgPeri + cosAscNode * sinArgPeri * cosInclination);
    const y2 = targetVector.y * (cosAscNode * cosArgPeri - sinAscNode * sinArgPeri * cosInclination);
    const yComp = y1 + y2;

    const zComp = targetVector.x * (sinArgPeri * sinInclination) + targetVector.y * (cosArgPeri * sinInclination);

    targetVector.x = xComp;
    targetVector.y = yComp;
    targetVector.z = zComp;

    targetVector.applyMatrix4(DEFAULT_ROTATION);
};

const calculateRadius = (orbitElements: EngineOrbit, trueAnomaly: number): number => {
    return (
        (orbitElements.semiMajorAxis * (1.0 - Math.pow(orbitElements.eccentricity, 2))) /
        (1.0 + orbitElements.eccentricity * Math.cos(trueAnomaly))
    );
};

const calculateMeanAnomaly = (orbitElements: EngineOrbit, t: number): number => {
    const meanAnomalyAtEpoch = orbitElements.meanAnomaly;
    if (t === 0) {
        return meanAnomalyAtEpoch;
    }

    return meanAnomalyAtEpoch + orbitElements.meanMotion * t;
};

const calculateEccentricAnomaly = (orbitElements: EngineOrbit, t: number): number => {
    const m = calculateMeanAnomaly(orbitElements, t);
    const eccentricity = orbitElements.eccentricity;

    let en = m;
    let enP1 = 0;

    while (Math.abs(en - enP1) > 0.001) {
        enP1 = en + (m - en + eccentricity * Math.sin(en)) / (1 - eccentricity * Math.cos(en));
        en = enP1;
    }

    return enP1;
};

const calculateTrueAnomaly = (orbitElements: EngineOrbit, eccentricAnomaly: number): number => {
    const eccentricity = orbitElements.eccentricity;

    return 2.0 * Math.atan(Math.sqrt((1 + eccentricity) / (1 - eccentricity)) * Math.tan(eccentricAnomaly / 2.0));
};
