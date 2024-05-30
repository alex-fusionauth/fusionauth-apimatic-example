/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { APIKey, aPIKeySchema } from './aPIKey';

/** Authentication key request object. */
export interface APIKeyRequest {
  /** domain POJO to represent AuthenticationKey */
  apiKey?: APIKey;
  sourceKeyId?: string;
}

export const aPIKeyRequestSchema: Schema<APIKeyRequest> = object({
  apiKey: ['apiKey', optional(lazy(() => aPIKeySchema))],
  sourceKeyId: ['sourceKeyId', optional(string())],
});