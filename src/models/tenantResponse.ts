/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Tenant, tenantSchema } from './tenant';

export interface TenantResponse {
  tenant?: Tenant;
  tenants?: Tenant[];
}

export const tenantResponseSchema: Schema<TenantResponse> = object({
  tenant: ['tenant', optional(lazy(() => tenantSchema))],
  tenants: ['tenants', optional(array(lazy(() => tenantSchema)))],
});
