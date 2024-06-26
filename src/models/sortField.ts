/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { SortEnum, sortEnumSchema } from './sortEnum';

export interface SortField {
  missing?: string;
  name?: string;
  order?: SortEnum;
}

export const sortFieldSchema: Schema<SortField> = object({
  missing: ['missing', optional(string())],
  name: ['name', optional(string())],
  order: ['order', optional(sortEnumSchema)],
});
