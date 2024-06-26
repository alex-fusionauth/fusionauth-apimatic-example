/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

/** Something that can be enabled and thus also disabled. */
export interface Enableable {
  enabled?: boolean;
}

export const enableableSchema: Schema<Enableable> = object({
  enabled: ['enabled', optional(boolean())],
});
