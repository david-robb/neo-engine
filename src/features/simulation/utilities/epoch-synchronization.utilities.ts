import { NEO } from '../types/neo.types';
import * as tempo from '@formkit/tempo';
import { tzDate } from '@formkit/tempo';

export function synchronizeEpochs(objects: NEO[], date: Date): void {
    const objectsByEpoch = new Map<string, NEO[]>();

    objects.forEach((object) => {
        const objectsWithEpoch = objectsByEpoch.get(object.epoch);
        if (!objectsWithEpoch) {
            objectsByEpoch.set(object.epoch, [object]);
        } else {
            objectsByEpoch.set(object.epoch, [object, ...objectsWithEpoch]);
        }
    });

    const offsetByEpoch = new Map<string, number>();
    objectsByEpoch.keys().forEach((key) => {
        const epochDate: Date = tempo.parse(key);
        const epochDateAtUtc = tzDate(epochDate, 'UTC');

        const offsetSeconds = tempo.diffSeconds(epochDateAtUtc, date);
        if (offsetSeconds < 0) {
            offsetByEpoch.set(key, Math.abs(offsetSeconds));
        } else {
            offsetByEpoch.set(key, -1 * offsetSeconds);
        }
    });

    objects.forEach((obj) => {
        obj.epochOffset = offsetByEpoch.get(obj.epoch) ?? 0;
    });
}
