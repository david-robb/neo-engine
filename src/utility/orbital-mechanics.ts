import { BufferGeometry, Float32BufferAttribute, LineBasicMaterial, LineSegments, Matrix4, Vector3 } from 'three';
import { ORBIT_SEGMENT_COUNT, SCALE_FACTOR } from './constants';
import { NEOOrbitalData } from '../components/simulation/types/neo.types';
import { EngineNEO } from '../components/simulation/types/neo-engine.types';

export function buildOrbitForNew(orbitElements: NEOOrbitalData): LineSegments {
    let trueAnomaly: number = 0.0;

    const segments: number = ORBIT_SEGMENT_COUNT;
    const accumulator: number = 360.0 / segments;

    const points: Vector3[] = [];
    for (let i = 0; i < segments; i++) {
        const orbitalCoordinates = toOrbitalCoordinates(orbitElements, trueAnomaly);
        const eclipticCoordinates = toEclipticCoordinates(orbitElements, orbitalCoordinates);

        points.push(eclipticCoordinates);

        trueAnomaly += accumulator;
    }

    const allPts: number[] = [];
    for (let i = 0; i < points.length - 1; i++) {
        allPts.push(points[i].x);
        allPts.push(points[i].y);
        allPts.push(points[i].z);
        allPts.push(points[i + 1].x);
        allPts.push(points[i + 1].y);
        allPts.push(points[i + 1].z);
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(allPts, 3));

    const material = new LineBasicMaterial({ transparent: true, opacity: 0.1, color: 0xa9a9a9, depthWrite: false });
    return new LineSegments(geometry, material);
}

export function calculateScaledPosition(orbitElements: NEOOrbitalData, t: number = 0, scale: boolean = true) {
    const eccentricAnomaly = calculateEccentricAnomaly(orbitElements, t);
    const trueAnomaly = calculateTrueAnomaly(orbitElements, eccentricAnomaly);

    const orbitalCoordinates = toOrbitalCoordinates(orbitElements, trueAnomaly);
    return toEclipticCoordinates(orbitElements, orbitalCoordinates, scale);
}

export function calculateDetailedState(body: EngineNEO, currentPosition: Vector3): { velocity: number; distanceToSun: number } {
    const mu = 132712440018;
    const objectPosition = currentPosition.multiplyScalar(SCALE_FACTOR);

    const distanceToSun = Math.hypot(objectPosition.x, objectPosition.y, objectPosition.z);
    const velocity = Math.sqrt(mu * (2.0 / distanceToSun - 1.0 / body.neo.orbitalData.semiMajorAxis));

    return { velocity, distanceToSun };
}

function toOrbitalCoordinates(orbitElements: NEOOrbitalData, trueAnomaly: number): Vector3 {
    const radius = calculateRadius(orbitElements, trueAnomaly);

    const xOrb = radius * Math.cos(trueAnomaly);
    const yOrb = radius * Math.sin(trueAnomaly);

    return new Vector3(xOrb, yOrb, 0);
}

function calculateRadius(orbitElements: NEOOrbitalData, trueAnomaly: number): number {
    return (
        (orbitElements.semiMajorAxis * (1.0 - Math.pow(orbitElements.eccentricity, 2))) /
        (1.0 + orbitElements.eccentricity * Math.cos(trueAnomaly))
    );
}

function toEclipticCoordinates(orbitElements: NEOOrbitalData, orbitalCoordinates: Vector3, scale: boolean = true): Vector3 {
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

    const matrix = new Matrix4();
    matrix.makeRotationX((3 * Math.PI) / 2);

    const positionVector = new Vector3(xComp, yComp, zComp);
    if (scale) {
        positionVector.multiplyScalar(1 / SCALE_FACTOR);
    }

    return positionVector.applyMatrix4(matrix);
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
