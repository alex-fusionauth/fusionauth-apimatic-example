/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface SMSMessage {
  phoneNumber?: string;
  textMessage?: string;
}

export const sMSMessageSchema: Schema<SMSMessage> = object({
  phoneNumber: ['phoneNumber', optional(string())],
  textMessage: ['textMessage', optional(string())],
});