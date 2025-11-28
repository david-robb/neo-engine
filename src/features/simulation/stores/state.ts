import { defineStore } from 'pinia';
import { Vector3 } from 'three';
import { SimulationObjectState } from '../types/neo-engine.types';
import { FlagUtilities } from '../utilities/flag.utilities';
import { SimulationState, State } from '../types/state.types';

export const useStateStore = defineStore('state', {
    state: (): State => initialState(),
    getters: {
        stateFlags: (state: State) => state.state,
        timeMultiplier: (state: State) => state.time.multiplier,
        focusedObject: (state: State) => state.neos.find((neo) => FlagUtilities.hasFlag(neo.state, SimulationObjectState.SELECTED)),
        focusedObjectIndex: (state: State) =>
            state.neos.findIndex((neo) => FlagUtilities.hasFlag(neo.state, SimulationObjectState.SELECTED)),
        simulationEpoch: (state: State) => state.time.epoch,
        isReady: (state: State) => FlagUtilities.hasFlag(state.state, SimulationState.SIMULATION_READY),
        isLoading: (state: State) => FlagUtilities.hasFlag(state.state, SimulationState.SIMULATION_LOADING),
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
        logFlags(): void {
            const hasNone = (this.state & SimulationState.NONE) > 0;
            const hasLoading = (this.state & SimulationState.SIMULATION_LOADING) > 0;
            const hasReady = (this.state & SimulationState.SIMULATION_READY) > 0;
            const hasGridEnabled = (this.state & SimulationState.GRID_ENABLED) > 0;
            const hasTransitioning = (this.state & SimulationState.SELECTION_CHANGE) > 0;
            const hasClearFocused = (this.state & SimulationState.CLEAR_FOCUSED) > 0;
            const selectNext = (this.state & SimulationState.SELECT_NEXT) > 0;
            const selectPrev = (this.state & SimulationState.SELECT_PREVIOUS) > 0;
            const followObj = (this.state & SimulationState.FOLLOW_OBJECT) > 0;

            console.log('----------------------------------');
            if (hasNone) {
                console.log('NONE');
            }

            if (hasLoading) {
                console.log('SIMULATION_LOADING');
            }

            if (hasReady) {
                console.log('SIMULATION_READY');
            }

            if (hasGridEnabled) {
                console.log('GRID_ENABLED');
            }

            if (hasTransitioning) {
                console.log('SELECTION_CHANGE');
            }

            if (hasClearFocused) {
                console.log('CLEAR_FOCUSED');
            }
            if (selectNext) {
                console.log('SELECT_NEXT');
            }
            if (selectPrev) {
                console.log('SELECT_PREVIOUS');
            }
            if (followObj) {
                console.log('FOLLOW_OBJECT');
            }
            console.log('----------------------------------');
        },
        clearFocus(): void {
            const mesh = this.meshes.orbitsMesh;
            if (!mesh) {
                return;
            }

            mesh.geometry.dispose();
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
        state: SimulationState.GRID_ENABLED,
        time: {
            epoch: new Date(),
            simulationClock: undefined,
            multiplier: 1,
        },
    };
};
