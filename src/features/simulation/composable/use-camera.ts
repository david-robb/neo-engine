import { onMounted, watch } from 'vue';
import { useTres } from '@tresjs/core';
import { Vector3 } from 'three';
import { useStateStore } from '../stores/state';
import CameraControls from 'camera-controls';
import { CAMERA_START_POS } from '../../../utility/constants';

export function useCamera(): {
    updateCamera: () => void;
    setTarget: (location: Vector3, animate?: boolean) => void;
} {
    const state = useStateStore();
    const { camera, controls } = useTres();

    onMounted(() => {
        if (camera.value) {
            camera.value.layers.enable(2);
        }
    });

    watch(
        () => state.cameraTarget,
        (newValue) => {
            setTarget(newValue);
        }
    );

    function updateCamera(): void {
        if (!camera.value) {
            return;
        }

        camera.value.getWorldPosition(state._cameraPosition);
    }

    function setTarget(location: Vector3, animate: boolean = true): void {
        if (!controls.value) {
            return;
        }

        const cameraControls = controls.value as CameraControls;
        cameraControls.setLookAt(CAMERA_START_POS.x, CAMERA_START_POS.y, CAMERA_START_POS.z, location.x, location.y, location.z, animate);
    }

    return {
        updateCamera,
        setTarget,
    };
}
