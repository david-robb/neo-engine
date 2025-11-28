import { EngineNEO } from '../types/neo-engine.types';
import { calculateDetailedState, calculateScaledPosition } from '../../../utility/orbital-mechanics';
import { Vector3 } from 'three';

export enum PhysicsWorkerType {
    INIT = 'INIT',
    TICK = 'TICK',
    TICK_COMPLETE = 'TICK_COMPLETE',
    SELECTION_CHANGE = 'SELECTION_CHANGE',
}

export interface PhysicsWorkerInitPayload {
    positionsBuffer: SharedArrayBuffer;
    focusedStateBuffer: SharedArrayBuffer;
    objects: string;
}

export interface PhysicsWorkerTickPayload {
    t: number;
}

export interface PhysicsWorkerSelectionChangePayload {
    id: number | undefined;
}

let positions: Float32Array;
let focusedStateBuffer: Float32Array;
let objects: EngineNEO[];
let selectedId: number | undefined = undefined;

self.onmessage = (e: MessageEvent): void => {
    const type: PhysicsWorkerType = e.data.type;

    if (type === PhysicsWorkerType.INIT) {
        const payload: PhysicsWorkerInitPayload = e.data.payload;

        positions = new Float32Array(payload.positionsBuffer);
        focusedStateBuffer = new Float32Array(payload.focusedStateBuffer);

        objects = JSON.parse(payload.objects) as EngineNEO[];
    }

    if (type === PhysicsWorkerType.SELECTION_CHANGE) {
        const payload: PhysicsWorkerSelectionChangePayload = e.data.payload;

        selectedId = payload.id;
    }

    if (type === PhysicsWorkerType.TICK) {
        const payload: PhysicsWorkerTickPayload = e.data.payload;

        updatePositions(payload.t);

        self.postMessage({ type: PhysicsWorkerType.TICK_COMPLETE });
    }
};

function updatePositions(t: number = 0): void {
    objects.forEach((neo, index) => {
        const currentPosition = calculateScaledPosition(neo.neo.orbitalData, neo.neo.epochOffset + t);

        const offset = index * 16;
        const radiusScale = Math.min(((neo.neo.diameter.km.min + neo.neo.diameter.km.max) / 4) * 5000000, 695700);

        positions[offset] = radiusScale;
        positions[offset + 2] = 0;
        positions[offset + 3] = 0;
        positions[offset + 4] = 0;
        positions[offset + 5] = radiusScale;
        positions[offset + 6] = 0;
        positions[offset + 7] = 0;
        positions[offset + 8] = 0;
        positions[offset + 9] = 0;
        positions[offset + 10] = radiusScale;
        positions[offset + 11] = 0;
        positions[offset + 12] = currentPosition.x;
        positions[offset + 13] = currentPosition.y;
        positions[offset + 14] = currentPosition.z;
        positions[offset + 15] = 1;

        if (neo.id === selectedId) {
            const selectedPosition = new Vector3();
            selectedPosition.copy(currentPosition);

            const detailedState = calculateDetailedState(neo, selectedPosition);

            focusedStateBuffer[0] = detailedState.distanceToSun;
            focusedStateBuffer[1] = detailedState.velocity;
        }
    });
}
