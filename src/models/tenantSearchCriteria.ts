/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** Search criteria for Tenants */
export interface TenantSearchCriteria {
  name?: string;
  numberOfResults?: number;
  orderBy?: string;
  startRow?: number;
}

export const tenantSearchCriteriaSchema: Schema<TenantSearchCriteria> = object({
  name: ['name', optional(string())],
  numberOfResults: ['numberOfResults', optional(number())],
  orderBy: ['orderBy', optional(string())],
  startRow: ['startRow', optional(number())],
});
