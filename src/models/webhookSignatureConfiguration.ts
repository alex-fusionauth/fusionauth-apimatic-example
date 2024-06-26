/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

/** Configuration for signing webhooks. */
export interface WebhookSignatureConfiguration {
  signingKeyId?: string;
  enabled?: boolean;
}

export const webhookSignatureConfigurationSchema: Schema<WebhookSignatureConfiguration> = object(
  {
    signingKeyId: ['signingKeyId', optional(string())],
    enabled: ['enabled', optional(boolean())],
  }
);
