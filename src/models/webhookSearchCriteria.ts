/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** Search criteria for webhooks. */
export interface WebhookSearchCriteria {
  description?: string;
  tenantId?: string;
  url?: string;
  numberOfResults?: number;
  orderBy?: string;
  startRow?: number;
}

export const webhookSearchCriteriaSchema: Schema<WebhookSearchCriteria> = object(
  {
    description: ['description', optional(string())],
    tenantId: ['tenantId', optional(string())],
    url: ['url', optional(string())],
    numberOfResults: ['numberOfResults', optional(number())],
    orderBy: ['orderBy', optional(string())],
    startRow: ['startRow', optional(number())],
  }
);
