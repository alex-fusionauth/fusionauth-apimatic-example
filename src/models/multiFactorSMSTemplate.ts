/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface MultiFactorSMSTemplate {
  templateId?: string;
}

export const multiFactorSMSTemplateSchema: Schema<MultiFactorSMSTemplate> = object(
  { templateId: ['templateId', optional(string())] }
);
