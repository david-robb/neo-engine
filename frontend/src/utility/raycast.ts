import { TresScene } from '@tresjs/core';
import * as THREE from 'three';
import { Object3D } from 'three';

const RAYCASTER = new THREE.Raycaster();

export function calculateIntersectedObject(scene: TresScene, normalizedPosition: THREE.Vector2, camera: THREE.Camera): Object3D | null {
    RAYCASTER.layers.set(2);

    RAYCASTER.setFromCamera(normalizedPosition, camera);

    const intersectedObjects = RAYCASTER.intersectObjects(scene.children);

    if (intersectedObjects.length > 0) {
        return intersectedObjects[0].object;
    }

    return null;
}
