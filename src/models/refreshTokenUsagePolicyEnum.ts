/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RefreshTokenUsagePolicyEnum
 */
export enum RefreshTokenUsagePolicyEnum {
  Reusable = 'Reusable',
  OneTimeUse = 'OneTimeUse',
}

/**
 * Schema for RefreshTokenUsagePolicyEnum
 */
export const  refreshTokenUsagePolicyEnumSchema: Schema<RefreshTokenUsagePolicyEnum> = stringEnum(RefreshTokenUsagePolicyEnum);