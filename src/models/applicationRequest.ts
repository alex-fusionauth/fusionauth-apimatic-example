/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Application, applicationSchema } from './application';
import { ApplicationRole, applicationRoleSchema } from './applicationRole';
import { EventInfo, eventInfoSchema } from './eventInfo';

/** The Application API request object. */
export interface ApplicationRequest {
  application?: Application;
  /** A role given to a user for a specific application. */
  role?: ApplicationRole;
  sourceApplicationId?: string;
  /** Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). */
  eventInfo?: EventInfo;
}

export const applicationRequestSchema: Schema<ApplicationRequest> = object({
  application: ['application', optional(lazy(() => applicationSchema))],
  role: ['role', optional(lazy(() => applicationRoleSchema))],
  sourceApplicationId: ['sourceApplicationId', optional(string())],
  eventInfo: ['eventInfo', optional(lazy(() => eventInfoSchema))],
});