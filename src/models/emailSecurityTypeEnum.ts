/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EmailSecurityTypeEnum
 */
export enum EmailSecurityTypeEnum {
  NONE = 'NONE',
  SSL = 'SSL',
  TLS = 'TLS',
}

/**
 * Schema for EmailSecurityTypeEnum
 */
export const  emailSecurityTypeEnumSchema: Schema<EmailSecurityTypeEnum> = stringEnum(EmailSecurityTypeEnum);
