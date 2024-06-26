/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { MessageTemplate, messageTemplateSchema } from './messageTemplate';

export interface MessageTemplateResponse {
  /** Stores an message template used to distribute messages; */
  messageTemplate?: MessageTemplate;
  messageTemplates?: MessageTemplate[];
}

export const messageTemplateResponseSchema: Schema<MessageTemplateResponse> = object(
  {
    messageTemplate: [
      'messageTemplate',
      optional(lazy(() => messageTemplateSchema)),
    ],
    messageTemplates: [
      'messageTemplates',
      optional(array(lazy(() => messageTemplateSchema))),
    ],
  }
);
