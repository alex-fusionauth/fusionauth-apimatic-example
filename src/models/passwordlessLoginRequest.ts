/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { MetaData, metaDataSchema } from './metaData';

export interface PasswordlessLoginRequest {
  code?: string;
  twoFactorTrustId?: string;
  applicationId?: string;
  ipAddress?: string;
  metaData?: MetaData;
  newDevice?: boolean;
  noJWT?: boolean;
}

export const passwordlessLoginRequestSchema: Schema<PasswordlessLoginRequest> = object(
  {
    code: ['code', optional(string())],
    twoFactorTrustId: ['twoFactorTrustId', optional(string())],
    applicationId: ['applicationId', optional(string())],
    ipAddress: ['ipAddress', optional(string())],
    metaData: ['metaData', optional(lazy(() => metaDataSchema))],
    newDevice: ['newDevice', optional(boolean())],
    noJWT: ['noJWT', optional(boolean())],
  }
);
