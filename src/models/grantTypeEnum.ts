/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for GrantTypeEnum
 */
export enum GrantTypeEnum {
  AuthorizationCode = 'authorization_code',
  Implicit = 'implicit',
  Password = 'password',
  ClientCredentials = 'client_credentials',
  RefreshToken = 'refresh_token',
  Unknown = 'unknown',
  DeviceCode = 'device_code',
}

/**
 * Schema for GrantTypeEnum
 */
export const  grantTypeEnumSchema: Schema<GrantTypeEnum> = stringEnum(GrantTypeEnum);
