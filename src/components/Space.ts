import { AsteroidModel, OrbitalData, ResponseSchema } from '../models/neo-body';
import { NeoBodyOrbitalData, NeoBodyProperties, NeoEngineBody } from '../models/body';
import { ASTEROID_JSON_LIST } from '../data';
import { SCALE_FACTOR } from '../utility/constants';
import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';
import { buildOrbit, calculateScaledPosition } from '../utility/orbital-mechanics';

export function loadEngineBodies(): NeoEngineBody[] {
    const response = ResponseSchema.parse(ASTEROID_JSON_LIST);
    const bodies = Object.entries(response.near_earth_objects!).flatMap(([_, value]) => value);

    return bodies.map((neoBody) => toEngineBody(neoBody));
}

export function buildGrid(): THREE.GridHelper {
    const GRID_TOTAL_SIZE_KM = 1000000000;
    const GRID_SECTION_SIZE_KM = 100000000;

    const size = GRID_TOTAL_SIZE_KM / SCALE_FACTOR;
    const divisions = size / (GRID_SECTION_SIZE_KM / SCALE_FACTOR);
    const colorCenterLine = 0xff0000;
    const colorGrid = 0x888888;
    const gridHelper = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.5;

    return gridHelper;
}

function toEngineBody(neoBody: AsteroidModel): NeoEngineBody {
    const properties: NeoBodyProperties = toProperties(neoBody);
    const orbit: NeoBodyOrbitalData = toOrbitalData(neoBody.orbital_data!);

    const orbitalPoints = buildOrbit(orbit);
    const startingPosition = calculateScaledPosition(orbit);

    return {
        mesh: {
            orbit: buildLine(orbitalPoints),
            sphere: buildSphere(properties.name),
        },
        state: {
            active: false,
            currentPosition: startingPosition,
            isHovered: false,
            isSelected: false,
        },
        properties: properties,
        orbit: orbit,
    };
}

function toProperties(neoBody: AsteroidModel): NeoBodyProperties {
    const estimatedDiameter = neoBody.estimated_diameter!;
    return {
        name: neoBody.name!,
        isHazardous: neoBody.is_potentially_hazardous_asteroid!,
        diameterFeet: +estimatedDiameter.feet?.estimated_diameter_min! + +neoBody.estimated_diameter?.feet?.estimated_diameter_max! / 2,
        diameterKilometers:
            +estimatedDiameter?.kilometers?.estimated_diameter_min! + +estimatedDiameter?.kilometers?.estimated_diameter_max! / 2,
        diameterMeters: +estimatedDiameter?.meters?.estimated_diameter_min! + +estimatedDiameter?.meters?.estimated_diameter_max! / 2,
        diameterMiles: +estimatedDiameter?.miles?.estimated_diameter_min! + +estimatedDiameter?.miles?.estimated_diameter_max! / 2,
    };
}

function toOrbitalData(orbitalData: OrbitalData): NeoBodyOrbitalData {
    return {
        orbitId: orbitalData.orbit_id!,
        orbitDeterminationDate: orbitalData.orbit_determination_date!,
        firstObservationDate: orbitalData.first_observation_date!,
        lastObservationDate: orbitalData.last_observation_date!,
        dataArcInDays: daysToSec(orbitalData.data_arc_in_days!),
        observationsUsed: orbitalData.observations_used!,
        orbitUncertainty: +orbitalData.orbit_uncertainty!,
        minimumOrbitIntersection: auToKm(orbitalData.minimum_orbit_intersection!),
        jupiterTisserandInvariant: +orbitalData.jupiter_tisserand_invariant!, // CHECK
        epochOsculation: +orbitalData.epoch_osculation!, // CHECK
        eccentricity: +orbitalData.eccentricity!,
        semiMajorAxis: auToKm(orbitalData.semi_major_axis!),
        inclination: degToRad(+orbitalData.inclination!),
        ascendingNodeLongitude: degToRad(+orbitalData.ascending_node_longitude!),
        orbitalPeriod: daysToSec(+orbitalData.orbital_period!)!,
        perihelionDistance: auToKm(orbitalData.perihelion_distance!),
        perihelionArgument: degToRad(+orbitalData.perihelion_argument!), // CHECK
        aphelionDistance: auToKm(orbitalData.aphelion_distance!),
        perihelionTime: +orbitalData.perihelion_time!, // CHECK
        meanAnomaly: degToRad(+orbitalData.mean_anomaly!),
        meanMotion: degDayToRadSec(orbitalData.mean_motion!),
        equinox: orbitalData.equinox!,
    };
}

function daysToSec(day: number | undefined): number | undefined {
    if (!day) {
        return undefined;
    }

    return day * 86400;
}

function degDayToRadSec(val: string): number {
    return +val * (Math.PI / (180 * 86400));
}

function auToKm(auDistance: string): number {
    return +auDistance! * 149597870.691;
}

function buildLine(orbitPositions: THREE.Vector3[]): THREE.LineSegments {
    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(orbitPositions);

    // 0x343434
    const material = new THREE.LineBasicMaterial({ color: 0x4f4d4d, depthWrite: false });
    const mesh = new THREE.LineSegments(geometry, material);
    mesh.layers.set(1);

    return mesh;
}

function buildSphere(name: string): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(1000, 50, 50); // (1000 * SCALE_FACTOR) KM

    const material = new THREE.MeshBasicMaterial({ color: 0xa9a9a9 });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;
    mesh.layers.set(2);

    return mesh;
}
