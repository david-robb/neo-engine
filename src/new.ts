import { z } from 'zod';
import { OrbitalDataSchema } from './models/neo-body';

export const BackendResponseVectorSchema = z.object({
    x: z.float32(),
    y: z.float32(),
    z: z.float32(),
});

export const BackendResponseBodyPositionSchema = z.object({
    body_position: BackendResponseVectorSchema,
});

export const BackendResponseBodySchema = z.object({
    body_position: BackendResponseVectorSchema,
    orbital_data: OrbitalDataSchema,
    coordinates: z.array(BackendResponseVectorSchema),
});

export const BackendResponseSchema = z.array(BackendResponseBodySchema);

export type BackendResponse = z.infer<typeof BackendResponseSchema>;
export type BackendResponseBodyPosition = z.infer<typeof BackendResponseBodyPositionSchema>;
export type BackendResponseVector = z.infer<typeof BackendResponseVectorSchema>;
export type BackendResponseBody = z.infer<typeof BackendResponseBodySchema>;
