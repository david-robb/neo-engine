import { defineStore } from 'pinia';
import { NeoEngineBody } from '../models/body';
import { Mesh, Object3D } from 'three';
import { addSecond, format } from '@formkit/tempo';
import { START_TIME } from '../utility/constants';

export interface State {
    bodies: NeoEngineBody[];
    renderOrbits: boolean;
    hoveredObject: NeoEngineBody | undefined;

    timeState: EngineTime;
    focusedState: FocusedState | undefined;
}

export interface FocusedState {
    velocity: number;
    distanceToSun: number;
    object: NeoEngineBody;
}

export interface EngineTime {
    currentDateTime: Date;
    multiplier: number;
}

const isObjectFocused = (state: State, obj: Object3D): boolean => {
    return state.focusedState?.object.properties.name === obj.name;
};

const unfocus = (state: State): void => {
    if (!state.focusedState) {
        return;
    }

    state.focusedState.object.state.isSelected = false;
    state.focusedState = undefined;
};

const focus = (state: State, obj: Object3D): void => {
    const simObject = state.bodies.find((body) => body.properties.name === obj.name);
    if (!simObject) {
        console.error('Could not find object to focus');

        return;
    }

    simObject.state.isSelected = true;
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
        hoveredObject: undefined,
        timeState: {
            currentDateTime: new Date(),
            multiplier: 1,
        },
        focusedState: undefined,
    }),
    getters: {
        getActiveBodies: (state: State) => state.bodies.filter((body) => body.state.active),
        getActiveTotal: (state: State) => state.bodies.filter((body) => body.state.active).length,
        getTotal: (state: State) => state.bodies.length,
        getTimeMultiplier: (state: State) => state.timeState.multiplier,
        objectSelected: (state: State) => !!state.focusedState,
    },
    actions: {
        updateSliderInactive(index: number): void {
            this.bodies.slice(0, index).forEach((body: NeoEngineBody) => {
                body.state.active = true;
            });

            this.bodies.slice(index, this.bodies.length).forEach((body: NeoEngineBody) => {
                body.state.active = false;
            });
        },
        updateHoveredObject(hovered: Object3D | null): void {
            if (!hovered) {
                if (this.hoveredObject) {
                    this.hoveredObject.state.isHovered = false;
                }

                this.hoveredObject = undefined;

                return;
            }

            this.hoveredObject = this.bodies.find((body) => body.properties.name === (hovered as Mesh).name);

            if (this.hoveredObject) {
                this.hoveredObject.state.isHovered = true;
            }
        },
        clearHoveredObject(): void {
            if (!this.hoveredObject) {
                return;
            }

            this.hoveredObject.state.isHovered = false;
            this.hoveredObject = undefined;
        },
        updateTime(t: number): void {
            this.timeState.currentDateTime = addSecond(START_TIME, t);
        },
        updateFocusedObjectState(props: { velocity: number; distanceToSun: number }): void {
            if (!this.focusedState) {
                console.error('Attempt to update focused state but no object is focused!');

                return;
            }

            this.focusedState.velocity = props.velocity;
            this.focusedState.distanceToSun = props.distanceToSun;
        },
        focusObject(obj: Object3D | null): void {
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
        updateTimeMultiplier(multiplier: number): void {
            this.timeState.multiplier = multiplier;
        },
    },
});
