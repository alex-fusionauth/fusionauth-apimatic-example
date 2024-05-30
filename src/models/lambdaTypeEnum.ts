/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for LambdaTypeEnum
 */
export enum LambdaTypeEnum {
  JWTPopulate = 'JWTPopulate',
  OpenIDReconcile = 'OpenIDReconcile',
  SAMLv2Reconcile = 'SAMLv2Reconcile',
  SAMLv2Populate = 'SAMLv2Populate',
  AppleReconcile = 'AppleReconcile',
  ExternalJWTReconcile = 'ExternalJWTReconcile',
  FacebookReconcile = 'FacebookReconcile',
  GoogleReconcile = 'GoogleReconcile',
  HYPRReconcile = 'HYPRReconcile',
  TwitterReconcile = 'TwitterReconcile',
  LDAPConnectorReconcile = 'LDAPConnectorReconcile',
  LinkedInReconcile = 'LinkedInReconcile',
  EpicGamesReconcile = 'EpicGamesReconcile',
  NintendoReconcile = 'NintendoReconcile',
  SonyPSNReconcile = 'SonyPSNReconcile',
  SteamReconcile = 'SteamReconcile',
  TwitchReconcile = 'TwitchReconcile',
  XboxReconcile = 'XboxReconcile',
  ClientCredentialsJWTPopulate = 'ClientCredentialsJWTPopulate',
  SCIMServerGroupRequestConverter = 'SCIMServerGroupRequestConverter',
  SCIMServerGroupResponseConverter = 'SCIMServerGroupResponseConverter',
  SCIMServerUserRequestConverter = 'SCIMServerUserRequestConverter',
  SCIMServerUserResponseConverter = 'SCIMServerUserResponseConverter',
  SelfServiceRegistrationValidation = 'SelfServiceRegistrationValidation',
  UserInfoPopulate = 'UserInfoPopulate',
}

/**
 * Schema for LambdaTypeEnum
 */
export const  lambdaTypeEnumSchema: Schema<LambdaTypeEnum> = stringEnum(LambdaTypeEnum);