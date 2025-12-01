import * as THREE from 'three';
import { Color, Vector3 } from 'three';

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
    distanceToSun: number;
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
