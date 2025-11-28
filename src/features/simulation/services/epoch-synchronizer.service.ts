import { NEO } from '../types/neo.types';
import * as tempo from '@formkit/tempo';

export function synchronizeEpochs(engineNeos: NEO[], date: Date): void {
    const neoByEpoch = new Map<string, NEO[]>();
    engineNeos.forEach((neo) => {
        const neos = neoByEpoch.get(neo.epoch);
        if (!neos) {
            neoByEpoch.set(neo.epoch, [neo]);
        } else {
            neoByEpoch.set(neo.epoch, [neo, ...neos]);
        }
    });

    const offsetByEpoch = new Map<string, number>();
    neoByEpoch.keys().forEach((key) => {
        const epochDate: Date = tempo.parse(key);
        const offsetSeconds = tempo.diffSeconds(epochDate, date);
        if (offsetSeconds < 0) {
            offsetByEpoch.set(key, Math.abs(offsetSeconds));
        } else {
            offsetByEpoch.set(key, -1 * offsetSeconds);
        }
    });

    engineNeos.forEach((obj) => {
        obj.epochOffset = offsetByEpoch.get(obj.epoch) ?? 0;
    });
}
