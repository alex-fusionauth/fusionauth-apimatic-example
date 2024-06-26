/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CoseAlgorithmIdentifierEnum
 */
export enum CoseAlgorithmIdentifierEnum {
  ES256 = 'ES256',
  ES384 = 'ES384',
  ES512 = 'ES512',
  RS256 = 'RS256',
  RS384 = 'RS384',
  RS512 = 'RS512',
  PS256 = 'PS256',
  PS384 = 'PS384',
  PS512 = 'PS512',
}

/**
 * Schema for CoseAlgorithmIdentifierEnum
 */
export const  coseAlgorithmIdentifierEnumSchema: Schema<CoseAlgorithmIdentifierEnum> = stringEnum(CoseAlgorithmIdentifierEnum);
