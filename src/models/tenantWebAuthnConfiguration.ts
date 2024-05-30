/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import {
  TenantWebAuthnWorkflowConfiguration,
  tenantWebAuthnWorkflowConfigurationSchema,
} from './tenantWebAuthnWorkflowConfiguration';

/** Tenant-level configuration for WebAuthn */
export interface TenantWebAuthnConfiguration {
  bootstrapWorkflow?: TenantWebAuthnWorkflowConfiguration;
  debug?: boolean;
  reauthenticationWorkflow?: TenantWebAuthnWorkflowConfiguration;
  relyingPartyId?: string;
  relyingPartyName?: string;
  enabled?: boolean;
}

export const tenantWebAuthnConfigurationSchema: Schema<TenantWebAuthnConfiguration> = object(
  {
    bootstrapWorkflow: [
      'bootstrapWorkflow',
      optional(lazy(() => tenantWebAuthnWorkflowConfigurationSchema)),
    ],
    debug: ['debug', optional(boolean())],
    reauthenticationWorkflow: [
      'reauthenticationWorkflow',
      optional(lazy(() => tenantWebAuthnWorkflowConfigurationSchema)),
    ],
    relyingPartyId: ['relyingPartyId', optional(string())],
    relyingPartyName: ['relyingPartyName', optional(string())],
    enabled: ['enabled', optional(boolean())],
  }
);