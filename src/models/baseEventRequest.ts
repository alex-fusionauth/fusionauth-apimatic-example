/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { EventInfo, eventInfoSchema } from './eventInfo';

/** Base class for requests that can contain event information. This event information is used when sending Webhooks or emails  during the transaction. The caller is responsible for ensuring that the event information is correct. */
export interface BaseEventRequest {
  /** Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). */
  eventInfo?: EventInfo;
}

export const baseEventRequestSchema: Schema<BaseEventRequest> = object({
  eventInfo: ['eventInfo', optional(lazy(() => eventInfoSchema))],
});