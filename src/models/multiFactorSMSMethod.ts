/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface MultiFactorSMSMethod {
  messengerId?: string;
  templateId?: string;
  enabled?: boolean;
}

export const multiFactorSMSMethodSchema: Schema<MultiFactorSMSMethod> = object({
  messengerId: ['messengerId', optional(string())],
  templateId: ['templateId', optional(string())],
  enabled: ['enabled', optional(boolean())],
});
