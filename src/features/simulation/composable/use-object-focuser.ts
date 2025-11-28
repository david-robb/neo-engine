import { useNeoRaycaster } from './use-neo-raycaster';
import { EngineNEO, SimulationObjectState } from '../types/neo-engine.types';
import { FlagUtilities } from '../utilities/flag.utilities';
import { useStateStore } from '../stores/state';
import { buildOrbitForNew } from '../../../utility/orbital-mechanics';
import { markRaw, onMounted } from 'vue';
import { useTres } from '@tresjs/core';
import { SimulationState } from '../types/state.types';
import { CAMERA_START_POS, ORBIT_RENDER_ORDER } from '../../../utility/constants';
import CameraControls from 'camera-controls';
import { Vector3 } from 'three';

export interface SelectObjectProps {
    oldVal: EngineNEO | undefined;
    newVal: EngineNEO | undefined;
}

export function useObjectFocuser(onFocusChange: (id: number | undefined) => void): {
    clearFocused: () => void;
    select: (props: SelectObjectProps) => void;
    updateTracking: () => void;
} {
    const state = useStateStore();
    const { scene, controls, camera } = useTres();

    useNeoRaycaster(select);

    let lockDistance: Vector3 | undefined = undefined;

    onMounted(() => {
        if (camera.value) {
            camera.value.layers.enable(1);
            camera.value.layers.enable(2);
        }
    });

    function select(props: SelectObjectProps): void {
        const oldSelectedObject = props.oldVal;
        const newSelectedObject = props.newVal;

        if (newSelectedObject) {
            if (oldSelectedObject) {
                clearFocused();
            }

            onFocusChange(newSelectedObject.id);

            newSelectedObject.state = FlagUtilities.setFlag(newSelectedObject.state, SimulationObjectState.SELECTED);
            renderOrbit(newSelectedObject);

            state.setFlags(SimulationState.SELECTION_CHANGE);
        }
    }

    function renderOrbit(neo: EngineNEO): void {
        const orbitMesh = buildOrbitForNew(neo.neo.orbitalData);
        orbitMesh.renderOrder = ORBIT_RENDER_ORDER;

        scene.value.add(orbitMesh);

        state.$patch((state) => {
            state.meshes.orbitsMesh = markRaw(orbitMesh);
        });
    }

    function clearFocused(): void {
        onFocusChange(undefined);

        const focusedObject = state.focusedObject;
        if (focusedObject) {
            focusedObject.state = FlagUtilities.clearFlag(focusedObject.state, SimulationObjectState.SELECTED);
        }

        scene.value.remove(state.meshes.orbitsMesh!);

        state.clearFocus();

        state.clearFlag(SimulationState.CLEAR_FOCUSED);

        const cameraControls = controls.value as CameraControls;

        cameraControls.setLookAt(CAMERA_START_POS.x, CAMERA_START_POS.y, CAMERA_START_POS.z, 0, 0, 0, true);
    }

    function updateTracking(): void {
        const focusedObject = state.focusedObject;

        if (focusedObject && controls.value && camera.value) {
            const cameraControls = controls.value as CameraControls;

            if (state.hasFlag(SimulationState.FOLLOW_OBJECT)) {
                const cameraPosition = new Vector3();
                camera.value.getWorldPosition(cameraPosition);

                if (!lockDistance) {
                    lockDistance = cameraPosition.clone().sub(focusedObject.currentPosition.clone());
                }

                cameraControls.setLookAt(
                    focusedObject.currentPosition.x + lockDistance.x,
                    focusedObject.currentPosition.y + lockDistance.y,
                    focusedObject.currentPosition.z + lockDistance.z,
                    focusedObject.currentPosition.x,
                    focusedObject.currentPosition.y,
                    focusedObject.currentPosition.z
                );
            }

            if (state.hasFlag(SimulationState.SELECTION_CHANGE)) {
                cameraControls.setLookAt(
                    focusedObject.currentPosition.x * 1.2,
                    focusedObject.currentPosition.y * 1.2,
                    focusedObject.currentPosition.z * 1.2,
                    focusedObject.currentPosition.x,
                    focusedObject.currentPosition.y,
                    focusedObject.currentPosition.z,
                    true
                );

                state.clearFlag(SimulationState.SELECTION_CHANGE);
            }

            if (!state.hasFlag(SimulationState.FOLLOW_OBJECT) && lockDistance) {
                cameraControls.setLookAt(
                    focusedObject.currentPosition.x + lockDistance.x,
                    focusedObject.currentPosition.y + lockDistance.y,
                    focusedObject.currentPosition.z + lockDistance.z,
                    focusedObject.currentPosition.x,
                    focusedObject.currentPosition.y,
                    focusedObject.currentPosition.z
                );

                lockDistance = undefined;
            }
        }
    }

    return {
        clearFocused,
        select,
        updateTracking,
    };
}
