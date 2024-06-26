/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  IdentityProviderDetails,
  identityProviderDetailsSchema,
} from './identityProviderDetails';

export interface LookupResponse {
  identityProvider?: IdentityProviderDetails;
}

export const lookupResponseSchema: Schema<LookupResponse> = object({
  identityProvider: [
    'identityProvider',
    optional(lazy(() => identityProviderDetailsSchema)),
  ],
});
