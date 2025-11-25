import { NEO } from '../types/neo.types';
import { fetchAllNeos, fetchHazardousNeos } from '../services/database-api.service';
import { SimulationMode, SimulationStartState } from '../types/simulation.types';
import * as THREE from 'three';
import { EngineNEO } from '../types/neo-engine.types';
import { synchronizeEpochs } from '../services/epoch-synchronizer.service';
import { updatePositions } from '../services/position-updater.service';
import { SCALE_FACTOR } from '../../../utility/constants';
import { DynamicDrawUsage, GridHelper } from 'three';

export const init = async (mode: SimulationMode): Promise<SimulationStartState> => {
    const databaseNeos = await fetchDatabaseRecords(mode);

    console.log(`${databaseNeos.length} Objects Loaded!`)

    synchronizeEpochs(databaseNeos, new Date());

    const engineObjects: EngineNEO[] = toEngineObjects(databaseNeos);

    const instancedMesh = buildInstancedSpheres(engineObjects.length);

    instancedMesh.instanceMatrix.array = updatePositions(engineObjects, 0);
    instancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);

    instancedMesh.instanceMatrix.needsUpdate = true;

    instancedMesh.computeBoundingSphere();
    instancedMesh.computeBoundingBox();

    const grid: GridHelper = buildGrid();

    return {
        gridMesh: grid,
        objects: engineObjects,
        objectsMesh: instancedMesh
    }
}

const fetchDatabaseRecords = async (mode: SimulationMode): Promise<NEO[]> => {
    switch (mode) {
        case SimulationMode.ONLY_HAZARDOUS:
            return fetchHazardousNeos();
        case SimulationMode.ALL:
            return fetchAllNeos();
        default: return new Promise(() => []);
    }
}

const buildInstancedSpheres = (amount: number): THREE.InstancedMesh => {
    const geometry = new THREE.SphereGeometry(300, 10, 10); // (500 * SCALE_FACTOR) KM
    const material = new THREE.MeshBasicMaterial({ color: 0x808080 });

    const mesh = new THREE.InstancedMesh(geometry, material, amount);
    mesh.layers.set(2);

    return mesh;
}

const toEngineObjects = (neos: NEO[]): EngineNEO[] => {
    return neos.map((neo, index) => {
        return {
            id: neo.id,
            mesh: {
                instanceIndex: index,
            },
            flags: 0,
            neo: neo,
            state: {
                currentPosition: new THREE.Vector3(0, 0, 0),
            },
        } as EngineNEO;
    });
}

const buildGrid = (): THREE.GridHelper => {
    const GRID_TOTAL_SIZE_KM = 1000000000;
    const GRID_SECTION_SIZE_KM = 100000000;

    const size = GRID_TOTAL_SIZE_KM / SCALE_FACTOR;
    const divisions = size / (GRID_SECTION_SIZE_KM / SCALE_FACTOR);
    const colorCenterLine = 0xff0000;
    const colorGrid = 0x888888;
    const gridHelper = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.2;

    return gridHelper;
}