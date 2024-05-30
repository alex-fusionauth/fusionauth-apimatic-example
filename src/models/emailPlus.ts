/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface EmailPlus {
  emailTemplateId?: string;
  maximumTimeToSendEmailInHours?: number;
  minimumTimeToSendEmailInHours?: number;
  enabled?: boolean;
}

export const emailPlusSchema: Schema<EmailPlus> = object({
  emailTemplateId: ['emailTemplateId', optional(string())],
  maximumTimeToSendEmailInHours: [
    'maximumTimeToSendEmailInHours',
    optional(number()),
  ],
  minimumTimeToSendEmailInHours: [
    'minimumTimeToSendEmailInHours',
    optional(number()),
  ],
  enabled: ['enabled', optional(boolean())],
});
