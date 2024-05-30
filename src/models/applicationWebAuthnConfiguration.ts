/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema } from '../schema';
import {
  ApplicationWebAuthnWorkflowConfiguration,
  applicationWebAuthnWorkflowConfigurationSchema,
} from './applicationWebAuthnWorkflowConfiguration';

/** Application-level configuration for WebAuthn */
export interface ApplicationWebAuthnConfiguration {
  bootstrapWorkflow?: ApplicationWebAuthnWorkflowConfiguration;
  reauthenticationWorkflow?: ApplicationWebAuthnWorkflowConfiguration;
  enabled?: boolean;
}

export const applicationWebAuthnConfigurationSchema: Schema<ApplicationWebAuthnConfiguration> = object(
  {
    bootstrapWorkflow: [
      'bootstrapWorkflow',
      optional(lazy(() => applicationWebAuthnWorkflowConfigurationSchema)),
    ],
    reauthenticationWorkflow: [
      'reauthenticationWorkflow',
      optional(lazy(() => applicationWebAuthnWorkflowConfigurationSchema)),
    ],
    enabled: ['enabled', optional(boolean())],
  }
);
