/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { EventInfo, eventInfoSchema } from './eventInfo';

/** User API delete request object. */
export interface UserDeleteRequest {
  dryRun?: boolean;
  hardDelete?: boolean;
  limit?: number;
  query?: string;
  queryString?: string;
  userIds?: string[];
  /** Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). */
  eventInfo?: EventInfo;
}

export const userDeleteRequestSchema: Schema<UserDeleteRequest> = object({
  dryRun: ['dryRun', optional(boolean())],
  hardDelete: ['hardDelete', optional(boolean())],
  limit: ['limit', optional(number())],
  query: ['query', optional(string())],
  queryString: ['queryString', optional(string())],
  userIds: ['userIds', optional(array(string()))],
  eventInfo: ['eventInfo', optional(lazy(() => eventInfoSchema))],
});
