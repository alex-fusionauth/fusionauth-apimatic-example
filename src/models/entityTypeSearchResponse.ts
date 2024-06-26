/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, lazy, object, optional, Schema } from '../schema';
import { EntityType, entityTypeSchema } from './entityType';

/** Search response for entity types. */
export interface EntityTypeSearchResponse {
  entityTypes?: EntityType[];
  total?: bigint;
}

export const entityTypeSearchResponseSchema: Schema<EntityTypeSearchResponse> = object(
  {
    entityTypes: ['entityTypes', optional(array(lazy(() => entityTypeSchema)))],
    total: ['total', optional(bigint())],
  }
);
