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
  PublicKeyCredentialDescriptor,
  publicKeyCredentialDescriptorSchema,
} from './publicKeyCredentialDescriptor';
import {
  UserVerificationRequirementEnum,
  userVerificationRequirementEnumSchema,
} from './userVerificationRequirementEnum';

/** Provides the <i>authenticator<i> with the data it needs to generate an assertion. */
export interface PublicKeyCredentialRequestOptions {
  allowCredentials?: PublicKeyCredentialDescriptor[];
  challenge?: string;
  rpId?: string;
  timeout?: bigint;
  /** Used to express whether the Relying Party requires <a href="https:www.w3.orgTRwebauthn-2#user-verification">user verification<a> for the  current operation. */
  userVerification?: UserVerificationRequirementEnum;
}

export const publicKeyCredentialRequestOptionsSchema: Schema<PublicKeyCredentialRequestOptions> = object(
  {
    allowCredentials: [
      'allowCredentials',
      optional(array(lazy(() => publicKeyCredentialDescriptorSchema))),
    ],
    challenge: ['challenge', optional(string())],
    rpId: ['rpId', optional(string())],
    timeout: ['timeout', optional(bigint())],
    userVerification: [
      'userVerification',
      optional(userVerificationRequirementEnumSchema),
    ],
  }
);
