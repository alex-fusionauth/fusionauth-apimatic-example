/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface BaseSearchCriteria {
  numberOfResults?: number;
  orderBy?: string;
  startRow?: number;
}

export const baseSearchCriteriaSchema: Schema<BaseSearchCriteria> = object({
  numberOfResults: ['numberOfResults', optional(number())],
  orderBy: ['orderBy', optional(string())],
  startRow: ['startRow', optional(number())],
});
