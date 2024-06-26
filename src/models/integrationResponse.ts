/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Integrations, integrationsSchema } from './integrations';

/** The Integration Response */
export interface IntegrationResponse {
  /** Available Integrations */
  integrations?: Integrations;
}

export const integrationResponseSchema: Schema<IntegrationResponse> = object({
  integrations: ['integrations', optional(lazy(() => integrationsSchema))],
});
