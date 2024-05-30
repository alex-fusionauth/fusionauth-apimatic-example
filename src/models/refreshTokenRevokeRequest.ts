/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { EventInfo, eventInfoSchema } from './eventInfo';

/** Request for the Refresh Token API to revoke a refresh token rather than using the URL parameters. */
export interface RefreshTokenRevokeRequest {
  applicationId?: string;
  token?: string;
  userId?: string;
  /** Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). */
  eventInfo?: EventInfo;
}

export const refreshTokenRevokeRequestSchema: Schema<RefreshTokenRevokeRequest> = object(
  {
    applicationId: ['applicationId', optional(string())],
    token: ['token', optional(string())],
    userId: ['userId', optional(string())],
    eventInfo: ['eventInfo', optional(lazy(() => eventInfoSchema))],
  }
);