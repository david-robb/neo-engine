import * as THREE from 'three';
import { NEO } from './neo';

export interface EngineNEO {
    state: EngineNEOState;
    neo: NEO;
    mesh: EngineNEOMesh;
}

export interface EngineNEOMesh {
    orbit: THREE.LineSegments;
    sphere: THREE.Mesh;
}

export interface EngineNEOState {
    active: boolean;
    isHovered: boolean;
    isSelected: boolean;
    currentPosition: THREE.Vector3;
}
