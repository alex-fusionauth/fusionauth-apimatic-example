/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  dict,
  lazy,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import {
  FacebookApplicationConfiguration,
  facebookApplicationConfigurationSchema,
} from './facebookApplicationConfiguration';
import {
  IdentityProviderLinkingStrategyEnum,
  identityProviderLinkingStrategyEnumSchema,
} from './identityProviderLinkingStrategyEnum';
import {
  IdentityProviderLoginMethodEnum,
  identityProviderLoginMethodEnumSchema,
} from './identityProviderLoginMethodEnum';
import {
  IdentityProviderTenantConfiguration,
  identityProviderTenantConfigurationSchema,
} from './identityProviderTenantConfiguration';
import {
  IdentityProviderTypeEnum,
  identityProviderTypeEnumSchema,
} from './identityProviderTypeEnum';
import {
  ProviderLambdaConfiguration,
  providerLambdaConfigurationSchema,
} from './providerLambdaConfiguration';

/** Facebook social login provider. */
export interface FacebookIdentityProvider {
  appId?: string;
  buttonText?: string;
  clientSecret?: string;
  fields?: string;
  loginMethod?: IdentityProviderLoginMethodEnum;
  permissions?: string;
  data?: Record<string, unknown>;
  applicationConfiguration?: Record<string, FacebookApplicationConfiguration>;
  debug?: boolean;
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  lambdaConfiguration?: ProviderLambdaConfiguration;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  lastUpdateInstant?: bigint;
  /** The IdP behavior when no user link has been made yet. */
  linkingStrategy?: IdentityProviderLinkingStrategyEnum;
  name?: string;
  tenantConfiguration?: Record<string, IdentityProviderTenantConfiguration>;
  type: IdentityProviderTypeEnum;
}

export const facebookIdentityProviderSchema: Schema<FacebookIdentityProvider> = object(
  {
    appId: ['appId', optional(string())],
    buttonText: ['buttonText', optional(string())],
    clientSecret: ['client_secret', optional(string())],
    fields: ['fields', optional(string())],
    loginMethod: [
      'loginMethod',
      optional(identityProviderLoginMethodEnumSchema),
    ],
    permissions: ['permissions', optional(string())],
    data: ['data', optional(dict(unknown()))],
    applicationConfiguration: [
      'applicationConfiguration',
      optional(dict(lazy(() => facebookApplicationConfigurationSchema))),
    ],
    debug: ['debug', optional(boolean())],
    id: ['id', optional(string())],
    insertInstant: ['insertInstant', optional(bigint())],
    lambdaConfiguration: [
      'lambdaConfiguration',
      optional(lazy(() => providerLambdaConfigurationSchema)),
    ],
    lastUpdateInstant: ['lastUpdateInstant', optional(bigint())],
    linkingStrategy: [
      'linkingStrategy',
      optional(identityProviderLinkingStrategyEnumSchema),
    ],
    name: ['name', optional(string())],
    tenantConfiguration: [
      'tenantConfiguration',
      optional(dict(lazy(() => identityProviderTenantConfigurationSchema))),
    ],
    type: ['type', identityProviderTypeEnumSchema],
  }
);
