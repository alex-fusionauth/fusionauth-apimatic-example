/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema, string, unknown } from '../schema';

/** Models action reasons. */
export interface UserActionReason {
  code?: string;
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  lastUpdateInstant?: bigint;
  /** Models a set of localized Strings that can be stored as JSON. */
  localizedTexts?: unknown;
  text?: string;
}

export const userActionReasonSchema: Schema<UserActionReason> = object({
  code: ['code', optional(string())],
  id: ['id', optional(string())],
  insertInstant: ['insertInstant', optional(bigint())],
  lastUpdateInstant: ['lastUpdateInstant', optional(bigint())],
  localizedTexts: ['localizedTexts', optional(unknown())],
  text: ['text', optional(string())],
});