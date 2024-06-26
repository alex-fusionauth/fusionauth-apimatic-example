/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { EventInfo, eventInfoSchema } from './eventInfo';

/** Request for the Logout API that can be used as an alternative to URL parameters. */
export interface LogoutRequest {
  global?: boolean;
  refreshToken?: string;
  /** Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). */
  eventInfo?: EventInfo;
}

export const logoutRequestSchema: Schema<LogoutRequest> = object({
  global: ['global', optional(boolean())],
  refreshToken: ['refreshToken', optional(string())],
  eventInfo: ['eventInfo', optional(lazy(() => eventInfoSchema))],
});
