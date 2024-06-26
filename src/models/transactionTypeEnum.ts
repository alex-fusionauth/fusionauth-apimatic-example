/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransactionTypeEnum
 */
export enum TransactionTypeEnum {
  None = 'None',
  Any = 'Any',
  SimpleMajority = 'SimpleMajority',
  SuperMajority = 'SuperMajority',
  AbsoluteMajority = 'AbsoluteMajority',
}

/**
 * Schema for TransactionTypeEnum
 */
export const  transactionTypeEnumSchema: Schema<TransactionTypeEnum> = stringEnum(TransactionTypeEnum);
