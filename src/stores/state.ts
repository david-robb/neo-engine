import { defineStore } from 'pinia';
import { EngineNEO, EngineNeoStateFlags } from '../components/simulation/types/neo-engine.types';
import { GridHelper, InstancedMesh, LineSegments, Vector3 } from 'three';
import { FlagUtilities } from '../components/simulation/utilities/flag.utilities';

export const SimulationStateFlags = {
    RAY_CASTING_ENABLED: 1,
    GRID_ENABLED: 2,
    RENDER_ORBITS_ENABLED: 4,
    TIME_RATE_NORMAL: 8
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
    currentDateTime: Date;
    multiplier: number;
}

export const useStateStore = defineStore('state', {
    state: (): State => ({
        neos: [],
        meshes: {
            gridMesh: undefined,
            neoInstancedMesh: undefined,
            orbitsMesh: undefined,
        },
        target: new Vector3(0, 0, 0),
        flags: SimulationStateFlags.RAY_CASTING_ENABLED | SimulationStateFlags.TIME_RATE_NORMAL,
        time: {
            currentDateTime: new Date(),
            epoch: new Date(),
            multiplier: 1,
        },
    }),
    getters: {
        stateFlags: (state: State) => state.flags,
        timeMultiplier: (state: State) => state.time.multiplier,
        cameraTarget: (state: State) => state.target,
        focusedObject: (state: State) => state.neos.find(neo => FlagUtilities.hasFlag(neo.flags, EngineNeoStateFlags.SELECTED)),
        focusedObjectIndex: (state: State) => state.neos.findIndex(neo => FlagUtilities.hasFlag(neo.flags, EngineNeoStateFlags.SELECTED))
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
        setFlags(flag: number): void {
            this.flags = FlagUtilities.setFlag(this.flags, flag);
        },
        clearFlag(flag: number): void {
            this.flags = FlagUtilities.clearFlag(this.flags, flag);
        },
        setEpoch(epoch: Date): void {
            this.time.epoch = epoch;
        },
        setTarget(vec: Vector3):void {
            this.target = vec;
        }
    },
});
