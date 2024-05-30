/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema, string } from '../schema';

/** A log for an event that happened to a User. */
export interface UserComment {
  comment?: string;
  commenterId?: string;
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  userId?: string;
}

export const userCommentSchema: Schema<UserComment> = object({
  comment: ['comment', optional(string())],
  commenterId: ['commenterId', optional(string())],
  id: ['id', optional(string())],
  insertInstant: ['insertInstant', optional(bigint())],
  userId: ['userId', optional(string())],
});