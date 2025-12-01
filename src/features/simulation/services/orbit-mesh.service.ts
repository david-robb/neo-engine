import { Color, type ShaderMaterialParameters, Vector2, Vector3 } from 'three';
import { ORBIT_SEGMENT_COUNT } from '../../../utility/constants';
import { toEclipticCoordinates, toOrbitalCoordinates } from '../../../utility/orbital-mechanics';
import { MeshLine, MeshLineGeometry, MeshLineMaterial } from '@lume/three-meshline';

export function buildOrbitMeshLine(
    orbitElements: any,
    color: Color = new Color('white'),
    name: string = '',
    thickness: number = 200
): MeshLine {
    let trueAnomaly: number = 0.0;

    const segments: number = ORBIT_SEGMENT_COUNT;
    const accumulator: number = 360.0 / segments;

    const points: Vector3[] = [];
    for (let i = 0; i < segments; i++) {
        const orbitalCoordinates = toOrbitalCoordinates(orbitElements, trueAnomaly);
        const eclipticCoordinates = toEclipticCoordinates(orbitElements, orbitalCoordinates);

        points.push(eclipticCoordinates);

        trueAnomaly += accumulator;
    }

    const geometry = new MeshLineGeometry();
    geometry.setPoints(points, (p) => thickness);

    const material = new MeshLineMaterial({
        lineWidth: thickness,
        color: color,
        resolution: new Vector2(window.innerWidth, window.innerHeight),
        name: name,
    } as ShaderMaterialParameters & MeshLineMaterial);

    material.vertexShader = `#include <common>
        ${material.vertexShader}`;
    material.needsUpdate = true;

    const meshLine = new MeshLine(geometry, material);
    meshLine.name = name;

    return meshLine;
}
