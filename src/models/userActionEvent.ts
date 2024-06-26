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
import { Email, emailSchema } from './email';
import { EventInfo, eventInfoSchema } from './eventInfo';
import { EventTypeEnum, eventTypeEnumSchema } from './eventTypeEnum';
import {
  UserActionPhaseEnum,
  userActionPhaseEnumSchema,
} from './userActionPhaseEnum';

/** Models the user action Event. */
export interface UserActionEvent {
  applicationIds?: string[];
  action?: string;
  actionId?: string;
  actioneeUserId?: string;
  actionerUserId?: string;
  comment?: string;
  /** This class is an abstraction of a simple email message. */
  email?: Email;
  emailedUser?: boolean;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  expiry?: bigint;
  localizedAction?: string;
  localizedDuration?: string;
  localizedOption?: string;
  localizedReason?: string;
  notifyUser?: boolean;
  option?: string;
  /** The phases of a time-based user action. */
  phase?: UserActionPhaseEnum;
  reason?: string;
  reasonCode?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  createInstant?: bigint;
  id?: string;
  /** Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). */
  info?: EventInfo;
  tenantId?: string;
  /** Models the event types that FusionAuth produces. */
  type?: EventTypeEnum;
}

export const userActionEventSchema: Schema<UserActionEvent> = object({
  applicationIds: ['applicationIds', optional(array(string()))],
  action: ['action', optional(string())],
  actionId: ['actionId', optional(string())],
  actioneeUserId: ['actioneeUserId', optional(string())],
  actionerUserId: ['actionerUserId', optional(string())],
  comment: ['comment', optional(string())],
  email: ['email', optional(lazy(() => emailSchema))],
  emailedUser: ['emailedUser', optional(boolean())],
  expiry: ['expiry', optional(bigint())],
  localizedAction: ['localizedAction', optional(string())],
  localizedDuration: ['localizedDuration', optional(string())],
  localizedOption: ['localizedOption', optional(string())],
  localizedReason: ['localizedReason', optional(string())],
  notifyUser: ['notifyUser', optional(boolean())],
  option: ['option', optional(string())],
  phase: ['phase', optional(userActionPhaseEnumSchema)],
  reason: ['reason', optional(string())],
  reasonCode: ['reasonCode', optional(string())],
  createInstant: ['createInstant', optional(bigint())],
  id: ['id', optional(string())],
  info: ['info', optional(lazy(() => eventInfoSchema))],
  tenantId: ['tenantId', optional(string())],
  type: ['type', optional(eventTypeEnumSchema)],
});
