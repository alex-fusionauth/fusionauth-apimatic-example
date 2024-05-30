/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  PublicKeyCredentialRequestOptions,
  publicKeyCredentialRequestOptionsSchema,
} from './publicKeyCredentialRequestOptions';

/** API response for starting a WebAuthn authentication ceremony */
export interface WebAuthnStartResponse {
  /** Provides the <i>authenticator<i> with the data it needs to generate an assertion. */
  options?: PublicKeyCredentialRequestOptions;
}

export const webAuthnStartResponseSchema: Schema<WebAuthnStartResponse> = object(
  {
    options: [
      'options',
      optional(lazy(() => publicKeyCredentialRequestOptionsSchema)),
    ],
  }
);
