/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema, string } from '../schema';

export interface DeviceInfo {
  description?: string;
  lastAccessedAddress?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  lastAccessedInstant?: bigint;
  name?: string;
  type?: string;
}

export const deviceInfoSchema: Schema<DeviceInfo> = object({
  description: ['description', optional(string())],
  lastAccessedAddress: ['lastAccessedAddress', optional(string())],
  lastAccessedInstant: ['lastAccessedInstant', optional(bigint())],
  name: ['name', optional(string())],
  type: ['type', optional(string())],
});