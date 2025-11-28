import { NEO } from '../types/neo.types';
import { fetchAllNeos, fetchHazardousNeos, fetchNeos } from '../services/database-api.service';
import { SimulationMode, SimulationStartState } from '../types/simulation.types';
import * as THREE from 'three';
import { EngineNEO, SimulationObjectState } from '../types/neo-engine.types';
import { synchronizeEpochs } from '../services/epoch-synchronizer.service';
import { calculateScaledPosition } from '../../../utility/orbital-mechanics';

export const initializeSimulation = async (mode: SimulationMode, epoch: Date, customAmount: number = 1): Promise<SimulationStartState> => {
    const databaseNeos = await fetchDatabaseRecords(mode, customAmount);

    console.log(`${databaseNeos.length} Objects Loaded!`);

    synchronizeEpochs(databaseNeos, epoch);

    const engineObjects: EngineNEO[] = toEngineObjects(databaseNeos);
    engineObjects.forEach((engineObject) => {
        engineObject.currentPosition = calculateScaledPosition(engineObject.neo.orbitalData, engineObject.neo.epochOffset);
    });

    const instancedMesh = buildInstancedSpheres(engineObjects.length);
    const gridMesh = buildGrid();

    return {
        gridMesh: gridMesh,
        objects: engineObjects,
        objectsMesh: instancedMesh,
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
    const geometry = new THREE.SphereGeometry(1, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const mesh = new THREE.InstancedMesh(geometry, material, amount);

    mesh.layers.set(2);

    return mesh;
};

const toEngineObjects = (neos: NEO[]): EngineNEO[] => {
    return neos.map((neo, index) => {
        return {
            id: neo.id,
            meshIndex: index,
            state: SimulationObjectState.NONE,
            neo: neo,
            currentPosition: new THREE.Vector3(0, 0, 0),
            distanceToSun: 0,
            velocity: 0,
        } as EngineNEO;
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
