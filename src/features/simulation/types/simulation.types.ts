import * as THREE from 'three';
import { Color, GridHelper, InstancedMesh, Mesh, Vector3 } from 'three';
import { MeshLine } from '@lume/three-meshline';

export interface EngineSecondaryBody {
    id: number;
    name: string;
    neoReferenceId: number;
    estimatedDiameterMaxKm: number;
    estimatedDiameterMinKm: number;
    orbitalClass: string;
    isHazardous: boolean;
    isSentry: boolean;

    epochOffset: number;
    distanceToEarth: number;
    currentPosition: THREE.Vector3;
    velocity: number;
    orbit: EngineOrbit;
    meshIndex: number;
}

export interface EnginePrimaryBody {
    name: string;
    orbitData: EngineOrbit | undefined;
    epochOffset: number;
    radiusKm: number;
    color: Color;
    currentPosition: Vector3;
}

export interface EngineOrbit {
    orbitalPeriod: number;
    orbitUncertainty: number;
    eccentricity: number;
    semiMajorAxis: number;
    inclination: number;
    ascendingNodeLongitude: number;
    perihelionDistance: number;
    perihelionArgument: number;
    aphelionDistance: number;
    perihelionTime: number;
    meanAnomaly: number;
    meanMotion: number;
    epoch: string;
}

export interface SimulationMeshes {
    gridMesh: GridHelper | undefined;

    secondaryBodiesMesh: InstancedMesh | undefined;

    primaryBodyMeshes: Mesh[] | undefined;
    primaryBodyOrbitMeshes: MeshLine[] | undefined;
}

export interface SimulationTime {
    epoch: Date;
    simulationClock: Date | undefined;
    multiplier: number;
}
