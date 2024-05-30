/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  ApplicationMultiFactorTrustPolicyEnum,
  applicationMultiFactorTrustPolicyEnumSchema,
} from './applicationMultiFactorTrustPolicyEnum';
import {
  MultiFactorEmailTemplate,
  multiFactorEmailTemplateSchema,
} from './multiFactorEmailTemplate';
import {
  MultiFactorLoginPolicyEnum,
  multiFactorLoginPolicyEnumSchema,
} from './multiFactorLoginPolicyEnum';
import {
  MultiFactorSMSTemplate,
  multiFactorSMSTemplateSchema,
} from './multiFactorSMSTemplate';

export interface ApplicationMultiFactorConfiguration {
  email?: MultiFactorEmailTemplate;
  loginPolicy?: MultiFactorLoginPolicyEnum;
  sms?: MultiFactorSMSTemplate;
  trustPolicy?: ApplicationMultiFactorTrustPolicyEnum;
}

export const applicationMultiFactorConfigurationSchema: Schema<ApplicationMultiFactorConfiguration> = object(
  {
    email: ['email', optional(lazy(() => multiFactorEmailTemplateSchema))],
    loginPolicy: ['loginPolicy', optional(multiFactorLoginPolicyEnumSchema)],
    sms: ['sms', optional(lazy(() => multiFactorSMSTemplateSchema))],
    trustPolicy: [
      'trustPolicy',
      optional(applicationMultiFactorTrustPolicyEnumSchema),
    ],
  }
);