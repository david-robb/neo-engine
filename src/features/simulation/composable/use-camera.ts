import { onMounted } from 'vue';
import { useTres } from '@tresjs/core';
import { Vector3 } from 'three';
import { useStateStore } from '../stores/state';
import CameraControls from 'camera-controls';

export function useCamera(): {
    updateCamera: (delta: number) => void;
    setTarget: (location: Vector3, animate?: boolean) => void;
} {
    const state = useStateStore();
    const { camera, controls } = useTres();

    onMounted(() => {
        if (camera.value) {
            camera.value.layers.enable(2);
        }
    });

    function updateCamera(delta: number): void {
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
        cameraControls.setTarget(location.x, location.y, location.z, animate);
    }

    return {
        updateCamera,
        setTarget,
    };
}
