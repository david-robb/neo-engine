import { defineStore } from 'pinia';
import { GridHelper, InstancedMesh, LineSegments, Vector3 } from 'three';
import { EngineNEO, EngineNeoStateFlags } from '../types/neo-engine.types';
import { FlagUtilities } from '../utilities/flag.utilities';

export const SimulationStateFlags = {
    GRID_ENABLED: 1,
    TIME_RATE_NORMAL: 2,
    IS_FLYING: 4,
    SIMULATION_LOADING: 8,
    CLEAR_FOCUSED: 16,
};

export interface State {
    neos: EngineNEO[];
    meshes: GlobalStateMeshes;
    flags: number;
    time: EngineTime;
    target: Vector3;
}

export interface GlobalStateMeshes {
    gridMesh: GridHelper | undefined;
    neoInstancedMesh: InstancedMesh | undefined;
    orbitsMesh: LineSegments | undefined;
}

export interface EngineTime {
    epoch: Date;
    simulationClock: Date | undefined;
    multiplier: number;
}

export const useStateStore = defineStore('state', {
    state: (): State => initialState(),
    getters: {
        stateFlags: (state: State) => state.flags,
        timeMultiplier: (state: State) => state.time.multiplier,
        focusedObject: (state: State) => state.neos.find((neo) => FlagUtilities.hasFlag(neo.flags, EngineNeoStateFlags.SELECTED)),
        focusedObjectIndex: (state: State) => state.neos.findIndex((neo) => FlagUtilities.hasFlag(neo.flags, EngineNeoStateFlags.SELECTED)),
        simulationEpoch: (state: State) => state.time.epoch,
    },
    actions: {
        updateTimeMultiplier(multiplier: number): void {
            if (multiplier === 1) {
                this.setFlags(SimulationStateFlags.TIME_RATE_NORMAL);
            } else {
                this.clearFlag(SimulationStateFlags.TIME_RATE_NORMAL);
            }

            this.time.multiplier = multiplier;
        },
        toggleFlag(flag: number): void {
            this.flags = FlagUtilities.toggleFlag(this.flags, flag);
        },
        hasFlag(flag: number): boolean {
            return FlagUtilities.hasFlag(this.flags, flag);
        },
        setFlags(flag: number): void {
            this.flags = FlagUtilities.setFlag(this.flags, flag);
        },
        clearFlag(flag: number): void {
            this.flags = FlagUtilities.clearFlag(this.flags, flag);
        },
        setEpoch(epoch: Date): void {
            this.time.epoch = epoch;
        },
        setTarget(vec: Vector3): void {
            this.setFlags(SimulationStateFlags.IS_FLYING);

            this.target = vec;
        },
        clearFocus(): void {
            const mesh = this.meshes.orbitsMesh;
            if (!mesh) {
                return;
            }

            mesh.geometry.dispose();

            this.setTarget(new Vector3(0, 0, 0));
        },
    },
});

const initialState = (): State => {
    return {
        neos: [],
        meshes: {
            gridMesh: undefined,
            neoInstancedMesh: undefined,
            orbitsMesh: undefined,
        },
        target: new Vector3(0, 0, 0),
        flags: SimulationStateFlags.TIME_RATE_NORMAL | SimulationStateFlags.SIMULATION_LOADING,
        time: {
            epoch: new Date(),
            simulationClock: undefined,
            multiplier: 1,
        },
    };
};
