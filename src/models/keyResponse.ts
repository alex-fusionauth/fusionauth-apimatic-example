/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Key, keySchema } from './key';

/** Key API response object. */
export interface KeyResponse {
  /** Domain for a public key, key pair or an HMAC secret. This is used by KeyMaster to manage keys for JWTs, SAML, etc. */
  key?: Key;
  keys?: Key[];
}

export const keyResponseSchema: Schema<KeyResponse> = object({
  key: ['key', optional(lazy(() => keySchema))],
  keys: ['keys', optional(array(lazy(() => keySchema)))],
});