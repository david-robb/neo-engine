import { NEO, NEODiameter, NEOOrbitalData } from '../types/neo.types';
import { supabase } from '../../../lib/supabase';
import { PostgrestError } from '@supabase/supabase-js';

export const fetchAllNeos = async (): Promise<NEO[]> => {
    const { data, error } = await supabase.from('neo').select();
    return parseResponse(data, error);
};

export const fetchNeos = async (count: number): Promise<NEO[]> => {
    const { data, error } = await supabase.from('neo').select().limit(count);
    return parseResponse(data, error);
};

export const fetchHazardousNeos = async (): Promise<NEO[]> => {
    const { data, error } = await supabase.from('neo').select().eq('is_hazardous', true);
    return parseResponse(data, error);
};

const parseResponse = (data: any, error: PostgrestError | null): NEO[] => {
    if (error) {
        console.error(`Error occurred while calling DB: ${error}`);
        return [];
    }

    if (!data) {
        console.error(`No data found: ${data}`);
        return [];
    }

    return data.map((dbNeo: any) => {
        const id = dbNeo.id;
        const epoch = dbNeo.epoch!;
        const neoReferenceId = dbNeo.neo_reference_id!;
        const isHazardous = dbNeo.is_hazardous!;
        const isSentry = dbNeo.is_sentry!;
        const name = dbNeo.name!;
        const orbitalClass = dbNeo.orbital_class!;

        // Missing Data Arc (s)
        const diameter: NEODiameter = dbNeo.diameter! as unknown as NEODiameter;
        const orbitalData: NEOOrbitalData = dbNeo.orbital_data! as unknown as NEOOrbitalData;

        return {
            id,
            name,
            neoReferenceId,
            epoch,
            isHazardous,
            isSentry,
            orbitalClass,
            diameter,
            orbitalData,
        } as NEO;
    });
};
