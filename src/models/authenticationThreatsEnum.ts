/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthenticationThreatsEnum
 */
export enum AuthenticationThreatsEnum {
  ImpossibleTravel = 'ImpossibleTravel',
}

/**
 * Schema for AuthenticationThreatsEnum
 */
export const  authenticationThreatsEnumSchema: Schema<AuthenticationThreatsEnum> = stringEnum(AuthenticationThreatsEnum);
