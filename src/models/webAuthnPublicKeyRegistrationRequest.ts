/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  WebAuthnAuthenticatorRegistrationResponse,
  webAuthnAuthenticatorRegistrationResponseSchema,
} from './webAuthnAuthenticatorRegistrationResponse';
import {
  WebAuthnExtensionsClientOutputs,
  webAuthnExtensionsClientOutputsSchema,
} from './webAuthnExtensionsClientOutputs';

/** Request to register a new public key with WebAuthn */
export interface WebAuthnPublicKeyRegistrationRequest {
  /** Contains extension output for requested extensions during a WebAuthn ceremony */
  clientExtensionResults?: WebAuthnExtensionsClientOutputs;
  id?: string;
  rpId?: string;
  /** The <i>authenticator's<i> response for the registration ceremony in its encoded format */
  response?: WebAuthnAuthenticatorRegistrationResponse;
  transports?: string[];
  type?: string;
}

export const webAuthnPublicKeyRegistrationRequestSchema: Schema<WebAuthnPublicKeyRegistrationRequest> = object(
  {
    clientExtensionResults: [
      'clientExtensionResults',
      optional(lazy(() => webAuthnExtensionsClientOutputsSchema)),
    ],
    id: ['id', optional(string())],
    rpId: ['rpId', optional(string())],
    response: [
      'response',
      optional(lazy(() => webAuthnAuthenticatorRegistrationResponseSchema)),
    ],
    transports: ['transports', optional(array(string()))],
    type: ['type', optional(string())],
  }
);
