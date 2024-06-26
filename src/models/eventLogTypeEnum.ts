/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EventLogTypeEnum
 */
export enum EventLogTypeEnum {
  Information = 'Information',
  Debug = 'Debug',
  Error = 'Error',
}

/**
 * Schema for EventLogTypeEnum
 */
export const  eventLogTypeEnumSchema: Schema<EventLogTypeEnum> = stringEnum(EventLogTypeEnum);
