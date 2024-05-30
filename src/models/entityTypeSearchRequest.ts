/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  EntityTypeSearchCriteria,
  entityTypeSearchCriteriaSchema,
} from './entityTypeSearchCriteria';

/** Search request for entity types. */
export interface EntityTypeSearchRequest {
  /** Search criteria for entity types. */
  search?: EntityTypeSearchCriteria;
}

export const entityTypeSearchRequestSchema: Schema<EntityTypeSearchRequest> = object(
  { search: ['search', optional(lazy(() => entityTypeSearchCriteriaSchema))] }
);
