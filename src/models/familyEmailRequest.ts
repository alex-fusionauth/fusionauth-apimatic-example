/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** API request for sending out family requests to parent's. */
export interface FamilyEmailRequest {
  parentEmail?: string;
}

export const familyEmailRequestSchema: Schema<FamilyEmailRequest> = object({
  parentEmail: ['parentEmail', optional(string())],
});