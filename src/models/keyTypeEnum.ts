/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for KeyTypeEnum
 */
export enum KeyTypeEnum {
  EC = 'EC',
  RSA = 'RSA',
  HMAC = 'HMAC',
}

/**
 * Schema for KeyTypeEnum
 */
export const  keyTypeEnumSchema: Schema<KeyTypeEnum> = stringEnum(KeyTypeEnum);
