import { AsteroidModel } from './asteroid';
import { Vector3 } from 'three';
import { toRad } from './util';
import { ORBIT_SEGMENT_COUNT, SCALE_FACTOR } from './constants';

export function calculateOrbit(asteroid: AsteroidModel): Vector3[] {
    let trueAnomaly: number = 0.0;

    const segments: number = ORBIT_SEGMENT_COUNT;
    const accumulator: number = 360.0 / segments;

    const points: Vector3[] = [];
    for (let i = 0; i < segments; i++) {
        const orbitalCoordinates = toOrbitalCoordinates(asteroid, trueAnomaly);
        const eclipticCoordinates = toEclipticCoordinates(asteroid, orbitalCoordinates);

        points.push(eclipticCoordinates);

        trueAnomaly += accumulator;
    }

    return points;
}

export function toOrbitalCoordinates(asteroid: AsteroidModel, trueAnomaly: number): Vector3 {
    const radius = calculateRadius(asteroid, trueAnomaly);

    const xOrb = radius * Math.cos(trueAnomaly);
    const yOrb = radius * Math.sin(trueAnomaly);

    return new Vector3(xOrb, yOrb, 0);
}

export function calculateRadius(asteroid: AsteroidModel, perihelionAngle: number): number {
    return (
        (+asteroid.orbital_data?.semi_major_axis! * (1.0 - Math.pow(+asteroid.orbital_data?.eccentricity!, 2))) /
        (1.0 + +asteroid.orbital_data?.eccentricity! * Math.cos(perihelionAngle))
    );
}

export function toEclipticCoordinates(asteroid: AsteroidModel, orbitalCoordinates: Vector3): Vector3 {
    return new Vector3(
        transformX(asteroid, orbitalCoordinates) * SCALE_FACTOR,
        transformY(asteroid, orbitalCoordinates) * SCALE_FACTOR,
        transformZ(asteroid, orbitalCoordinates) * SCALE_FACTOR
    );
}

export function transformX(asteroid: AsteroidModel, orbitalCoordinates: Vector3) {
    const inclination = +asteroid.orbital_data?.inclination!;
    const longAscendingNode = toRad(+asteroid.orbital_data?.ascending_node_longitude!);
    const argPerihelion = toRad(+asteroid.orbital_data?.perihelion_argument!);

    const p1 =
        orbitalCoordinates.x *
        (Math.cos(longAscendingNode) * Math.cos(argPerihelion) -
            Math.sin(longAscendingNode) * Math.sin(argPerihelion) * Math.cos(inclination));
    const p2 =
        orbitalCoordinates.y *
        (Math.sin(longAscendingNode) * Math.cos(argPerihelion) +
            Math.cos(longAscendingNode) * Math.sin(argPerihelion) * Math.cos(inclination));

    return p1 - p2;
}

export function transformY(asteroid: AsteroidModel, orbitalCoordinates: Vector3) {
    const inclination = +asteroid.orbital_data?.inclination!;
    const longAscendingNode = toRad(+asteroid.orbital_data?.ascending_node_longitude!);
    const argPerihelion = toRad(+asteroid.orbital_data?.perihelion_argument!);

    const p1 =
        orbitalCoordinates.x *
        (Math.sin(longAscendingNode) * Math.cos(argPerihelion) +
            Math.cos(longAscendingNode) * Math.sin(argPerihelion) * Math.cos(inclination));
    const p2 =
        orbitalCoordinates.y *
        (Math.cos(longAscendingNode) * Math.cos(argPerihelion) -
            Math.sin(longAscendingNode) * Math.sin(argPerihelion) * Math.cos(inclination));

    return p1 + p2;
}

export function transformZ(asteroid: AsteroidModel, orbitalCoordinates: Vector3) {
    const inclination = +asteroid.orbital_data?.inclination!;
    const argPerihelion = toRad(+asteroid.orbital_data?.perihelion_argument!);

    return (
        orbitalCoordinates.x * (Math.sin(argPerihelion) * Math.sin(inclination)) +
        orbitalCoordinates.y * (Math.cos(argPerihelion) * Math.sin(inclination))
    );
}

export function calculateMeanAnomaly(asteroid: AsteroidModel, t: number): number {
    const meanAnomalyAtEpoch = +asteroid.orbital_data?.mean_anomaly!;
    if (t === 0) {
        return meanAnomalyAtEpoch;
    }

    return meanAnomalyAtEpoch + +asteroid.orbital_data?.mean_motion! * t * (360.0 / 365.25);
}

export function calculateEccentricAnomaly(asteroid: AsteroidModel, t: number): number {
    const m = calculateMeanAnomaly(asteroid, t);
    const eccentricity = +asteroid.orbital_data?.eccentricity!;

    // let en = m;
    // for (let i = 0; i < 100; i++) {
    //     en = en + (m - en + eccentricity * Math.sin(en)) / (1 - eccentricity * Math.cos(en));
    // }

    return m;
}

export function calculateTrueAnomaly(asteroid: AsteroidModel, eccentricAnomaly: number): number {
    const eccentricity = +asteroid.orbital_data?.eccentricity!;

    return 2.0 * Math.atan(Math.sqrt((1 + eccentricity) / (1 - eccentricity)) * Math.tan(eccentricAnomaly / 2.0));
}

export function calculatePosition(asteroid: AsteroidModel, t: number = 0) {
    const eccentricAnomaly = calculateEccentricAnomaly(asteroid, t);
    const trueAnomaly = calculateTrueAnomaly(asteroid, eccentricAnomaly);

    const orbitalCoordinates = toOrbitalCoordinates(asteroid, trueAnomaly);
    return toEclipticCoordinates(asteroid, orbitalCoordinates);
}