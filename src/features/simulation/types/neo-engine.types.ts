import * as THREE from 'three';
import { NEO } from './neo.types';

export enum SimulationObjectState {
    NONE = 0,
    SELECTED = 1 << 0,
}

export interface EngineNEO {
    id: number;
    currentPosition: THREE.Vector3;
    velocity: number;
    distanceToSun: number;
    neo: NEO;
    meshIndex: number;
    state: SimulationObjectState;
}
