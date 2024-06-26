/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, lazy, object, optional, Schema } from '../schema';
import { Webhook, webhookSchema } from './webhook';

/** Webhook search response */
export interface WebhookSearchResponse {
  total?: bigint;
  webhooks?: Webhook[];
}

export const webhookSearchResponseSchema: Schema<WebhookSearchResponse> = object(
  {
    total: ['total', optional(bigint())],
    webhooks: ['webhooks', optional(array(lazy(() => webhookSchema)))],
  }
);
