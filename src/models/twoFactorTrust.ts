/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema, string } from '../schema';

export interface TwoFactorTrust {
  applicationId?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  expiration?: bigint;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  startInstant?: bigint;
}

export const twoFactorTrustSchema: Schema<TwoFactorTrust> = object({
  applicationId: ['applicationId', optional(string())],
  expiration: ['expiration', optional(bigint())],
  startInstant: ['startInstant', optional(bigint())],
});