/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, object, optional, Schema, string, unknown } from '../schema';
import {
  WebAuthnWorkflowEnum,
  webAuthnWorkflowEnumSchema,
} from './webAuthnWorkflowEnum';

/** API request to start a WebAuthn authentication ceremony */
export interface WebAuthnStartRequest {
  applicationId?: string;
  credentialId?: string;
  loginId?: string;
  state?: Record<string, unknown>;
  userId?: string;
  /** Identifies the WebAuthn workflow. This will affect the parameters used for credential creation  and request based on the Tenant configuration. */
  workflow?: WebAuthnWorkflowEnum;
}

export const webAuthnStartRequestSchema: Schema<WebAuthnStartRequest> = object({
  applicationId: ['applicationId', optional(string())],
  credentialId: ['credentialId', optional(string())],
  loginId: ['loginId', optional(string())],
  state: ['state', optional(dict(unknown()))],
  userId: ['userId', optional(string())],
  workflow: ['workflow', optional(webAuthnWorkflowEnumSchema)],
});
