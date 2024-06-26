/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ReactorFeatureStatusEnum
 */
export enum ReactorFeatureStatusEnum {
  ACTIVE = 'ACTIVE',
  DISCONNECTED = 'DISCONNECTED',
  PENDING = 'PENDING',
  DISABLED = 'DISABLED',
  UNKNOWN = 'UNKNOWN',
}

/**
 * Schema for ReactorFeatureStatusEnum
 */
export const  reactorFeatureStatusEnumSchema: Schema<ReactorFeatureStatusEnum> = stringEnum(ReactorFeatureStatusEnum);
