import { EnginePrimaryBody, EngineSecondaryBody } from './neo-engine.types';
import { GridHelper, InstancedMesh, Mesh } from 'three';
import { MeshLine } from '@lume/three-meshline';

export enum SimulationMode {
    ALL,
    ONLY_HAZARDOUS,
    CUSTOM_AMOUNT,
}

export interface SimulationStartState {
    objects: EngineSecondaryBody[];
    planets: EnginePrimaryBody[];
    objectsMesh: InstancedMesh;
    gridMesh: GridHelper;
    planetMeshes: Mesh[];
    planetOrbitMesh: MeshLine[];
}
