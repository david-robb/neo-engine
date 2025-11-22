import { defineStore } from 'pinia';
import { Mesh, Object3D } from 'three';
import { addSecond } from '@formkit/tempo';
import { START_TIME } from '../utility/constants';
import { EngineNEO } from '../components/simulation/types/neo-engine';

export interface State {
    bodies: EngineNEO[];
    renderOrbits: boolean;
    renderAllNEOs: boolean;
    hoveredObject: EngineNEO | undefined;

    timeState: EngineTime;
    focusedState: FocusedState | undefined;
}

export interface FocusedState {
    velocity: number;
    distanceToSun: number;
    object: EngineNEO;
}

export interface EngineTime {
    currentDateTime: Date;
    multiplier: number;
}

const isObjectFocused = (state: State, obj: Object3D): boolean => {
    return state.focusedState?.object.neo.name === obj.name;
};

const unfocus = (state: State): void => {
    if (!state.focusedState) {
        return;
    }

    state.focusedState.object.state.active = false; // TODO: Fix bug, object selected with mouse then unselected with mouse causes object to dissapear
    state.focusedState.object.state.isSelected = false;
    state.focusedState = undefined;
};

const focus = (state: State, obj: Object3D): void => {
    const simObject = state.bodies.find((body) => body.neo.name === obj.name);
    if (!simObject) {
        console.error('Could not find object to focus');

        return;
    }

    simObject.state.isSelected = true;
    simObject.state.active = true;
    state.focusedState = {
        distanceToSun: 0,
        velocity: 0,
        object: simObject,
    };
};

export const useStateStore = defineStore('state', {
    state: (): State => ({
        bodies: [],
        renderOrbits: false,
        renderAllNEOs: false,
        hoveredObject: undefined,
        timeState: {
            currentDateTime: new Date(),
            multiplier: 1,
        },
        focusedState: undefined,
    }),
    getters: {
        activeNeos: (state: State) => state.bodies.filter((body) => body.state.active),
        totalNeoCount: (state: State) => state.bodies.length,
        timeMultiplier: (state: State) => state.timeState.multiplier,
        focusedNeo: (state: State) => !!state.focusedState,
        neoNames: (state: State) => state.bodies.map((body) => body.neo.name),
    },
    actions: {
        updateHoveredNeo(hovered: Object3D | null): void {
            if (!hovered) {
                if (this.hoveredObject) {
                    this.hoveredObject.state.isHovered = false;
                }

                this.hoveredObject = undefined;

                return;
            }

            this.hoveredObject = this.bodies.find((body) => body.neo.name === (hovered as Mesh).name);

            if (this.hoveredObject) {
                this.hoveredObject.state.isHovered = true;
            }
        },
        clearHoveredNeo(): void {
            if (!this.hoveredObject) {
                return;
            }

            this.hoveredObject.state.isHovered = false;
            this.hoveredObject = undefined;
        },
        updateTime(t: number): void {
            this.timeState.currentDateTime = addSecond(START_TIME, t);
        },
        updateFocusedNeoState(props: { velocity: number; distanceToSun: number }): void {
            if (!this.focusedState) {
                console.error('Attempt to update focused state but no object is focused!');

                return;
            }

            this.focusedState.velocity = props.velocity;
            this.focusedState.distanceToSun = props.distanceToSun;
        },
        focusNeo(obj: Object3D | null): void {
            // If the user is moving the camera
            if (!obj) {
                return;
            }

            // If the user focuses the already focused object
            if (isObjectFocused(this.$state, obj)) {
                unfocus(this.$state);

                return;
            }

            // Unfocus the current object and focus on new object
            unfocus(this.$state);
            focus(this.$state, obj);
        },
        focusNeoByName(name: string): void {
            const object = this.getNeoByName(name);
            if (!object) {
                console.error(`Failed to find ${name}!`);

                return;
            }

            if (!object.mesh.orbit) {
                console.error(`Failed to focus on ${name}, mesh does not exist!`);
            }

            this.focusNeo(object.mesh.sphere as Object3D | null);
        },
        updateTimeMultiplier(multiplier: number): void {
            this.timeState.multiplier = multiplier;
        },
        getNeoByName(name: string): EngineNEO | undefined {
            return this.bodies.find((body) => body.neo.name === name);
        },
        markAllActive(): void {
            unfocus(this.$state);
            this.clearHoveredNeo();

            this.bodies.forEach((neo) => {
                neo.state.active = true;
            });
        },
        markAllInactive(): void {
            unfocus(this.$state);
            this.clearHoveredNeo();

            this.bodies.forEach((neo) => {
                neo.state.active = false;
            });
        },
    },
});
