import { DiameterJson, OrbitalDataJson } from '../types/database.types';
import { supabase } from '../../../lib/supabase';
import { EngineSecondaryBody } from '../types/simulation.types';
import * as THREE from 'three';
import * as tempo from '@formkit/tempo';
import { tzDate } from '@formkit/tempo';

export const fetchTotalCount = async (): Promise<number> => {
    const { count, error } = await supabase.from('neo').select('*', { count: 'exact', head: true });
    if (error) {
        console.error(error);

        return 0;
    }

    return count!;
};

export const fetch = async (count: number, epoch: Date): Promise<EngineSecondaryBody[]> => {
    const { data, error } = await supabase.from('neo').select().limit(count);
    if (error) {
        console.error(`Error occurred while calling DB: ${error}`);
        return [];
    }

    if (!data) {
        console.error(`No data found: ${data}`);
        return [];
    }

    return parseResponse(data, epoch);
};

const parseResponse = (data: any, epoch: Date): EngineSecondaryBody[] => {
    const objectsByEpoch = new Map<string, EngineSecondaryBody[]>();

    const secondaryObjects: EngineSecondaryBody[] = data.map((dbNeo: any, index: number): EngineSecondaryBody => {
        const body = mapToEngineBody(dbNeo, index);

        const bodyEpoch = body.orbit.epoch;
        const objectsWithEpoch = objectsByEpoch.get(bodyEpoch);
        if (!objectsWithEpoch) {
            objectsByEpoch.set(bodyEpoch, [body]);
        } else {
            objectsByEpoch.set(bodyEpoch, [body, ...objectsWithEpoch]);
        }

        return body;
    });

    const offsetByEpoch = new Map<string, number>();
    objectsByEpoch.keys().forEach((key) => {
        const epochDate: Date = tempo.parse(key);
        const epochDateAtUtc = tzDate(epochDate, 'UTC');

        const offsetSeconds = tempo.diffSeconds(epochDateAtUtc, epoch);
        if (offsetSeconds < 0) {
            offsetByEpoch.set(key, Math.abs(offsetSeconds));
        } else {
            offsetByEpoch.set(key, -1 * offsetSeconds);
        }
    });

    secondaryObjects.forEach((obj: EngineSecondaryBody): void => {
        obj.epochOffset = offsetByEpoch.get(obj.orbit.epoch) ?? 0;
    });

    return secondaryObjects;
};

const mapToEngineBody = (dbNeo: any, index: number) => {
    const id = dbNeo.id;
    const epoch = dbNeo.epoch!;
    const neoReferenceId = dbNeo.neo_reference_id!;
    const isHazardous = dbNeo.is_hazardous!;
    const isSentry = dbNeo.is_sentry!;
    const name = dbNeo.name!;
    const orbitalClass = dbNeo.orbital_class!;

    const diameter: DiameterJson = dbNeo.diameter! as unknown as DiameterJson;
    const orbitalData: OrbitalDataJson = dbNeo.orbital_data! as unknown as OrbitalDataJson;

    return {
        id: id,
        name: name,
        neoReferenceId: neoReferenceId,
        estimatedDiameterMaxKm: diameter.km.max,
        estimatedDiameterMinKm: diameter.km.min,
        orbitalClass: orbitalClass,
        isHazardous: isHazardous,
        isSentry: isSentry,
        currentPosition: new THREE.Vector3(0, 0, 0),
        distanceToEarth: 0,
        velocity: 0,
        epochOffset: 0,
        orbit: {
            epoch: epoch,
            orbitalPeriod: orbitalData.orbitalPeriod,
            orbitUncertainty: orbitalData.orbitUncertainty,
            eccentricity: orbitalData.eccentricity,
            semiMajorAxis: orbitalData.semiMajorAxis,
            inclination: orbitalData.inclination,
            ascendingNodeLongitude: orbitalData.ascendingNodeLongitude,
            perihelionDistance: orbitalData.perihelionDistance,
            perihelionArgument: orbitalData.perihelionArgument,
            aphelionDistance: orbitalData.aphelionDistance,
            perihelionTime: orbitalData.perihelionTime,
            meanAnomaly: orbitalData.meanAnomaly,
            meanMotion: orbitalData.meanMotion,
        },
        meshIndex: index,
    } as EngineSecondaryBody;
};
