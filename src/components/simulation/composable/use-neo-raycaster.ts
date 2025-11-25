import { EngineNEO } from '../types/neo-engine.types';
import { onMounted } from 'vue';
import * as THREE from 'three';
import { TresRenderer, useTres } from '@tresjs/core';
import { SimulationStateFlags, useStateStore } from '../../../stores/state';
import { FlagUtilities } from '../utilities/flag.utilities';

type NEOSelectCallback = (props: { oldVal: EngineNEO | undefined; newVal: EngineNEO | undefined }) => void;

export const getCanvasRelativePosition = (event: MouseEvent, renderer: TresRenderer): THREE.Vector2 => {
    const canvas = renderer.domElement;

    if (!canvas) return new THREE.Vector2();

    const rect = canvas.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    return new THREE.Vector2(x, y);
};

export function useNeoRaycaster(onSelect: NEOSelectCallback): void {
    const state = useStateStore();
    const { camera, renderer } = useTres();
    const raycaster: THREE.Raycaster = new THREE.Raycaster();

    let lastSelected: EngineNEO | undefined;

    let mouseDownTime: number;

    function onMouseClick(event: MouseEvent) {
        const pickPosition = getCanvasRelativePosition(event, renderer);

        const intersectedNeo = calculateIntersectedObject(pickPosition);
        onSelect({ oldVal: lastSelected, newVal: intersectedNeo });

        if (intersectedNeo) {
            lastSelected = intersectedNeo;
        }
    }

    function calculateIntersectedObject(normalizedPosition: THREE.Vector2): EngineNEO | undefined {
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

        return state.neos.find((neo) => neo.mesh.instanceIndex === intersectedInstance);
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
    });
}
