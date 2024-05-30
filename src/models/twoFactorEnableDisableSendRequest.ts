/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface TwoFactorEnableDisableSendRequest {
  email?: string;
  method?: string;
  methodId?: string;
  mobilePhone?: string;
}

export const twoFactorEnableDisableSendRequestSchema: Schema<TwoFactorEnableDisableSendRequest> = object(
  {
    email: ['email', optional(string())],
    method: ['method', optional(string())],
    methodId: ['methodId', optional(string())],
    mobilePhone: ['mobilePhone', optional(string())],
  }
);