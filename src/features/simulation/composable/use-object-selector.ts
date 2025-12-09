import { EngineBody, EnginePrimaryBody, EngineSecondaryBody } from '../types/simulation.types';
import { onMounted } from 'vue';
import * as THREE from 'three';
import { TresRenderer, useTres } from '@tresjs/core';
import { useStateStore } from '../stores/state';

export const getCanvasRelativePosition = (event: MouseEvent, renderer: TresRenderer): THREE.Vector2 => {
    const canvas: HTMLCanvasElement = renderer.domElement;

    if (!canvas) return new THREE.Vector2();

    const rect: DOMRect = canvas.getBoundingClientRect();

    const x: number = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y: number = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    return new THREE.Vector2(x, y);
};

export function useObjectSelector(): void {
    const state = useStateStore();
    const { camera, renderer, scene } = useTres();
    const raycaster: THREE.Raycaster = new THREE.Raycaster();

    let mouseDownTime: number;

    let secondaryObjectMeshIndexMap: Map<number, EngineSecondaryBody> = new Map();

    function onMouseClick(event: MouseEvent): void {
        if (!camera.value) {
            return;
        }

        const pickPosition = getCanvasRelativePosition(event, renderer);

        raycaster.layers.set(2);
        raycaster.setFromCamera(pickPosition, camera.value);

        const intersectedObject = findIntersectedObject();
        if (intersectedObject) {
            if (intersectedObject instanceof EnginePrimaryBody) {
                state.setFocus(intersectedObject);
            }

            if (intersectedObject instanceof EngineSecondaryBody) {
                state.$patch((partialState) => {
                    partialState._secondaryBodyPool.set(intersectedObject.id, intersectedObject);
                });
            }
        }
    }

    function findIntersectedObject(): EngineBody | undefined {
        const instancedMesh = state._meshes.secondaryBodiesMesh;
        const primaryBodyMeshes = state._meshes.primaryBodyMeshes;
        if (!instancedMesh || !primaryBodyMeshes) {
            return undefined;
        }

        const intersectedArray = raycaster.intersectObjects([instancedMesh, ...primaryBodyMeshes]);
        const intersectedObject = intersectedArray[0];

        const intersectedPrimaryObject = !!intersectedObject?.object?.name;
        const intersectedSecondaryObject = !!intersectedObject?.instanceId;

        if (intersectedPrimaryObject) {
            return state._primaryBody.get(intersectedObject.object.name);
        }

        if (intersectedSecondaryObject) {
            return secondaryObjectMeshIndexMap.get(intersectedObject.instanceId!);
        }

        return undefined;
    }

    onMounted(() => {
        state._secondaryBody.forEach((body) => {
            secondaryObjectMeshIndexMap.set(body.meshIndex, body);
        });

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
