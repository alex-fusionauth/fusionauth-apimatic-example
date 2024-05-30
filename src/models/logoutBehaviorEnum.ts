/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for LogoutBehaviorEnum
 */
export enum LogoutBehaviorEnum {
  RedirectOnly = 'RedirectOnly',
  AllApplications = 'AllApplications',
}

/**
 * Schema for LogoutBehaviorEnum
 */
export const  logoutBehaviorEnumSchema: Schema<LogoutBehaviorEnum> = stringEnum(LogoutBehaviorEnum);
