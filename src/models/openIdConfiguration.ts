/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, object, optional, Schema, string } from '../schema';

/** OpenID Connect Configuration as described by the <a href="https:openid.netspecsopenid-connect-discovery-1_0.html#ProviderMetadata">OpenID  Provider Metadata<a>. */
export interface OpenIdConfiguration {
  authorizationEndpoint?: string;
  backchannelLogoutSupported?: boolean;
  claimsSupported?: string[];
  deviceAuthorizationEndpoint?: string;
  endSessionEndpoint?: string;
  frontchannelLogoutSupported?: boolean;
  grantTypesSupported?: string[];
  idTokenSigningAlgValuesSupported?: string[];
  issuer?: string;
  jwksUri?: string;
  responseModesSupported?: string[];
  responseTypesSupported?: string[];
  scopesSupported?: string[];
  subjectTypesSupported?: string[];
  tokenEndpoint?: string;
  tokenEndpointAuthMethodsSupported?: string[];
  userinfoEndpoint?: string;
  userinfoSigningAlgValuesSupported?: string[];
}

export const openIdConfigurationSchema: Schema<OpenIdConfiguration> = object({
  authorizationEndpoint: ['authorization_endpoint', optional(string())],
  backchannelLogoutSupported: [
    'backchannel_logout_supported',
    optional(boolean()),
  ],
  claimsSupported: ['claims_supported', optional(array(string()))],
  deviceAuthorizationEndpoint: [
    'device_authorization_endpoint',
    optional(string()),
  ],
  endSessionEndpoint: ['end_session_endpoint', optional(string())],
  frontchannelLogoutSupported: [
    'frontchannel_logout_supported',
    optional(boolean()),
  ],
  grantTypesSupported: ['grant_types_supported', optional(array(string()))],
  idTokenSigningAlgValuesSupported: [
    'id_token_signing_alg_values_supported',
    optional(array(string())),
  ],
  issuer: ['issuer', optional(string())],
  jwksUri: ['jwks_uri', optional(string())],
  responseModesSupported: [
    'response_modes_supported',
    optional(array(string())),
  ],
  responseTypesSupported: [
    'response_types_supported',
    optional(array(string())),
  ],
  scopesSupported: ['scopes_supported', optional(array(string()))],
  subjectTypesSupported: ['subject_types_supported', optional(array(string()))],
  tokenEndpoint: ['token_endpoint', optional(string())],
  tokenEndpointAuthMethodsSupported: [
    'token_endpoint_auth_methods_supported',
    optional(array(string())),
  ],
  userinfoEndpoint: ['userinfo_endpoint', optional(string())],
  userinfoSigningAlgValuesSupported: [
    'userinfo_signing_alg_values_supported',
    optional(array(string())),
  ],
});
