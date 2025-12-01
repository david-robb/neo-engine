import { GridHelper, InstancedMesh, Mesh, Vector3 } from 'three';
import { MeshLine } from '@lume/three-meshline';
import { EnginePrimaryBody, EngineSecondaryBody } from '../types/neo-engine.types';

export enum SimulationState {
    NONE = 0,
    SIMULATION_LOADING = 1 << 0,
    SIMULATION_READY = 1 << 1,
    GRID_ENABLED = 1 << 2,
    SELECTION_CHANGE = 1 << 3,
    CLEAR_FOCUSED = 1 << 4,
    SELECT_NEXT = 1 << 5,
    SELECT_PREVIOUS = 1 << 6,
    FOLLOW_OBJECT = 1 << 7,
}

export interface State {
    neos: EngineSecondaryBody[];
    meshes: GlobalStateMeshes;
    state: SimulationState;
    time: EngineTime;
    objectsNearEarth: string[];
    mousePosition: Vector3;
    planets: EnginePrimaryBody[];
    focused: EngineSecondaryBody | undefined;
}

export interface GlobalStateMeshes {
    gridMesh: GridHelper | undefined;
    neoInstancedMesh: InstancedMesh | undefined;
    orbitsMesh: MeshLine | undefined;
    planetMeshes: Mesh[] | undefined;
    planetOrbitMeshes: MeshLine[] | undefined;
}

export interface EngineTime {
    epoch: Date;
    simulationClock: Date | undefined;
    multiplier: number;
}
