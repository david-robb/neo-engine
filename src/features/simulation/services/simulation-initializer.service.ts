import { NEO } from '../types/neo.types';
import { fetchAllNeos, fetchHazardousNeos, fetchNeos } from '../services/database-api.service';
import { SimulationMode, SimulationStartState } from '../types/simulation.types';
import * as THREE from 'three';
import { EngineSecondaryBody } from '../types/neo-engine.types';
import { synchronizeEpochs } from '../services/epoch-synchronizer.service';
import { calculatePosition } from '../../../utility/orbital-mechanics';
import { initializePlanetMeshes, initializePlanets } from './planet-initializer.service';

export const initializeSimulation = async (mode: SimulationMode, epoch: Date, customAmount: number = 1): Promise<SimulationStartState> => {
    const databaseNeos = await fetchDatabaseRecords(mode, customAmount);

    console.log(`${databaseNeos.length} Objects Loaded!`);

    synchronizeEpochs(databaseNeos, epoch);

    const engineObjects: EngineSecondaryBody[] = toEngineObjects(databaseNeos);
    engineObjects.forEach((engineObject) => {
        engineObject.currentPosition = calculatePosition(engineObject.orbit, engineObject.epochOffset);
    });

    const instancedMesh = buildInstancedSpheres(engineObjects.length);
    const gridMesh = buildGrid();

    const planets = initializePlanets(epoch);
    const { orbitMeshes, bodyMeshes } = initializePlanetMeshes(planets);

    return {
        gridMesh: gridMesh,
        objects: engineObjects,
        objectsMesh: instancedMesh,
        planets: planets,
        planetOrbitMesh: orbitMeshes,
        planetMeshes: bodyMeshes,
    };
};

const fetchDatabaseRecords = async (mode: SimulationMode, customAmount: number = 1): Promise<NEO[]> => {
    switch (mode) {
        case SimulationMode.ONLY_HAZARDOUS:
            return fetchHazardousNeos();
        case SimulationMode.ALL:
            return fetchAllNeos();
        case SimulationMode.CUSTOM_AMOUNT:
            return fetchNeos(customAmount);
        default:
            return new Promise(() => []);
    }
};

const buildInstancedSpheres = (amount: number): THREE.InstancedMesh => {
    const geometry = new THREE.SphereGeometry(1, 30, 30);
    const material = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const mesh = new THREE.InstancedMesh(geometry, material, amount);

    mesh.layers.set(2);

    return mesh;
};

const toEngineObjects = (neos: NEO[]): EngineSecondaryBody[] => {
    return neos.map((neo, index) => {
        const o = neo.orbitalData;

        return {
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
            orbit: {
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
            },
            meshIndex: index,
        };
    });
};

const buildGrid = (): THREE.GridHelper => {
    const GRID_TOTAL_SIZE_KM = 1000000000; // 1 billion KM
    const GRID_SECTION_SIZE_KM = 100000000; // 100 million KM

    const size = GRID_TOTAL_SIZE_KM;
    const divisions = size / GRID_SECTION_SIZE_KM;
    const colorCenterLine = 0xff0000;
    const colorGrid = 0x888888;
    const gridHelper = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.3;

    return gridHelper;
};
