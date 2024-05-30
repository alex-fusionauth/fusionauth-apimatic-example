/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  dict,
  lazy,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { Location, locationSchema } from './location';

/** Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). */
export interface EventInfo {
  data?: Record<string, unknown>;
  deviceDescription?: string;
  deviceName?: string;
  deviceType?: string;
  ipAddress?: string;
  /** Location information. Useful for IP addresses and other displayable data objects. */
  location?: Location;
  os?: string;
  userAgent?: string;
}

export const eventInfoSchema: Schema<EventInfo> = object({
  data: ['data', optional(dict(unknown()))],
  deviceDescription: ['deviceDescription', optional(string())],
  deviceName: ['deviceName', optional(string())],
  deviceType: ['deviceType', optional(string())],
  ipAddress: ['ipAddress', optional(string())],
  location: ['location', optional(lazy(() => locationSchema))],
  os: ['os', optional(string())],
  userAgent: ['userAgent', optional(string())],
});