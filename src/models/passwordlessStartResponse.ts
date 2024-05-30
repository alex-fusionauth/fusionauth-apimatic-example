/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface PasswordlessStartResponse {
  code?: string;
}

export const passwordlessStartResponseSchema: Schema<PasswordlessStartResponse> = object(
  { code: ['code', optional(string())] }
);
