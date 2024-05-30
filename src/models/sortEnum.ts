/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SortEnum
 */
export enum SortEnum {
  Asc = 'asc',
  Desc = 'desc',
}

/**
 * Schema for SortEnum
 */
export const  sortEnumSchema: Schema<SortEnum> = stringEnum(SortEnum);