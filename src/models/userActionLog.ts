/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { LogHistory, logHistorySchema } from './logHistory';

/** A log for an action that was taken on a User. */
export interface UserActionLog {
  actioneeUserId?: string;
  actionerUserId?: string;
  applicationIds?: string[];
  comment?: string;
  emailUserOnEnd?: boolean;
  endEventSent?: boolean;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  expiry?: bigint;
  /** A historical state of a user log event. Since events can be modified, this stores the historical state. */
  history?: LogHistory;
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  localizedName?: string;
  localizedOption?: string;
  localizedReason?: string;
  name?: string;
  notifyUserOnEnd?: boolean;
  option?: string;
  reason?: string;
  reasonCode?: string;
  userActionId?: string;
}

export const userActionLogSchema: Schema<UserActionLog> = object({
  actioneeUserId: ['actioneeUserId', optional(string())],
  actionerUserId: ['actionerUserId', optional(string())],
  applicationIds: ['applicationIds', optional(array(string()))],
  comment: ['comment', optional(string())],
  emailUserOnEnd: ['emailUserOnEnd', optional(boolean())],
  endEventSent: ['endEventSent', optional(boolean())],
  expiry: ['expiry', optional(bigint())],
  history: ['history', optional(lazy(() => logHistorySchema))],
  id: ['id', optional(string())],
  insertInstant: ['insertInstant', optional(bigint())],
  localizedName: ['localizedName', optional(string())],
  localizedOption: ['localizedOption', optional(string())],
  localizedReason: ['localizedReason', optional(string())],
  name: ['name', optional(string())],
  notifyUserOnEnd: ['notifyUserOnEnd', optional(boolean())],
  option: ['option', optional(string())],
  reason: ['reason', optional(string())],
  reasonCode: ['reasonCode', optional(string())],
  userActionId: ['userActionId', optional(string())],
});
