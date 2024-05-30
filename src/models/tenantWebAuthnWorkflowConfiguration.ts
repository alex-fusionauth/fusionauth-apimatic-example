/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';
import {
  AuthenticatorAttachmentPreferenceEnum,
  authenticatorAttachmentPreferenceEnumSchema,
} from './authenticatorAttachmentPreferenceEnum';
import {
  UserVerificationRequirementEnum,
  userVerificationRequirementEnumSchema,
} from './userVerificationRequirementEnum';

export interface TenantWebAuthnWorkflowConfiguration {
  /** Describes the authenticator attachment modality preference for a WebAuthn workflow. See {@link AuthenticatorAttachment} */
  authenticatorAttachmentPreference?: AuthenticatorAttachmentPreferenceEnum;
  /** Used to express whether the Relying Party requires <a href="https:www.w3.orgTRwebauthn-2#user-verification">user verification<a> for the  current operation. */
  userVerificationRequirement?: UserVerificationRequirementEnum;
  enabled?: boolean;
}

export const tenantWebAuthnWorkflowConfigurationSchema: Schema<TenantWebAuthnWorkflowConfiguration> = object(
  {
    authenticatorAttachmentPreference: [
      'authenticatorAttachmentPreference',
      optional(authenticatorAttachmentPreferenceEnumSchema),
    ],
    userVerificationRequirement: [
      'userVerificationRequirement',
      optional(userVerificationRequirementEnumSchema),
    ],
    enabled: ['enabled', optional(boolean())],
  }
);
