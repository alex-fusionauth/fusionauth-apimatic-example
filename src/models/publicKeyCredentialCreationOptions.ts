/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AttestationConveyancePreferenceEnum,
  attestationConveyancePreferenceEnumSchema,
} from './attestationConveyancePreferenceEnum';
import {
  AuthenticatorSelectionCriteria,
  authenticatorSelectionCriteriaSchema,
} from './authenticatorSelectionCriteria';
import {
  PublicKeyCredentialDescriptor,
  publicKeyCredentialDescriptorSchema,
} from './publicKeyCredentialDescriptor';
import {
  PublicKeyCredentialParameters,
  publicKeyCredentialParametersSchema,
} from './publicKeyCredentialParameters';
import {
  PublicKeyCredentialRelyingPartyEntity,
  publicKeyCredentialRelyingPartyEntitySchema,
} from './publicKeyCredentialRelyingPartyEntity';
import {
  PublicKeyCredentialUserEntity,
  publicKeyCredentialUserEntitySchema,
} from './publicKeyCredentialUserEntity';
import {
  WebAuthnRegistrationExtensionOptions,
  webAuthnRegistrationExtensionOptionsSchema,
} from './webAuthnRegistrationExtensionOptions';

/** Allows the Relying Party to specify desired attributes of a new credential. */
export interface PublicKeyCredentialCreationOptions {
  /** Used to communicate whether and how authenticator attestation should be delivered to the Relying Party */
  attestation?: AttestationConveyancePreferenceEnum;
  /** Used by the Relying Party to specify their requirements for authenticator attributes. Fields use the deprecated "resident key" terminology to refer  to client-side discoverable credentials to maintain backwards compatibility with WebAuthn Level 1. */
  authenticatorSelection?: AuthenticatorSelectionCriteria;
  challenge?: string;
  excludeCredentials?: PublicKeyCredentialDescriptor[];
  /** Options to request extensions during credential registration */
  extensions?: WebAuthnRegistrationExtensionOptions;
  pubKeyCredParams?: PublicKeyCredentialParameters[];
  /** Supply additional information about the Relying Party when creating a new credential */
  rp?: PublicKeyCredentialRelyingPartyEntity;
  timeout?: bigint;
  /** Supply additional information about the user account when creating a new credential */
  user?: PublicKeyCredentialUserEntity;
}

export const publicKeyCredentialCreationOptionsSchema: Schema<PublicKeyCredentialCreationOptions> = object(
  {
    attestation: [
      'attestation',
      optional(attestationConveyancePreferenceEnumSchema),
    ],
    authenticatorSelection: [
      'authenticatorSelection',
      optional(lazy(() => authenticatorSelectionCriteriaSchema)),
    ],
    challenge: ['challenge', optional(string())],
    excludeCredentials: [
      'excludeCredentials',
      optional(array(lazy(() => publicKeyCredentialDescriptorSchema))),
    ],
    extensions: [
      'extensions',
      optional(lazy(() => webAuthnRegistrationExtensionOptionsSchema)),
    ],
    pubKeyCredParams: [
      'pubKeyCredParams',
      optional(array(lazy(() => publicKeyCredentialParametersSchema))),
    ],
    rp: [
      'rp',
      optional(lazy(() => publicKeyCredentialRelyingPartyEntitySchema)),
    ],
    timeout: ['timeout', optional(bigint())],
    user: ['user', optional(lazy(() => publicKeyCredentialUserEntitySchema))],
  }
);
