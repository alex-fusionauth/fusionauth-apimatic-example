/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, lazy, object, optional, Schema, string } from '../schema';
import { EventInfo, eventInfoSchema } from './eventInfo';
import { EventTypeEnum, eventTypeEnumSchema } from './eventTypeEnum';
import { User, userSchema } from './user';

/** Models the User Created Event.  <p>  This is different than the user.create event in that it will be sent after the user has been created. This event cannot be made transactional. */
export interface UserCreateCompleteEvent {
  /** The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. */
  user?: User;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  createInstant?: bigint;
  id?: string;
  /** Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). */
  info?: EventInfo;
  tenantId?: string;
  /** Models the event types that FusionAuth produces. */
  type?: EventTypeEnum;
}

export const userCreateCompleteEventSchema: Schema<UserCreateCompleteEvent> = object(
  {
    user: ['user', optional(lazy(() => userSchema))],
    createInstant: ['createInstant', optional(bigint())],
    id: ['id', optional(string())],
    info: ['info', optional(lazy(() => eventInfoSchema))],
    tenantId: ['tenantId', optional(string())],
    type: ['type', optional(eventTypeEnumSchema)],
  }
);
