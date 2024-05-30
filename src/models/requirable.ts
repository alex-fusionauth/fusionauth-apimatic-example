/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

/** Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. */
export interface Requirable {
  required?: boolean;
  enabled?: boolean;
}

export const requirableSchema: Schema<Requirable> = object({
  required: ['required', optional(boolean())],
  enabled: ['enabled', optional(boolean())],
});