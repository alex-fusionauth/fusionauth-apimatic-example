/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
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
  GoogleIdentityProviderProperties,
  googleIdentityProviderPropertiesSchema,
} from './googleIdentityProviderProperties';
import {
  IdentityProviderLoginMethodEnum,
  identityProviderLoginMethodEnumSchema,
} from './identityProviderLoginMethodEnum';

export interface GoogleApplicationConfiguration {
  buttonText?: string;
  clientId?: string;
  clientSecret?: string;
  loginMethod?: IdentityProviderLoginMethodEnum;
  /** Google social login provider parameters. */
  properties?: GoogleIdentityProviderProperties;
  scope?: string;
  data?: Record<string, unknown>;
  createRegistration?: boolean;
}

export const googleApplicationConfigurationSchema: Schema<GoogleApplicationConfiguration> = object(
  {
    buttonText: ['buttonText', optional(string())],
    clientId: ['client_id', optional(string())],
    clientSecret: ['client_secret', optional(string())],
    loginMethod: [
      'loginMethod',
      optional(identityProviderLoginMethodEnumSchema),
    ],
    properties: [
      'properties',
      optional(lazy(() => googleIdentityProviderPropertiesSchema)),
    ],
    scope: ['scope', optional(string())],
    data: ['data', optional(dict(unknown()))],
    createRegistration: ['createRegistration', optional(boolean())],
  }
);