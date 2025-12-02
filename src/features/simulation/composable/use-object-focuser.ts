import { useNeoRaycaster } from './use-neo-raycaster';
import { EngineSecondaryBody } from '../types/neo-engine.types';
import { useStateStore } from '../stores/state';
import { markRaw, onMounted } from 'vue';
import { useTres } from '@tresjs/core';
import { CAMERA_START_POS } from '../../../utility/constants';
import CameraControls from 'camera-controls';
import { Color, Vector3 } from 'three';
import { buildOrbitMeshLine } from '../services/orbit-mesh.service';
import { SimulationState } from '../stores/state.types';

export interface SelectObjectProps {
    oldVal: EngineSecondaryBody | undefined;
    newVal: EngineSecondaryBody | undefined;
}

export function useObjectFocuser(onFocusChange: (id: number | undefined) => void): {
    clearFocused: () => void;
    select: (props: SelectObjectProps) => void;
    updateTracking: () => void;
} {
    const state = useStateStore();
    const { scene, controls, camera, renderer } = useTres();

    useNeoRaycaster(select, onMouseMove);

    let cameraLockVector: Vector3 | undefined = undefined;

    onMounted(() => {
        if (camera.value) {
            camera.value.layers.enable(1);
            camera.value.layers.enable(2);
        }
    });

    function onMouseMove(newPosition: Vector3): void {
        state.$patch({
            mousePosition: newPosition,
        });
    }

    function select(props: SelectObjectProps): void {
        const oldSelectedObject = props.oldVal;
        const newSelectedObject = props.newVal;

        if (newSelectedObject) {
            if (oldSelectedObject) {
                clearFocused();
            }

            state.$patch({
                focused: newSelectedObject,
            });

            onFocusChange(newSelectedObject.id);
            renderOrbit(newSelectedObject);
            state.setFlags(SimulationState.SELECTION_CHANGE);
        }
    }

    function renderOrbit(neo: EngineSecondaryBody): void {
        const orbitMesh = buildOrbitMeshLine(neo.orbit, new Color(0xa9a9a9), '', 100000);

        scene.value.add(orbitMesh);

        state.$patch((state: any) => {
            state.meshes.orbitsMesh = markRaw(orbitMesh);
        });
    }

    function clearFocused(): void {
        onFocusChange(undefined);

        scene.value.remove(state.meshes.orbitsMesh!);

        state.clearFocus();

        const cameraControls = controls.value as CameraControls;
        cameraControls.setLookAt(CAMERA_START_POS.x, CAMERA_START_POS.y, CAMERA_START_POS.z, 0, 0, 0, true);
    }

    function updateTracking(): void {
        const focusedObject = state.focusedObject;

        if (!(focusedObject && controls.value && camera.value)) {
            return;
        }

        const cameraControls = controls.value as CameraControls;
        if (state.hasFlag(SimulationState.FOLLOW_OBJECT)) {
            const cameraPosition = new Vector3();
            camera.value.getWorldPosition(cameraPosition);

            if (!cameraLockVector) {
                cameraControls.disconnect();

                cameraLockVector = cameraPosition.clone().sub(focusedObject.currentPosition.clone());
            }

            updateCameraLockPosition();
        }

        if (state.hasFlag(SimulationState.SELECTION_CHANGE)) {
            cameraControls.setLookAt(
                CAMERA_START_POS.x,
                CAMERA_START_POS.y,
                CAMERA_START_POS.z,
                focusedObject.currentPosition.x,
                focusedObject.currentPosition.y,
                focusedObject.currentPosition.z,
                true
            );

            state.clearFlag(SimulationState.SELECTION_CHANGE);
        }

        // Perform final camera lock update after following
        if (!state.hasFlag(SimulationState.FOLLOW_OBJECT) && cameraLockVector) {
            updateCameraLockPosition();

            cameraLockVector = undefined;

            cameraControls.connect(renderer.domElement);
        }
    }

    const updateCameraLockPosition = (): void => {
        const cameraControls = controls.value as CameraControls;
        const focusedObject = state.focusedObject;

        if (!cameraControls || !focusedObject || !cameraLockVector) {
            return;
        }

        cameraControls.setLookAt(
            focusedObject.currentPosition.x + cameraLockVector.x,
            focusedObject.currentPosition.y + cameraLockVector.y,
            focusedObject.currentPosition.z + cameraLockVector.z,
            focusedObject.currentPosition.x,
            focusedObject.currentPosition.y,
            focusedObject.currentPosition.z
        );
    };

    return {
        clearFocused,
        select,
        updateTracking,
    };
}
