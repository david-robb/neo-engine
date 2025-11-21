import * as THREE from 'three';

export interface NeoEngineBody {
    state: NeoBodyState;
    mesh: NeoBodyMesh;
    orbit: NeoBodyOrbitalData;
    properties: NeoBodyProperties;
}

export interface NeoBodyProperties {
    name: string;
    isHazardous: boolean;
    diameterMeters: number;
    diameterFeet: number;
    diameterMiles: number;
    diameterKilometers: number;
}

export interface NeoBodyState {
    active: boolean;
    isHovered: boolean;
    isSelected: boolean;
    currentPosition: THREE.Vector3;
}

export interface NeoBodyMesh {
    orbit: THREE.LineSegments | undefined;
    sphere: THREE.Mesh | undefined;
}

export interface NeoBodyOrbitalData {
    orbitId: string;
    orbitDeterminationDate: string;
    firstObservationDate: string;
    lastObservationDate: string;
    dataArcInDays: number | undefined;
    observationsUsed: number;
    orbitUncertainty: number;
    minimumOrbitIntersection: number;
    jupiterTisserandInvariant: number;
    epochOsculation: number;
    eccentricity: number;
    semiMajorAxis: number;
    inclination: number;
    ascendingNodeLongitude: number;
    orbitalPeriod: number;
    perihelionDistance: number;
    perihelionArgument: number;
    aphelionDistance: number;
    perihelionTime: number;
    meanAnomaly: number;
    meanMotion: number;
    equinox: string;
}
