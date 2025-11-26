import * as THREE from 'three';
import { NEO } from './neo.types';

export const EngineNeoStateFlags = {
    SELECTED: 1,
    HOVERED: 2,
};

export interface EngineNEO {
    id: number;
    state: EngineNEOState;
    neo: NEO;
    mesh: EngineNEOMesh;
    flags: number;
}

export interface EngineNEOMesh {
    instanceIndex: number;
}

export interface EngineNEOState {
    currentPosition: THREE.Vector3; // Scaled KM
    velocity: number; // KM
    distanceToSun: number; // KM
}
