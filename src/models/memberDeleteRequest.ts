/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

/** Group Member Delete Request */
export interface MemberDeleteRequest {
  memberIds?: string[];
  members?: string[];
}

export const memberDeleteRequestSchema: Schema<MemberDeleteRequest> = object({
  memberIds: ['memberIds', optional(array(string()))],
  members: ['members', optional(array(string()))],
});
