import { Matrix4, Vector3 } from 'three';
import { NEOOrbitalData } from '../features/simulation/types/neo.types';
import { EngineSecondaryBody } from '../features/simulation/types/neo-engine.types';

const DEFAULT_ROTATION = new Matrix4().makeRotationX((3 * Math.PI) / 2);

export function calculatePosition(orbitElements: any, t: number = 0) {
    const eccentricAnomaly = calculateEccentricAnomaly(orbitElements, t);
    const trueAnomaly = calculateTrueAnomaly(orbitElements, eccentricAnomaly);

    const orbitalCoordinates = toOrbitalCoordinates(orbitElements, trueAnomaly);

    return toEclipticCoordinates(orbitElements, orbitalCoordinates);
}

export function calculateDetailedState(body: EngineSecondaryBody, currentPosition: Vector3): { velocity: number; distanceToSun: number } {
    const mu = 132712440018;

    const distanceToSun = Math.hypot(currentPosition.x, currentPosition.y, currentPosition.z);
    const velocity = Math.sqrt(mu * (2.0 / distanceToSun - 1.0 / body.orbit.semiMajorAxis));

    return { velocity, distanceToSun };
}

export function toOrbitalCoordinates(orbitElements: NEOOrbitalData, trueAnomaly: number): Vector3 {
    const radius = calculateRadius(orbitElements, trueAnomaly);

    const xOrb = radius * Math.cos(trueAnomaly);
    const yOrb = radius * Math.sin(trueAnomaly);

    return new Vector3(xOrb, yOrb, 0);
}

export function toEclipticCoordinates(orbitElements: NEOOrbitalData, orbitalCoordinates: Vector3): Vector3 {
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
    const positionVector = new Vector3(xComp, yComp, zComp);

    return positionVector.applyMatrix4(DEFAULT_ROTATION);
}

function calculateRadius(orbitElements: NEOOrbitalData, trueAnomaly: number): number {
    return (
        (orbitElements.semiMajorAxis * (1.0 - Math.pow(orbitElements.eccentricity, 2))) /
        (1.0 + orbitElements.eccentricity * Math.cos(trueAnomaly))
    );
}

function calculateMeanAnomaly(orbitElements: NEOOrbitalData, t: number): number {
    const meanAnomalyAtEpoch = orbitElements.meanAnomaly;
    if (t === 0) {
        return meanAnomalyAtEpoch;
    }

    return meanAnomalyAtEpoch + orbitElements.meanMotion * t;
}

function calculateEccentricAnomaly(orbitElements: NEOOrbitalData, t: number): number {
    const m = calculateMeanAnomaly(orbitElements, t);
    const eccentricity = orbitElements.eccentricity;

    let en = m;
    let enP1 = 0;

    while (Math.abs(en - enP1) > 0.01) {
        enP1 = en + (m - en + eccentricity * Math.sin(en)) / (1 - eccentricity * Math.cos(en));
        en = enP1;
    }

    return enP1;
}

function calculateTrueAnomaly(orbitElements: NEOOrbitalData, eccentricAnomaly: number): number {
    const eccentricity = orbitElements.eccentricity;

    return 2.0 * Math.atan(Math.sqrt((1 + eccentricity) / (1 - eccentricity)) * Math.tan(eccentricAnomaly / 2.0));
}
