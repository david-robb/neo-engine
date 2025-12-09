import * as THREE from 'three';
import { Color, Mesh, type ShaderMaterialParameters, Vector2, Vector3 } from 'three';
import { EngineOrbit } from '../types/simulation.types';
import { MeshLine, MeshLineGeometry, MeshLineMaterial } from '@lume/three-meshline';
import { calculateOrbit } from '../../../utility/orbital-mechanics';

export const buildSphereMesh = (radius: number, color: Color, name: string): Mesh => {
    const sphereGeometry = new THREE.SphereGeometry(radius, 30, 30);
    const material = new THREE.MeshBasicMaterial({ color: color });

    const mesh = new THREE.Mesh(sphereGeometry, material);

    mesh.name = name;
    mesh.layers.set(2);

    return mesh;
};

export function buildOrbitMeshLine(
    orbit: EngineOrbit,
    color: Color = new Color('white'),
    name: string = '',
    thickness: number = 200
): MeshLine {
    const points: Vector3[] = calculateOrbit(orbit);

    const geometry: MeshLineGeometry = new MeshLineGeometry();
    geometry.setPoints(points);

    const material = new MeshLineMaterial({
        lineWidth: thickness,
        color: color,
        resolution: new Vector2(window.innerWidth, window.innerHeight),
        name: name,
        sizeAttenuation: true,
    } as ShaderMaterialParameters & MeshLineMaterial);

    material.vertexShader = `#include <common>
        ${material.vertexShader}`;
    material.needsUpdate = true;

    const meshLine = new MeshLine(geometry, material);
    meshLine.name = name;

    return meshLine;
}

export const buildGridMesh = (): THREE.GridHelper => {
    const GRID_TOTAL_SIZE_KM = 10000000000; // 10 billion KM
    const GRID_SECTION_SIZE_KM = 100000000; // 100 million KM

    const size: number = GRID_TOTAL_SIZE_KM;
    const divisions: number = size / GRID_SECTION_SIZE_KM;

    const colorCenterLine = 0xff0000;
    const colorGrid = 0x888888;

    const gridHelper = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);

    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.3;

    return gridHelper;
};

export const buildInstancedSphereMesh = (amount: number) => {
    const geometry = new THREE.SphereGeometry(1, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const mesh = new THREE.InstancedMesh(geometry, material, amount);

    mesh.layers.set(2);

    return mesh;
};
