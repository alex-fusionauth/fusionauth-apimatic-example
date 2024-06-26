/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  IdentityProviderLink,
  identityProviderLinkSchema,
} from './identityProviderLink';
import {
  IdentityProviderTenantConfiguration,
  identityProviderTenantConfigurationSchema,
} from './identityProviderTenantConfiguration';
import {
  IdentityProviderTypeEnum,
  identityProviderTypeEnumSchema,
} from './identityProviderTypeEnum';
import { User, userSchema } from './user';

export interface PendingIdPLink {
  displayName?: string;
  email?: string;
  identityProviderId?: string;
  identityProviderLinks?: IdentityProviderLink[];
  identityProviderName?: string;
  identityProviderTenantConfiguration?: IdentityProviderTenantConfiguration;
  identityProviderType?: IdentityProviderTypeEnum;
  identityProviderUserId?: string;
  /** The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. */
  user?: User;
  username?: string;
}

export const pendingIdPLinkSchema: Schema<PendingIdPLink> = object({
  displayName: ['displayName', optional(string())],
  email: ['email', optional(string())],
  identityProviderId: ['identityProviderId', optional(string())],
  identityProviderLinks: [
    'identityProviderLinks',
    optional(array(lazy(() => identityProviderLinkSchema))),
  ],
  identityProviderName: ['identityProviderName', optional(string())],
  identityProviderTenantConfiguration: [
    'identityProviderTenantConfiguration',
    optional(lazy(() => identityProviderTenantConfigurationSchema)),
  ],
  identityProviderType: [
    'identityProviderType',
    optional(identityProviderTypeEnumSchema),
  ],
  identityProviderUserId: ['identityProviderUserId', optional(string())],
  user: ['user', optional(lazy(() => userSchema))],
  username: ['username', optional(string())],
});
