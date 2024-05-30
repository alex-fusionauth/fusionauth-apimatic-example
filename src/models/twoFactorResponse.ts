/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface TwoFactorResponse {
  code?: string;
  recoveryCodes?: string[];
}

export const twoFactorResponseSchema: Schema<TwoFactorResponse> = object({
  code: ['code', optional(string())],
  recoveryCodes: ['recoveryCodes', optional(array(string()))],
});
