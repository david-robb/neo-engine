import { Vector3 } from 'three';

export const ORBIT_SEGMENT_COUNT: number = 20000;
export const CAMERA_START_POS: Vector3 = new Vector3(-2639508951.3169303, 1754884446.5747213, 3037224373.392841);
export const SIMULATION_TICKS_PER_SECOND: number = 60;

export const AU_TO_KM_1: number = 149597870.691;
export const ALERT_DISTANCE: number = AU_TO_KM_1 / 100;

export const ZOOMED_IN_SECONDARY_MAX_SCALE = 100000;
export const ZOOMED_IN_SECONDARY_SCALE = 30000;

export const ZOOMED_OUT_SECONDARY_SCALE = 25000;
export const ZOOMED_OUT_SECONDARY_MAX_SCALE = 500000;
