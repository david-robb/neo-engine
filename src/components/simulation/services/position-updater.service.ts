import { EngineNEO } from '../types/neo-engine.types';
import { calculateScaledPosition } from '../../../utility/orbital-mechanics';

export function updatePositions(objects: EngineNEO[], t: number = 0): Float32Array {
    const matricies = new Float32Array(objects.length * 16);

    objects.forEach((neo, index) => {
        const offset = index * 16;

        const newPosition = calculateScaledPosition(neo.neo.orbitalData, neo.neo.epochOffset + t);
        const diameter = (neo.neo.diameter.km.min + neo.neo.diameter.km.max) / 2;
        const diameterScale = diameter * 5;

        // 0 4 8  12
        // 1 5 9  13
        // 2 6 10 14
        // 3 7 11 15

        matricies[offset] = diameterScale;
        matricies[offset + 2] = 0;
        matricies[offset + 3] = 0;
        matricies[offset + 4] = 0;
        matricies[offset + 5] = diameterScale;
        matricies[offset + 6] = 0;
        matricies[offset + 7] = 0;
        matricies[offset + 8] = 0;
        matricies[offset + 9] = 0;
        matricies[offset + 10] = diameterScale;
        matricies[offset + 11] = 0;
        matricies[offset + 12] = newPosition.x;
        matricies[offset + 13] = newPosition.y;
        matricies[offset + 14] = newPosition.z;
        matricies[offset + 15] = 1;

        neo.state.currentPosition = newPosition;
    });

    return matricies;
}