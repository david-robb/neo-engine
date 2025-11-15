import { Asteroid } from './asteroid';
import { Vector3 } from 'three';
import { toRad } from './util';

export function calculateOrbit(asteroid: Asteroid): Vector3[] {
    let perihelionAngle: number = 0.0;

    const segments = 3000;
    const accumulator = 360.0 / segments;

    const points: Vector3[] = [];
    for (let i = 0; i < segments; i++) {
        const orbitalCoordinates = toOrbitalCoordinates(asteroid, perihelionAngle);
        const eclipticCoordinates = toEclipticCoordinates(asteroid, orbitalCoordinates);

        points.push(eclipticCoordinates);

        perihelionAngle += accumulator;
    }

    return points;
}

function toOrbitalCoordinates(asteroid: Asteroid, trueAnomaly: number): Vector3 {
    const radius = calculateRadius(asteroid, trueAnomaly);

    const xOrb = radius * Math.cos(trueAnomaly);
    const yOrb = radius * Math.sin(trueAnomaly);

    return new Vector3(xOrb, yOrb, 0);
}

function calculateRadius(asteroid: Asteroid, perihelionAngle: number): number {
    return (
        (+asteroid.orbital_data?.semi_major_axis! * (1.0 - Math.pow(+asteroid.orbital_data?.eccentricity!, 2))) /
        (1.0 + +asteroid.orbital_data?.eccentricity! * Math.cos(perihelionAngle))
    );
}

function toEclipticCoordinates(asteroid: Asteroid, orbitalCoordinates: Vector3): Vector3 {
    return new Vector3(
        transformX(asteroid, orbitalCoordinates),
        transformY(asteroid, orbitalCoordinates),
        transformZ(asteroid, orbitalCoordinates)
    );
}

function transformX(asteroid: Asteroid, orbitalCoordinates: Vector3) {
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

function transformY(asteroid: Asteroid, orbitalCoordinates: Vector3) {
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

function transformZ(asteroid: Asteroid, orbitalCoordinates: Vector3) {
    const inclination = +asteroid.orbital_data?.inclination!;
    const argPerihelion = toRad(+asteroid.orbital_data?.perihelion_argument!);

    return (
        orbitalCoordinates.x * (Math.sin(argPerihelion) * Math.sin(inclination)) +
        orbitalCoordinates.y * (Math.cos(argPerihelion) * Math.sin(inclination))
    );
}
