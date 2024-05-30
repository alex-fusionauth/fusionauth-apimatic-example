/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { MessageTemplate, messageTemplateSchema } from './messageTemplate';

/** A Message Template Request to the API */
export interface MessageTemplateRequest {
  /** Stores an message template used to distribute messages; */
  messageTemplate?: MessageTemplate;
}

export const messageTemplateRequestSchema: Schema<MessageTemplateRequest> = object(
  {
    messageTemplate: [
      'messageTemplate',
      optional(lazy(() => messageTemplateSchema)),
    ],
  }
);
