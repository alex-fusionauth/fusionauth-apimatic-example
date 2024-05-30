/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema } from '../schema';

export interface MinimumPasswordAge {
  seconds?: number;
  enabled?: boolean;
}

export const minimumPasswordAgeSchema: Schema<MinimumPasswordAge> = object({
  seconds: ['seconds', optional(number())],
  enabled: ['enabled', optional(boolean())],
});