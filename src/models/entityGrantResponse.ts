/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { EntityGrant, entityGrantSchema } from './entityGrant';

/** Entity grant API response object. */
export interface EntityGrantResponse {
  grants?: EntityGrant[];
  /** A grant for an entity to a user or another entity. */
  grant?: EntityGrant;
}

export const entityGrantResponseSchema: Schema<EntityGrantResponse> = object({
  grants: ['grants', optional(array(lazy(() => entityGrantSchema)))],
  grant: ['grant', optional(lazy(() => entityGrantSchema))],
});
