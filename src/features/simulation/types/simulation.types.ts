import * as THREE from 'three';
import { Color, GridHelper, InstancedMesh, Mesh, Vector3 } from 'three';
import { MeshLine } from '@lume/three-meshline';

export type EngineBody = EnginePrimaryBody | EngineSecondaryBody;

export class EngineSecondaryBody {
    id!: number;
    name!: string;
    neoReferenceId!: number;
    estimatedDiameterMaxKm!: number;
    estimatedDiameterMinKm!: number;
    orbitalClass!: string;
    isHazardous!: boolean;
    isSentry!: boolean;

    epochOffset!: number;
    distanceToEarth!: number;
    currentPosition!: THREE.Vector3;
    velocity!: number;
    orbit!: EngineOrbit;
    meshIndex!: number;

    public constructor(partial: Partial<EngineSecondaryBody>) {
        Object.assign(this, partial);
    }
}

export class EnginePrimaryBody {
    name!: string;
    orbitData!: EngineOrbit | undefined;
    epochOffset!: number;
    radiusKm!: number;
    color!: Color;
    currentPosition!: Vector3;

    public constructor(partial: Partial<EnginePrimaryBody>) {
        Object.assign(this, partial);
    }
}

export class EngineOrbit {
    orbitalPeriod!: number;
    orbitUncertainty!: number;
    eccentricity!: number;
    semiMajorAxis!: number;
    inclination!: number;
    ascendingNodeLongitude!: number;
    perihelionDistance!: number;
    perihelionArgument!: number;
    aphelionDistance!: number;
    perihelionTime!: number;
    meanAnomaly!: number;
    meanMotion!: number;
    epoch!: string;

    public constructor(partial: Partial<EngineOrbit>) {
        Object.assign(this, partial);
    }
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
