/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema } from '../schema';
import { ActionData, actionDataSchema } from './actionData';
import { EventInfo, eventInfoSchema } from './eventInfo';

/** The user action request object. */
export interface ActionRequest {
  action?: ActionData;
  broadcast?: boolean;
  /** Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). */
  eventInfo?: EventInfo;
}

export const actionRequestSchema: Schema<ActionRequest> = object({
  action: ['action', optional(lazy(() => actionDataSchema))],
  broadcast: ['broadcast', optional(boolean())],
  eventInfo: ['eventInfo', optional(lazy(() => eventInfoSchema))],
});
