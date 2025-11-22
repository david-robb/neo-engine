export interface NEO {
    id: number;
    neoReferenceId: number;
    name: string;
    epoch: string;
    orbitalClass: string;
    isHazardous: boolean;
    isSentry: boolean;
    diameter: NEODiameter;
    orbitalData: NEOOrbitalData;
}

export interface NEODiameter {
    km: { min: number; max: number };
}

export interface NEOOrbitalData {
    determinationDate: string;
    firstObservation: string;
    lastObservation: string;
    dataArc: number;
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
}
