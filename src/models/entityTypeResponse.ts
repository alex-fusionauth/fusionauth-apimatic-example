/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { EntityType, entityTypeSchema } from './entityType';
import {
  EntityTypePermission,
  entityTypePermissionSchema,
} from './entityTypePermission';

/** Entity Type API response object. */
export interface EntityTypeResponse {
  /** Models an entity type that has a specific set of permissions. These are global objects and can be used across tenants. */
  entityType?: EntityType;
  entityTypes?: EntityType[];
  /** Models a specific entity type permission. This permission can be granted to users or other entities. */
  permission?: EntityTypePermission;
}

export const entityTypeResponseSchema: Schema<EntityTypeResponse> = object({
  entityType: ['entityType', optional(lazy(() => entityTypeSchema))],
  entityTypes: ['entityTypes', optional(array(lazy(() => entityTypeSchema)))],
  permission: ['permission', optional(lazy(() => entityTypePermissionSchema))],
});
