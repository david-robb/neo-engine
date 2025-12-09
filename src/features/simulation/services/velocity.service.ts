import { EngineSecondaryBody } from '../types/simulation.types';
import { Vector3 } from 'three';

export function calculateVelocity(body: EngineSecondaryBody, currentPosition: Vector3): number {
    return Math.sqrt(132712440018 * (2.0 / currentPosition.length() - 1.0 / body.orbit.semiMajorAxis));
}
