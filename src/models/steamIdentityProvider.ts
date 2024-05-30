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
  IdentityProviderLinkingStrategyEnum,
  identityProviderLinkingStrategyEnumSchema,
} from './identityProviderLinkingStrategyEnum';
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
import { SteamAPIModeEnum, steamAPIModeEnumSchema } from './steamAPIModeEnum';
import {
  SteamApplicationConfiguration,
  steamApplicationConfigurationSchema,
} from './steamApplicationConfiguration';

/** Steam gaming login provider. */
export interface SteamIdentityProvider {
  /** Steam API modes. */
  apiMode?: SteamAPIModeEnum;
  buttonText?: string;
  clientId?: string;
  scope?: string;
  webAPIKey?: string;
  data?: Record<string, unknown>;
  applicationConfiguration?: Record<string, SteamApplicationConfiguration>;
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

export const steamIdentityProviderSchema: Schema<SteamIdentityProvider> = object(
  {
    apiMode: ['apiMode', optional(steamAPIModeEnumSchema)],
    buttonText: ['buttonText', optional(string())],
    clientId: ['client_id', optional(string())],
    scope: ['scope', optional(string())],
    webAPIKey: ['webAPIKey', optional(string())],
    data: ['data', optional(dict(unknown()))],
    applicationConfiguration: [
      'applicationConfiguration',
      optional(dict(lazy(() => steamApplicationConfigurationSchema))),
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
