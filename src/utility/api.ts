import { z } from 'zod';

export async function api<T>(url: string, schema: z.ZodType<T>, opts?: RequestInit): Promise<T> {
    const response = await fetch(url, opts);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const raw = await response.json();
    return schema.parse(raw);
}
