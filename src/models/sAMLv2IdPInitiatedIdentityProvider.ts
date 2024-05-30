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
import {
  SAMLv2IdPInitiatedApplicationConfiguration,
  sAMLv2IdPInitiatedApplicationConfigurationSchema,
} from './sAMLv2IdPInitiatedApplicationConfiguration';

/** SAML v2 IdP Initiated identity provider configuration. */
export interface SAMLv2IdPInitiatedIdentityProvider {
  issuer?: string;
  data?: Record<string, unknown>;
  applicationConfiguration?: Record<string, SAMLv2IdPInitiatedApplicationConfiguration>;
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
  emailClaim?: string;
  keyId?: string;
  uniqueIdClaim?: string;
  useNameIdForEmail?: boolean;
  usernameClaim?: string;
}

export const sAMLv2IdPInitiatedIdentityProviderSchema: Schema<SAMLv2IdPInitiatedIdentityProvider> = object(
  {
    issuer: ['issuer', optional(string())],
    data: ['data', optional(dict(unknown()))],
    applicationConfiguration: [
      'applicationConfiguration',
      optional(
        dict(lazy(() => sAMLv2IdPInitiatedApplicationConfigurationSchema))
      ),
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
    emailClaim: ['emailClaim', optional(string())],
    keyId: ['keyId', optional(string())],
    uniqueIdClaim: ['uniqueIdClaim', optional(string())],
    useNameIdForEmail: ['useNameIdForEmail', optional(boolean())],
    usernameClaim: ['usernameClaim', optional(string())],
  }
);