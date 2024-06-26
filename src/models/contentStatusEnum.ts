/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ContentStatusEnum
 */
export enum ContentStatusEnum {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
}

/**
 * Schema for ContentStatusEnum
 */
export const  contentStatusEnumSchema: Schema<ContentStatusEnum> = stringEnum(ContentStatusEnum);
