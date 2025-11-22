import { NEO, NEODiameter, NEOOrbitalData } from '../types/neo';
import { supabase } from '../../../lib/supabase';

export const fetchNeos = async (amount: number): Promise<NEO[]> => {
    const { data, error } = await supabase.from('neo').select().limit(amount);
    if (error) {
        console.error(`Error occurred while calling DB: ${error}`);
        return [];
    }

    if (!data) {
        console.error(`No data found: ${data}`);
        return [];
    }

    return data.map((dbNeo) => {
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
