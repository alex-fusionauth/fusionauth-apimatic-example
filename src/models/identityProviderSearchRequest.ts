/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  IdentityProviderSearchCriteria,
  identityProviderSearchCriteriaSchema,
} from './identityProviderSearchCriteria';

/** Search request for Identity Providers */
export interface IdentityProviderSearchRequest {
  /** Search criteria for Identity Providers. */
  search?: IdentityProviderSearchCriteria;
}

export const identityProviderSearchRequestSchema: Schema<IdentityProviderSearchRequest> = object(
  {
    search: [
      'search',
      optional(lazy(() => identityProviderSearchCriteriaSchema)),
    ],
  }
);
