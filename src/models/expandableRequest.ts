/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

/** An expandable API request. */
export interface ExpandableRequest {
  expand?: string[];
}

export const expandableRequestSchema: Schema<ExpandableRequest> = object({
  expand: ['expand', optional(array(string()))],
});
