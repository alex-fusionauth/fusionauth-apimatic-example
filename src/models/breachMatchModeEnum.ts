/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BreachMatchModeEnum
 */
export enum BreachMatchModeEnum {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

/**
 * Schema for BreachMatchModeEnum
 */
export const  breachMatchModeEnumSchema: Schema<BreachMatchModeEnum> = stringEnum(BreachMatchModeEnum);
