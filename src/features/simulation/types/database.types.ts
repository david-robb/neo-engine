export interface DiameterJson {
    km: { min: number; max: number };
}

export interface OrbitalDataJson {
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
