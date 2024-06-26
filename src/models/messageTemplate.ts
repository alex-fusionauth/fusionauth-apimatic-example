/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  dict,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { MessageTypeEnum, messageTypeEnumSchema } from './messageTypeEnum';

/** Stores an message template used to distribute messages; */
export interface MessageTemplate {
  data?: Record<string, unknown>;
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  lastUpdateInstant?: bigint;
  name?: string;
  type?: MessageTypeEnum;
}

export const messageTemplateSchema: Schema<MessageTemplate> = object({
  data: ['data', optional(dict(unknown()))],
  id: ['id', optional(string())],
  insertInstant: ['insertInstant', optional(bigint())],
  lastUpdateInstant: ['lastUpdateInstant', optional(bigint())],
  name: ['name', optional(string())],
  type: ['type', optional(messageTypeEnumSchema)],
});
