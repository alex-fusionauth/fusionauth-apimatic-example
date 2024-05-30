/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Forgot password response object. */
export interface ForgotPasswordResponse {
  changePasswordId?: string;
}

export const forgotPasswordResponseSchema: Schema<ForgotPasswordResponse> = object(
  { changePasswordId: ['changePasswordId', optional(string())] }
);
