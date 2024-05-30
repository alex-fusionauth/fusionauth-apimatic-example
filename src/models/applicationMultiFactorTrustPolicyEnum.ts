/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ApplicationMultiFactorTrustPolicyEnum
 */
export enum ApplicationMultiFactorTrustPolicyEnum {
  Any = 'Any',
  This = 'This',
  None = 'None',
}

/**
 * Schema for ApplicationMultiFactorTrustPolicyEnum
 */
export const  applicationMultiFactorTrustPolicyEnumSchema: Schema<ApplicationMultiFactorTrustPolicyEnum> = stringEnum(ApplicationMultiFactorTrustPolicyEnum);
