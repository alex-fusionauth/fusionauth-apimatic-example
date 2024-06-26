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

/** A User's membership into a Group */
export interface GroupMember {
  data?: Record<string, unknown>;
  groupId?: string;
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  userId?: string;
}

export const groupMemberSchema: Schema<GroupMember> = object({
  data: ['data', optional(dict(unknown()))],
  groupId: ['groupId', optional(string())],
  id: ['id', optional(string())],
  insertInstant: ['insertInstant', optional(bigint())],
  userId: ['userId', optional(string())],
});
