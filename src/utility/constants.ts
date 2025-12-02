import { Vector3 } from 'three';

export const ORBIT_SEGMENT_COUNT: number = 20000;
export const CAMERA_START_POS: Vector3 = new Vector3(3000000000, 3000000000, 3000000000);
export const SIMULATION_TICKS_PER_SECOND: number = 60;

export const AU_TO_KM_1: number = 149597870.691;
export const ALERT_DISTANCE: number = AU_TO_KM_1 / 100;

export const SECONDARY_RADIUS_SCALE_FAR = 250000;
export const SECONDARY_RADIUS_SCALE_NEAR_MAX = 500000;
