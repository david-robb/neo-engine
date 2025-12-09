import { NEO, NEOOrbitalData } from '../types/database.types';
import { fetch } from '../services/database-api.service';
import * as THREE from 'three';
import { GridHelper, InstancedMesh, Mesh } from 'three';
import { EngineOrbit, EnginePrimaryBody, EngineSecondaryBody } from '../types/simulation.types';
import { buildPrimaryBodies } from '../utilities/primary-body.utilities';
import { buildGridMesh, buildInstancedSphereMesh, buildOrbitMeshLine, buildSphereMesh } from './mesh.service';
import { MeshLine } from '@lume/three-meshline';
import { synchronizeEpochs } from '../utilities/epoch-synchronization.utilities';
import { useStateStore } from '../stores/state';
import { markRaw } from 'vue';

export const initializeSimulation = async (epoch: Date, amount: number = 1): Promise<void> => {
    const state = useStateStore();

    const secondaryObjects = await fetch(amount);

    synchronizeEpochs(secondaryObjects, epoch);

    const secondaryBodies: EngineSecondaryBody[] = mapEngineSecondaryObject(secondaryObjects);
    const instancedMesh: InstancedMesh = buildInstancedSphereMesh(secondaryBodies.length);

    const gridMesh: GridHelper = buildGridMesh();

    const primaryBodies: EnginePrimaryBody[] = buildPrimaryBodies(epoch);
    const { orbitMeshes, bodyMeshes } = initializePrimaryBodyMeshes(primaryBodies);

    primaryBodies.forEach((body) => state._primaryBody.set(body.name, body));
    secondaryBodies.forEach((body) => state._secondaryBody.set(body.id, body));
    state._meshes = {
        secondaryBodiesMesh: markRaw(instancedMesh),
        gridMesh: markRaw(gridMesh),
        primaryBodyMeshes: markRaw(bodyMeshes),
        primaryBodyOrbitMeshes: markRaw(orbitMeshes),
    };

    state.setFocus(state._primaryBody.get('Earth')!);
};

const mapEngineSecondaryObject = (databaseObjects: NEO[]): EngineSecondaryBody[] => {
    return databaseObjects.map((neo, index) => {
        const o: NEOOrbitalData = neo.orbitalData;

        return new EngineSecondaryBody({
            id: neo.id,
            name: neo.name,
            neoReferenceId: neo.neoReferenceId,
            estimatedDiameterMaxKm: neo.diameter.km.max,
            estimatedDiameterMinKm: neo.diameter.km.min,
            orbitalClass: neo.orbitalClass,
            isHazardous: neo.isHazardous,
            isSentry: neo.isSentry,
            currentPosition: new THREE.Vector3(0, 0, 0),
            distanceToSun: 0,
            distanceToEarth: 0,
            velocity: 0,
            epochOffset: neo.epochOffset,
            orbit: new EngineOrbit({
                epoch: neo.epoch,
                orbitalPeriod: o.orbitalPeriod,
                orbitUncertainty: o.orbitUncertainty,
                eccentricity: o.eccentricity,
                semiMajorAxis: o.semiMajorAxis,
                inclination: o.inclination,
                ascendingNodeLongitude: o.ascendingNodeLongitude,
                perihelionDistance: o.perihelionDistance,
                perihelionArgument: o.perihelionArgument,
                aphelionDistance: o.aphelionDistance,
                perihelionTime: o.perihelionTime,
                meanAnomaly: o.meanAnomaly,
                meanMotion: o.meanMotion,
            }),
            meshIndex: index,
        });
    });
};

const initializePrimaryBodyMeshes = (
    planets: EnginePrimaryBody[]
): {
    bodyMeshes: Mesh[];
    orbitMeshes: MeshLine[];
} => {
    const bodyMeshes = planets.map((planet) => buildSphereMesh(planet.radiusKm, planet.color, planet.name));

    const orbitMeshes = planets
        .filter((planet) => !!planet.orbitData)
        .map((planet) => buildOrbitMeshLine(planet.orbitData!, planet.color, planet.name, Math.min(planet.radiusKm / 2, 10000000)));

    return {
        bodyMeshes,
        orbitMeshes,
    };
};
