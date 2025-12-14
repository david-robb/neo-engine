import { EnginePrimaryBody, EngineSecondaryBody } from '../types/simulation.types';
import { Matrix4, Vector3 } from 'three';
import { AU_TO_KM_1 } from '../../../utility/constants';
import { calculatePosition } from '../services/position.service';
import { calculateVelocity } from '../services/velocity.service';

export enum PhysicsWorkerType {
    INIT = 'INIT',
    TICK = 'TICK',
    TICK_COMPLETE = 'TICK_COMPLETE',
}

export interface PhysicsWorkerInitPayload {
    earthDistanceBuffer: SharedArrayBuffer;
    velocityBuffer: SharedArrayBuffer;
    primaryBodyPositionBuffer: SharedArrayBuffer;
    secondaryBodyPositionBuffer: SharedArrayBuffer;
    cameraMatrixBuffer: SharedArrayBuffer;
    primaryBodies: string;
    secondaryBodies: string;
}

export interface PhysicsWorkerTickPayload {
    t: number;
    mousePosition: number[];
    cameraPosition: number[];
}

let secondaryPositionArray: Float32Array;
let earthDistanceBuffer: Float32Array;
let velocityBuffer: Float32Array;
let primaryPositionArray: Float32Array;
let cameraMatrixBuffer: Float32Array;

let secondaryBodies: EngineSecondaryBody[];
let primaryBodies: EnginePrimaryBody[];

let mousePosition: Vector3 = new Vector3(0, 0, 0);
let earthPosition: Vector3 = new Vector3(0, 0, 0);
let cameraPosition: Vector3 = new Vector3(0, 0, 0);

let cameraInverseWorld: Matrix4 = new Matrix4();
let cameraProjection: Matrix4 = new Matrix4();

let tempPositionVector: Vector3 = new Vector3(0, 0, 0);

self.onmessage = (e: MessageEvent): void => {
    const type: PhysicsWorkerType = e.data.type;

    if (type === PhysicsWorkerType.INIT) {
        const payload: PhysicsWorkerInitPayload = e.data.payload;

        primaryPositionArray = new Float32Array(payload.primaryBodyPositionBuffer);
        secondaryPositionArray = new Float32Array(payload.secondaryBodyPositionBuffer);
        earthDistanceBuffer = new Float32Array(payload.earthDistanceBuffer);
        cameraMatrixBuffer = new Float32Array(payload.cameraMatrixBuffer);
        velocityBuffer = new Float32Array(payload.velocityBuffer);

        cameraInverseWorld = new Matrix4().fromArray(cameraMatrixBuffer);
        cameraProjection = new Matrix4().fromArray(cameraMatrixBuffer, 16);

        secondaryBodies = JSON.parse(payload.secondaryBodies) as EngineSecondaryBody[];
        primaryBodies = JSON.parse(payload.primaryBodies) as EnginePrimaryBody[];
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
    for (let i = 0; i < primaryBodies.length; i++) {
        const object = primaryBodies[i];

        if (object.orbitData) {
            calculatePosition(object.name, object.orbitData, object.epochOffset + t, tempPositionVector);

            const offset = i * 3;

            primaryPositionArray[offset] = tempPositionVector.x;
            primaryPositionArray[offset + 1] = tempPositionVector.y;
            primaryPositionArray[offset + 2] = tempPositionVector.z;

            if (object.name === 'Earth') {
                earthPosition.copy(tempPositionVector);
            }
        }
    }
}

function updateSecondaryObjects(t: number): void {
    cameraInverseWorld.fromArray(cameraMatrixBuffer);
    cameraProjection.fromArray(cameraMatrixBuffer, 16);

    for (let i = 0; i < secondaryBodies.length; i++) {
        const body: EngineSecondaryBody = secondaryBodies[i];

        calculatePosition(body.name, body.orbit, body.epochOffset + t, tempPositionVector);

        earthDistanceBuffer[i] = tempPositionVector.distanceTo(earthPosition);
        velocityBuffer[i] = calculateVelocity(body, tempPositionVector);

        const radiusScale: number = calculateRadiusScale(tempPositionVector);

        const offset: number = i * 16;
        secondaryPositionArray[offset] = radiusScale;
        secondaryPositionArray[offset + 2] = 0;
        secondaryPositionArray[offset + 3] = 0;
        secondaryPositionArray[offset + 4] = 0;
        secondaryPositionArray[offset + 5] = radiusScale;
        secondaryPositionArray[offset + 6] = 0;
        secondaryPositionArray[offset + 7] = 0;
        secondaryPositionArray[offset + 8] = 0;
        secondaryPositionArray[offset + 9] = 0;
        secondaryPositionArray[offset + 10] = radiusScale;
        secondaryPositionArray[offset + 11] = 0;
        secondaryPositionArray[offset + 12] = tempPositionVector.x;
        secondaryPositionArray[offset + 13] = tempPositionVector.y;
        secondaryPositionArray[offset + 14] = tempPositionVector.z;
        secondaryPositionArray[offset + 15] = 1;
    }
}

function calculateRadiusScale(currentPosition: Vector3): number {
    const screenCoordinates: Vector3 = currentPosition.clone().applyMatrix4(cameraInverseWorld).applyMatrix4(cameraProjection);
    const distanceToMouse: number = screenCoordinates.distanceTo(mousePosition);
    const distanceToCamera: number = currentPosition.distanceTo(cameraPosition) / AU_TO_KM_1;

    let scaleFactor = 0;

    if (distanceToCamera > 1) {
        scaleFactor += 2000000 / Math.max(distanceToCamera, 8);
    } else {
        scaleFactor += 100000 + 100000 * distanceToCamera;
    }

    if (distanceToCamera < 0.5 && distanceToMouse < 0.3) {
        scaleFactor += 5000 / Math.max(distanceToMouse, 0.05);
    }

    return scaleFactor;
}
