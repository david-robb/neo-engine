import { EngineSecondaryBody } from '../types/neo-engine.types';
import { onMounted } from 'vue';
import * as THREE from 'three';
import { Vector2, Vector3 } from 'three';
import { TresRenderer, useTres } from '@tresjs/core';
import { useStateStore } from '../stores/state';

type SecondaryObjectSelectionCallback = (props: {
    oldVal: EngineSecondaryBody | undefined;
    newVal: EngineSecondaryBody | undefined;
}) => void;

type MousePositionChangeCallback = (newPosition: Vector3) => void;

export const getCanvasRelativePosition = (event: MouseEvent, renderer: TresRenderer): THREE.Vector2 => {
    const canvas: HTMLCanvasElement = renderer.domElement;

    if (!canvas) return new THREE.Vector2();

    const rect: DOMRect = canvas.getBoundingClientRect();

    const x: number = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y: number = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    return new THREE.Vector2(x, y);
};

export function useNeoRaycaster(onSelect: SecondaryObjectSelectionCallback, onHover: MousePositionChangeCallback): void {
    const state = useStateStore();
    const { camera, renderer } = useTres();
    const raycaster: THREE.Raycaster = new THREE.Raycaster();

    let lastSelected: EngineSecondaryBody | undefined;

    let mouseDownTime: number;

    function onMouseClick(event: MouseEvent) {
        const pickPosition = getCanvasRelativePosition(event, renderer);

        const intersectedObject = calculateIntersectedObject(pickPosition);
        onSelect({ oldVal: lastSelected, newVal: intersectedObject });

        if (intersectedObject) {
            lastSelected = intersectedObject;
        }
    }

    function onMouseMove(event: MouseEvent) {
        if (!camera.value) {
            return;
        }

        const pickPosition: Vector2 = getCanvasRelativePosition(event, renderer);
        const mousePosition: Vector3 = new Vector3(pickPosition.x, pickPosition.y, 1);

        onHover(mousePosition);
    }

    function calculateIntersectedObject(normalizedPosition: THREE.Vector2): EngineSecondaryBody | undefined {
        const instancedMesh = state.meshes.neoInstancedMesh;
        if (!instancedMesh) {
            return undefined;
        }

        raycaster.layers.set(2);
        raycaster.setFromCamera(normalizedPosition, camera.value!);

        const intersectedObjects = raycaster.intersectObject(instancedMesh);

        const intersectedInstance: number | undefined = intersectedObjects.length > 0 ? intersectedObjects[0].instanceId : undefined;
        if (!intersectedInstance) {
            return undefined;
        }

        return state.neos.find((neo: EngineSecondaryBody) => neo.meshIndex === intersectedInstance);
    }

    onMounted(() => {
        window.addEventListener('mousedown', (event: MouseEvent) => {
            mouseDownTime = event.timeStamp;
        });

        window.addEventListener('mouseup', (event: MouseEvent) => {
            if (event.timeStamp - mouseDownTime <= 200) {
                onMouseClick(event);
            }
        });

        window.addEventListener('mousemove', (event: MouseEvent) => {
            onMouseMove(event);
        });
    });
}
