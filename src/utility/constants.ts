import { Vector3 } from 'three';
import { SimulationMode } from '../components/simulation/types/simulation.types';

export const SCALE_FACTOR = 1000;
export const ORBIT_SEGMENT_COUNT = 5000;

export const CAMERA_START_POS = new Vector3(160847, 141481, 700352);

export const START_TIME = new Date();

export const SIMULATION_MODE = SimulationMode.ALL;
export const SIMULATION_TICKS_PER_SECOND = 60;