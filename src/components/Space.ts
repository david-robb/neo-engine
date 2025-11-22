import { SCALE_FACTOR, TOTAL_FETCH } from '../utility/constants';
import * as THREE from 'three';
import { buildOrbit, calculateScaledPosition } from '../utility/orbital-mechanics';
import { EngineNEO } from './simulation/types/neo-engine';
import { NEO } from './simulation/types/neo';
import { fetchNeos } from './simulation/services/databaseApi';

export async function loadEngineNEOs(): Promise<EngineNEO[]> {
    const neos: NEO[] = await fetchNeos(TOTAL_FETCH);

    console.log(`${neos?.length} NEOs Loaded`);

    return neos.map((neo) => toEngineModel(neo));
}

export function buildGrid(): THREE.GridHelper {
    const GRID_TOTAL_SIZE_KM = 1000000000;
    const GRID_SECTION_SIZE_KM = 100000000;

    const size = GRID_TOTAL_SIZE_KM / SCALE_FACTOR;
    const divisions = size / (GRID_SECTION_SIZE_KM / SCALE_FACTOR);
    const colorCenterLine = 0xff0000;
    const colorGrid = 0x888888;
    const gridHelper = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.5;

    return gridHelper;
}

function toEngineModel(neo: NEO): EngineNEO {
    const orbitalPoints = buildOrbit(neo.orbitalData);
    const startingPosition = calculateScaledPosition(neo.orbitalData);

    return {
        mesh: {
            orbit: buildLine(orbitalPoints),
            sphere: buildSphere(neo.name),
        },
        state: {
            active: false,
            currentPosition: startingPosition,
            isHovered: false,
            isSelected: false,
        },
        neo: neo,
    };
}

function buildLine(orbitPositions: THREE.Vector3[]): THREE.LineSegments {
    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(orbitPositions);

    // 0x343434
    const material = new THREE.LineBasicMaterial({ color: 0x4f4d4d, depthWrite: false });
    const mesh = new THREE.LineSegments(geometry, material);
    mesh.layers.set(1);

    return mesh;
}

function buildSphere(name: string): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(1000, 50, 50); // (1000 * SCALE_FACTOR) KM

    const material = new THREE.MeshBasicMaterial({ color: 0xa9a9a9 });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;
    mesh.layers.set(2);

    return mesh;
}
