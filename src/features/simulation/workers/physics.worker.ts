import { EnginePrimaryBody, EngineSecondaryBody } from '../types/neo-engine.types';
import { calculateDetailedState, calculatePosition } from '../../../utility/orbital-mechanics';
import { Matrix4, Vector3 } from 'three';
import {
    AU_TO_KM_1,
    TRACKED_OBJECT_SCALE,
    ZOOMED_IN_SECONDARY_MAX_SCALE,
    ZOOMED_IN_SECONDARY_SCALE,
    ZOOMED_OUT_SECONDARY_MAX_SCALE,
    ZOOMED_OUT_SECONDARY_SCALE,
} from '../../../utility/constants';

export enum PhysicsWorkerType {
    INIT = 'INIT',
    TICK = 'TICK',
    TICK_COMPLETE = 'TICK_COMPLETE',
    SELECTION_CHANGE = 'SELECTION_CHANGE',
}

export interface PhysicsWorkerInitPayload {
    positionsBuffer: SharedArrayBuffer;
    focusedStateBuffer: SharedArrayBuffer;
    earthDistanceBuffer: SharedArrayBuffer;
    corePositionBuffer: SharedArrayBuffer;
    cameraMatrixBuffer: SharedArrayBuffer;
    objects: string;
    coreObjects: string;
}

export interface PhysicsWorkerTickPayload {
    t: number;
    mousePosition: number[];
    cameraPosition: number[];
}

export interface PhysicsWorkerSelectionChangePayload {
    id: number | undefined;
}

let positions: Float32Array;
let focusedStateBuffer: Float32Array;
let earthDistanceBuffer: Float32Array;
let corePositionBuffer: Float32Array;
let cameraMatrixBuffer: Float32Array;

let objects: EngineSecondaryBody[];
let coreObjects: EnginePrimaryBody[];

let selectedId: number | undefined = undefined;

let mousePosition: Vector3 = new Vector3(0, 0, 0);
let earthPosition: Vector3 = new Vector3(0, 0, 0);
let cameraPosition: Vector3 = new Vector3(0, 0, 0);

let cameraInverseWorld: Matrix4 = new Matrix4();
let cameraProjection: Matrix4 = new Matrix4();

self.onmessage = (e: MessageEvent): void => {
    const type: PhysicsWorkerType = e.data.type;

    if (type === PhysicsWorkerType.INIT) {
        const payload: PhysicsWorkerInitPayload = e.data.payload;

        positions = new Float32Array(payload.positionsBuffer);
        focusedStateBuffer = new Float32Array(payload.focusedStateBuffer);
        earthDistanceBuffer = new Float32Array(payload.earthDistanceBuffer);
        corePositionBuffer = new Float32Array(payload.corePositionBuffer);
        cameraMatrixBuffer = new Float32Array(payload.cameraMatrixBuffer);

        cameraInverseWorld = new Matrix4().fromArray(cameraMatrixBuffer);
        cameraProjection = new Matrix4().fromArray(cameraMatrixBuffer, 16);

        objects = JSON.parse(payload.objects) as EngineSecondaryBody[];
        coreObjects = JSON.parse(payload.coreObjects) as EnginePrimaryBody[];
    }

    if (type === PhysicsWorkerType.SELECTION_CHANGE) {
        const payload: PhysicsWorkerSelectionChangePayload = e.data.payload;

        selectedId = payload.id;
    }

    if (type === PhysicsWorkerType.TICK) {
        const payload: PhysicsWorkerTickPayload = e.data.payload;

        const time = payload.t;

        cameraPosition.setX(payload.cameraPosition[0]);
        cameraPosition.setY(payload.cameraPosition[1]);
        cameraPosition.setZ(payload.cameraPosition[2]);

        mousePosition.setX(payload.mousePosition[0]);
        mousePosition.setY(payload.mousePosition[1]);
        mousePosition.setZ(payload.mousePosition[2]);

        updatePrimaryObjects(time);
        updateSecondaryObjects(time);

        self.postMessage({ type: PhysicsWorkerType.TICK_COMPLETE });
    }
};

function updatePrimaryObjects(t: number): void {
    coreObjects.forEach((object, index) => {
        if (object.orbitData) {
            const currentPosition = calculatePosition(object.orbitData, object.epochOffset + t);

            const offset = index * 3;

            corePositionBuffer[offset] = currentPosition.x;
            corePositionBuffer[offset + 1] = currentPosition.y;
            corePositionBuffer[offset + 2] = currentPosition.z;

            if (object.name === 'Earth') {
                earthPosition = currentPosition;
            }
        }
    });
}

function updateSecondaryObjects(t: number): void {
    cameraInverseWorld.fromArray(cameraMatrixBuffer);
    cameraProjection.fromArray(cameraMatrixBuffer, 16);

    objects.forEach((neo: EngineSecondaryBody, index: number): void => {
        const currentPosition: Vector3 = calculatePosition(neo.orbit, neo.epochOffset + t);
        earthDistanceBuffer[index] = currentPosition.distanceTo(earthPosition);

        const radiusScale: number = calculateRadiusScale(currentPosition);

        const offset: number = index * 16;
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

            positions[offset] = TRACKED_OBJECT_SCALE;
            positions[offset + 5] = TRACKED_OBJECT_SCALE;
            positions[offset + 10] = TRACKED_OBJECT_SCALE;
        }
    });
}

function calculateRadiusScale(currentPosition: Vector3): number {
    const screenCoordinates: Vector3 = currentPosition.clone().applyMatrix4(cameraInverseWorld).applyMatrix4(cameraProjection);
    const distanceToMouse: number = screenCoordinates.distanceTo(mousePosition);
    const distanceToCamera: number = currentPosition.distanceTo(cameraPosition) / AU_TO_KM_1;
    if (distanceToCamera > 1) {
        return Math.min(ZOOMED_OUT_SECONDARY_SCALE * distanceToCamera, ZOOMED_OUT_SECONDARY_MAX_SCALE);
    }

    return Math.min(ZOOMED_IN_SECONDARY_SCALE * (1 / (distanceToMouse + 0.0001)), ZOOMED_IN_SECONDARY_MAX_SCALE);
}
