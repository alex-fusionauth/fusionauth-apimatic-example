/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RegistrationTypeEnum
 */
export enum RegistrationTypeEnum {
  Basic = 'basic',
  Advanced = 'advanced',
}

/**
 * Schema for RegistrationTypeEnum
 */
export const  registrationTypeEnumSchema: Schema<RegistrationTypeEnum> = stringEnum(RegistrationTypeEnum);
