import { EngineNEO } from './neo-engine.types';
import { GridHelper, InstancedMesh } from 'three';

export enum SimulationMode {
    ALL,
    ONLY_HAZARDOUS,
}

export interface SimulationStartState {
    objects: EngineNEO[];
    objectsMesh: InstancedMesh;
    gridMesh: GridHelper;

}