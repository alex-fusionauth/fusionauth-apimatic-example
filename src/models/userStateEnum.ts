/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UserStateEnum
 */
export enum UserStateEnum {
  Authenticated = 'Authenticated',
  AuthenticatedNotRegistered = 'AuthenticatedNotRegistered',
  AuthenticatedNotVerified = 'AuthenticatedNotVerified',
  AuthenticatedRegistrationNotVerified = 'AuthenticatedRegistrationNotVerified',
}

/**
 * Schema for UserStateEnum
 */
export const  userStateEnumSchema: Schema<UserStateEnum> = stringEnum(UserStateEnum);
