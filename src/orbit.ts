import { Asteroid } from './asteroid';
import { Vector3 } from 'three';

export function calculateOrbit(asteroid: Asteroid): Vector3[] {
  let perihelionAngle: number = 0.0;

  const segments = 5000;
  const accumulator = 360.0 / segments;

  const points: Vector3[] = [];
  for (let i = 0; i < segments; i++) {
    const radius = calculateRadius(asteroid, perihelionAngle);

    const xOrb = radius * Math.cos(perihelionAngle);
    const yOrb = radius * Math.sin(perihelionAngle);

    const x = transformX(asteroid, xOrb, yOrb);
    const y = transformY(asteroid, xOrb, yOrb);
    const z = transformZ(asteroid, xOrb, yOrb);

    points.push(new Vector3(x, y, z));

    perihelionAngle += accumulator;
  }

  console.log(points);

  return points;
}

function calculateRadius(asteroid: Asteroid, perihelionAngle: number): number {
  return (
    (+asteroid.orbital_data?.semi_major_axis! *
      (1.0 - Math.pow(+asteroid.orbital_data?.eccentricity!, 2))) /
    (1.0 + +asteroid.orbital_data?.eccentricity! * Math.cos(perihelionAngle))
  );
}

function transformX(asteroid: Asteroid, x: number, y: number) {
  const inclination = +asteroid.orbital_data?.inclination!;
  const longAscendingNode = +asteroid.orbital_data?.ascending_node_longitude!;
  const argPerihelion = +asteroid.orbital_data?.perihelion_argument!;

  const p1 =
    x *
    (Math.cos(longAscendingNode) * Math.cos(argPerihelion) -
      Math.sin(longAscendingNode) * Math.sin(argPerihelion) * Math.cos(inclination));
  const p2 =
    y *
    (Math.sin(longAscendingNode) * Math.cos(argPerihelion) +
      Math.cos(longAscendingNode) * Math.sin(argPerihelion) * Math.cos(inclination));

  return p1 - p2;
}

function transformY(asteroid: Asteroid, x: number, y: number) {
  const inclination = +asteroid.orbital_data?.inclination!;
  const longAscendingNode = +asteroid.orbital_data?.ascending_node_longitude!;
  const argPerihelion = +asteroid.orbital_data?.perihelion_argument!;

  const p1 =
    x *
    (Math.sin(longAscendingNode) * Math.cos(argPerihelion) +
      Math.cos(longAscendingNode) * Math.sin(argPerihelion) * Math.cos(inclination));
  const p2 =
    y *
    (Math.cos(longAscendingNode) * Math.cos(argPerihelion) -
      Math.sin(longAscendingNode) * Math.sin(argPerihelion) * Math.cos(inclination));

  return p1 + p2;
}

function transformZ(asteroid: Asteroid, x: number, y: number) {
  const inclination = +asteroid.orbital_data?.inclination!;
  const argPerihelion = +asteroid.orbital_data?.perihelion_argument!;

  return (
    x * (Math.sin(argPerihelion) * Math.sin(inclination)) +
    y * (Math.cos(argPerihelion) * Math.sin(inclination))
  );
}
