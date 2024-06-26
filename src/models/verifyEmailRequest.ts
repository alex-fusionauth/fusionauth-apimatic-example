/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { EventInfo, eventInfoSchema } from './eventInfo';

export interface VerifyEmailRequest {
  oneTimeCode?: string;
  userId?: string;
  verificationId?: string;
  /** Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). */
  eventInfo?: EventInfo;
}

export const verifyEmailRequestSchema: Schema<VerifyEmailRequest> = object({
  oneTimeCode: ['oneTimeCode', optional(string())],
  userId: ['userId', optional(string())],
  verificationId: ['verificationId', optional(string())],
  eventInfo: ['eventInfo', optional(lazy(() => eventInfoSchema))],
});
