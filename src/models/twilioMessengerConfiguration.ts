/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  dict,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { MessengerTypeEnum, messengerTypeEnumSchema } from './messengerTypeEnum';

export interface TwilioMessengerConfiguration {
  accountSID?: string;
  authToken?: string;
  fromPhoneNumber?: string;
  messagingServiceSid?: string;
  url?: string;
  data?: Record<string, unknown>;
  debug?: boolean;
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  lastUpdateInstant?: bigint;
  name?: string;
  transport?: string;
  type?: MessengerTypeEnum;
}

export const twilioMessengerConfigurationSchema: Schema<TwilioMessengerConfiguration> = object(
  {
    accountSID: ['accountSID', optional(string())],
    authToken: ['authToken', optional(string())],
    fromPhoneNumber: ['fromPhoneNumber', optional(string())],
    messagingServiceSid: ['messagingServiceSid', optional(string())],
    url: ['url', optional(string())],
    data: ['data', optional(dict(unknown()))],
    debug: ['debug', optional(boolean())],
    id: ['id', optional(string())],
    insertInstant: ['insertInstant', optional(bigint())],
    lastUpdateInstant: ['lastUpdateInstant', optional(bigint())],
    name: ['name', optional(string())],
    transport: ['transport', optional(string())],
    type: ['type', optional(messengerTypeEnumSchema)],
  }
);
