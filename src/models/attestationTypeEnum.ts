/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AttestationTypeEnum
 */
export enum AttestationTypeEnum {
  Basic = 'basic',
  Self = 'self',
  AttestationCa = 'attestationCa',
  AnonymizationCa = 'anonymizationCa',
  None = 'none',
}

/**
 * Schema for AttestationTypeEnum
 */
export const  attestationTypeEnumSchema: Schema<AttestationTypeEnum> = stringEnum(AttestationTypeEnum);
