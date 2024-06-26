/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema } from '../schema';

export interface DeleteConfiguration {
  numberOfDaysToRetain?: number;
  enabled?: boolean;
}

export const deleteConfigurationSchema: Schema<DeleteConfiguration> = object({
  numberOfDaysToRetain: ['numberOfDaysToRetain', optional(number())],
  enabled: ['enabled', optional(boolean())],
});
