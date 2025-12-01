import { defineStore } from 'pinia';
import { FlagUtilities } from '../utilities/flag.utilities';
import { SimulationState, State } from './state.types';
import { Vector3 } from 'three';

export const useStateStore = defineStore('state', {
    state: () => initialState(),
    getters: {
        stateFlags: (state: State) => state.state,
        timeMultiplier: (state: State) => state.time.multiplier,
        focusedObject: (state: State) => state.focused,
        focusedObjectIndex: (state: State) => state.neos.findIndex((neo) => neo.id === state.focused?.id),
        simulationEpoch: (state: State) => state.time.epoch,
        isReady: (state: State) => FlagUtilities.hasFlag(state.state, SimulationState.SIMULATION_READY),
        isLoading: (state: State) => FlagUtilities.hasFlag(state.state, SimulationState.SIMULATION_LOADING),
        nearEarthObjects: (state: State) => state.objectsNearEarth,
        nearEarthObjectsSize: (state: State) => state.objectsNearEarth.length,
    },
    actions: {
        updateTimeMultiplier(multiplier: number): void {
            this.time.multiplier = multiplier;
        },
        toggleFlag(flag: SimulationState): void {
            this.state = this.state ^ flag;
        },
        hasFlag(flag: SimulationState): boolean {
            return (this.state & flag) > 0;
        },
        setFlags(flag: SimulationState): void {
            this.state = this.state | flag;
        },
        clearFlag(flag: SimulationState): void {
            this.state = this.state & ~flag;
        },
        setEpoch(epoch: Date): void {
            this.time.epoch = epoch;
        },
        clearFocus(): void {
            const mesh = this.meshes.orbitsMesh;
            if (!mesh) {
                return;
            }

            this.clearFlag(SimulationState.CLEAR_FOCUSED);
            this.focused = undefined;

            mesh.geometry.dispose();
        },
        setNearEarthObjects(objectNames: string[]): void {
            this.objectsNearEarth = objectNames;
        },
        updateSimulationClock(value: Date): void {
            this.time.simulationClock = value;
        },
    },
});

const initialState = (): any => {
    return {
        neos: [],
        meshes: {
            gridMesh: undefined,
            neoInstancedMesh: undefined,
            orbitsMesh: undefined,
            planetMeshes: undefined,
            planetOrbitMeshes: undefined,
        },
        planets: [],
        state: SimulationState.GRID_ENABLED,
        objectsNearEarth: [] as string[],
        time: {
            epoch: new Date(),
            simulationClock: undefined,
            multiplier: 1,
        },
        focused: undefined,
        mousePosition: new Vector3(0, 0, 0),
    };
};
