/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, object, optional, Schema } from '../schema';
import {
  IdentityProviderField,
  identityProviderFieldSchema,
} from './containers/identityProviderField';

/** Identity Provider response. */
export interface IdentityProviderSearchResponse {
  identityProviders?: IdentityProviderField[];
  total?: bigint;
}

export const identityProviderSearchResponseSchema: Schema<IdentityProviderSearchResponse> = object(
  {
    identityProviders: [
      'identityProviders',
      optional(array(identityProviderFieldSchema)),
    ],
    total: ['total', optional(bigint())],
  }
);
