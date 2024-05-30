/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ObjectStateEnum
 */
export enum ObjectStateEnum {
  Active = 'Active',
  Inactive = 'Inactive',
  PendingDelete = 'PendingDelete',
}

/**
 * Schema for ObjectStateEnum
 */
export const  objectStateEnumSchema: Schema<ObjectStateEnum> = stringEnum(ObjectStateEnum);
