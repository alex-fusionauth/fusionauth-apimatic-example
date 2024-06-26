/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  dict,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { MetaData, metaDataSchema } from './metaData';

/** Login API request object used for login to third-party systems (i.e. Login with Facebook). */
export interface IdentityProviderLoginRequest {
  data?: Record<string, string>;
  identityProviderId?: string;
  noLink?: boolean;
  encodedJWT?: string;
  applicationId?: string;
  ipAddress?: string;
  metaData?: MetaData;
  newDevice?: boolean;
  noJWT?: boolean;
}

export const identityProviderLoginRequestSchema: Schema<IdentityProviderLoginRequest> = object(
  {
    data: ['data', optional(dict(string()))],
    identityProviderId: ['identityProviderId', optional(string())],
    noLink: ['noLink', optional(boolean())],
    encodedJWT: ['encodedJWT', optional(string())],
    applicationId: ['applicationId', optional(string())],
    ipAddress: ['ipAddress', optional(string())],
    metaData: ['metaData', optional(lazy(() => metaDataSchema))],
    newDevice: ['newDevice', optional(boolean())],
    noJWT: ['noJWT', optional(boolean())],
  }
);
