/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  ConsentSearchCriteria,
  consentSearchCriteriaSchema,
} from './consentSearchCriteria';

/** Search request for Consents */
export interface ConsentSearchRequest {
  /** Search criteria for Consents */
  search?: ConsentSearchCriteria;
}

export const consentSearchRequestSchema: Schema<ConsentSearchRequest> = object({
  search: ['search', optional(lazy(() => consentSearchCriteriaSchema))],
});
