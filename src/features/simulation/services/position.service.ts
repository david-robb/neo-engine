import { EngineOrbit } from '../types/simulation.types';
import { calculateEccentricAnomaly, calculateRadius, calculateTrueAnomaly } from '../../../utility/orbital-mechanics';
import { Matrix4, Vector3 } from 'three';

const DEFAULT_ROTATION = new Matrix4().makeRotationX((3 * Math.PI) / 2);

export function calculateOptimizedPosition(orbitElements: EngineOrbit, t: number = 0, targetVector: Vector3): void {
    const eccentricAnomaly = calculateEccentricAnomaly(orbitElements, t);
    const trueAnomaly = calculateTrueAnomaly(orbitElements, eccentricAnomaly);

    toOptimizedOrbitalCoordinates(orbitElements, trueAnomaly, targetVector);
    toOptimizedEclipticCoordinates(orbitElements, targetVector);
}

export function toOptimizedOrbitalCoordinates(orbitElements: EngineOrbit, trueAnomaly: number, targetVector: Vector3): void {
    const radius = calculateRadius(orbitElements, trueAnomaly);

    const xOrb = radius * Math.cos(trueAnomaly);
    const yOrb = radius * Math.sin(trueAnomaly);

    targetVector.x = xOrb;
    targetVector.y = yOrb;
    targetVector.z = 0;
}

export function toOptimizedEclipticCoordinates(orbitElements: EngineOrbit, orbitalCoordinates: Vector3): void {
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
