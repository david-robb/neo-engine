import { EngineOrbit } from '../types/simulation.types';
import { Matrix4, Vector3 } from 'three';
import { ORBIT_SEGMENT_COUNT } from '../../../utility/constants';

const DEFAULT_ROTATION = new Matrix4().makeRotationX((3 * Math.PI) / 2);

export function calculatePosition(orbitElements: EngineOrbit, t: number, targetVector: Vector3): void {
    const eccentricAnomaly = calculateEccentricAnomaly(orbitElements, t);
    const trueAnomaly = calculateTrueAnomaly(orbitElements, eccentricAnomaly);

    toOrbitalCoordinates(orbitElements, trueAnomaly, targetVector);
    toEclipticCoordinates(orbitElements, targetVector);
}

export function toOrbitalCoordinates(orbitElements: EngineOrbit, trueAnomaly: number, targetVector: Vector3): void {
    const radius = calculateRadius(orbitElements, trueAnomaly);

    const xOrb = radius * Math.cos(trueAnomaly);
    const yOrb = radius * Math.sin(trueAnomaly);

    targetVector.x = xOrb;
    targetVector.y = yOrb;
    targetVector.z = 0;
}

export function toEclipticCoordinates(orbitElements: EngineOrbit, orbitalCoordinates: Vector3): void {
    const longAscendingNode = orbitElements.ascendingNodeLongitude;
    const argPerihelion = orbitElements.perihelionArgument;
    const inclination = orbitElements.inclination;

    const cosAscNode = Math.cos(longAscendingNode);
    const sinAscNode = Math.sin(longAscendingNode);

    const cosArgPeri = Math.cos(argPerihelion);
    const sinArgPeri = Math.sin(argPerihelion);

    const cosInclination = Math.cos(inclination);
    const sinInclination = Math.sin(inclination);

    const x1 = orbitalCoordinates.x * (cosAscNode * cosArgPeri - sinAscNode * sinArgPeri * cosInclination);
    const x2 = orbitalCoordinates.y * (sinAscNode * cosArgPeri + cosAscNode * sinArgPeri * cosInclination);
    const xComp = x1 - x2;

    const y1 = orbitalCoordinates.x * (sinAscNode * cosArgPeri + cosAscNode * sinArgPeri * cosInclination);
    const y2 = orbitalCoordinates.y * (cosAscNode * cosArgPeri - sinAscNode * sinArgPeri * cosInclination);
    const yComp = y1 + y2;

    const zComp = orbitalCoordinates.x * (sinArgPeri * sinInclination) + orbitalCoordinates.y * (cosArgPeri * sinInclination);

    orbitalCoordinates.x = xComp;
    orbitalCoordinates.y = yComp;
    orbitalCoordinates.z = zComp;

    orbitalCoordinates.applyMatrix4(DEFAULT_ROTATION);
}

export const calculateOrbit = (orbit: EngineOrbit): Vector3[] => {
    let trueAnomaly: number = 0.0;

    const segments: number = ORBIT_SEGMENT_COUNT;
    const accumulator: number = 360.0 / segments;

    const points: Vector3[] = [];
    for (let i = 0; i < segments; i++) {
        const position = new Vector3();

        toOrbitalCoordinates(orbit, trueAnomaly, position);
        toEclipticCoordinates(orbit, position);

        points.push(position);

        trueAnomaly += accumulator;
    }

    return points;
};

export function calculateRadius(orbitElements: EngineOrbit, trueAnomaly: number): number {
    return (
        (orbitElements.semiMajorAxis * (1.0 - Math.pow(orbitElements.eccentricity, 2))) /
        (1.0 + orbitElements.eccentricity * Math.cos(trueAnomaly))
    );
}

export function calculateMeanAnomaly(orbitElements: EngineOrbit, t: number): number {
    const meanAnomalyAtEpoch = orbitElements.meanAnomaly;
    if (t === 0) {
        return meanAnomalyAtEpoch;
    }

    return meanAnomalyAtEpoch + orbitElements.meanMotion * t;
}

export function calculateEccentricAnomaly(orbitElements: EngineOrbit, t: number): number {
    const m = calculateMeanAnomaly(orbitElements, t);
    const eccentricity = orbitElements.eccentricity;

    let en = m;
    let enP1 = 0;

    while (Math.abs(en - enP1) > 0.001) {
        enP1 = en + (m - en + eccentricity * Math.sin(en)) / (1 - eccentricity * Math.cos(en));
        en = enP1;
    }

    return enP1;
}

export function calculateTrueAnomaly(orbitElements: EngineOrbit, eccentricAnomaly: number): number {
    const eccentricity = orbitElements.eccentricity;

    return 2.0 * Math.atan(Math.sqrt((1 + eccentricity) / (1 - eccentricity)) * Math.tan(eccentricAnomaly / 2.0));
}
