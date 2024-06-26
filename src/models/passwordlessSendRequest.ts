/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, object, optional, Schema, string, unknown } from '../schema';

export interface PasswordlessSendRequest {
  applicationId?: string;
  code?: string;
  loginId?: string;
  state?: Record<string, unknown>;
}

export const passwordlessSendRequestSchema: Schema<PasswordlessSendRequest> = object(
  {
    applicationId: ['applicationId', optional(string())],
    code: ['code', optional(string())],
    loginId: ['loginId', optional(string())],
    state: ['state', optional(dict(unknown()))],
  }
);
