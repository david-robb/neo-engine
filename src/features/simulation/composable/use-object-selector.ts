import { EngineSecondaryBody } from '../types/simulation.types';
import { onMounted } from 'vue';
import * as THREE from 'three';
import { TresRenderer, useTres } from '@tresjs/core';
import { useSimulationStateStore } from '../stores/simulation-state';

export const getCanvasRelativePosition = (event: MouseEvent, renderer: TresRenderer): THREE.Vector2 => {
    const canvas: HTMLCanvasElement = renderer.domElement;

    if (!canvas) return new THREE.Vector2();

    const rect: DOMRect = canvas.getBoundingClientRect();

    const x: number = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y: number = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    return new THREE.Vector2(x, y);
};

export function useObjectSelector(): void {
    const state = useSimulationStateStore();
    const { camera, renderer } = useTres();
    const raycaster: THREE.Raycaster = new THREE.Raycaster();

    let mouseDownTime: number;

    let secondaryObjectMeshIndexMap: Map<number, EngineSecondaryBody> = new Map();

    function onMouseClick(event: MouseEvent): void {
        if (!camera.value || state.isSearching) {
            return;
        }

        const pickPosition = getCanvasRelativePosition(event, renderer);

        raycaster.layers.set(2);
        raycaster.setFromCamera(pickPosition, camera.value);

        const intersectedObject = findIntersectedObject();
        if (intersectedObject) {
            state.setSecondaryBodyFocus(intersectedObject.id, true);
        }
    }

    function findIntersectedObject(): EngineSecondaryBody | undefined {
        const instancedMesh = state.globalMeshes.secondaryBodiesMesh;
        const primaryBodyMeshes = state.globalMeshes.primaryBodyMeshes;
        if (!instancedMesh || !primaryBodyMeshes) {
            return undefined;
        }

        const intersectedArray = raycaster.intersectObjects([instancedMesh, ...primaryBodyMeshes]);
        const intersectedObject = intersectedArray[0];

        const intersectedSecondaryObject = !!intersectedObject?.instanceId;

        if (intersectedSecondaryObject) {
            return secondaryObjectMeshIndexMap.get(intersectedObject.instanceId!);
        }

        return undefined;
    }

    onMounted(() => {
        state.secondaryBodyMap.forEach((body) => {
            secondaryObjectMeshIndexMap.set(body.meshIndex, body);
        });

        state.simulationTime.simulationClock;

        window.addEventListener('mousedown', (event: MouseEvent) => {
            mouseDownTime = event.timeStamp;
        });

        window.addEventListener('mouseup', (event: MouseEvent) => {
            if (event.timeStamp - mouseDownTime <= 200) {
                onMouseClick(event);
            }
        });
    });
}
