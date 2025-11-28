import { EngineNEO } from './neo-engine.types';
import { GridHelper, InstancedMesh, LineSegments, Vector3 } from 'three';

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
    neos: EngineNEO[];
    meshes: GlobalStateMeshes;
    state: SimulationState;
    time: EngineTime;
    target: Vector3;
}

export interface GlobalStateMeshes {
    gridMesh: GridHelper | undefined;
    neoInstancedMesh: InstancedMesh | undefined;
    orbitsMesh: LineSegments | undefined;
}

export interface EngineTime {
    epoch: Date;
    simulationClock: Date | undefined;
    multiplier: number;
}
