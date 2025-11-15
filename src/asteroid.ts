import { z } from 'zod';

export const OrbitalDataSchema = z.object({
  orbit_id: z.string(),
  orbit_determination_date: z.string(),
  first_observation_date: z.string(),
  last_observation_date: z.string(),
  data_arc_in_days: z.number(),
  observations_used: z.number(),
  orbit_uncertainty: z.string(),
  minimum_orbit_intersection: z.string(),
  jupiter_tisserand_invariant: z.string(),
  epoch_osculation: z.string(),
  eccentricity: z.string(),
  semi_major_axis: z.string(),
  inclination: z.string(),
  ascending_node_longitude: z.string(),
  orbital_period: z.string(),
  perihelion_distance: z.string(),
  perihelion_argument: z.string(),
  aphelion_distance: z.string(),
  perihelion_time: z.string(),
  mean_anomaly: z.string(),
  mean_motion: z.string(),
  equinox: z.string(),
}).partial();

export const DiameterMeasurementSchema = z.object({
  estimated_diameter_max: z.number(),
  estimated_diameter_min: z.number(),
}).partial();

export const DiameterSchema = z.object({
  kilometers: DiameterMeasurementSchema,
  meters: DiameterMeasurementSchema,
  miles: DiameterMeasurementSchema,
  feet: DiameterMeasurementSchema,
}).partial();

export const AsteroidSchema = z.object({
  id: z.string(),
  name: z.string(),
  is_potentially_hazardous_asteroid: z.boolean(),
  orbital_data: OrbitalDataSchema,
  estimated_diameter: DiameterSchema,
}).partial();

export type OrbitalData = z.infer<typeof OrbitalDataSchema>;
export type Asteroid = z.infer<typeof AsteroidSchema>;
export type DiameterMeasurement = z.infer<typeof DiameterMeasurementSchema>;
export type Diameter = z.infer<typeof DiameterSchema>;
