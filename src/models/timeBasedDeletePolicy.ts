/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, boolean, number, object, optional, Schema } from '../schema';

/** A policy for deleting Users based upon some external criteria. */
export interface TimeBasedDeletePolicy {
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  enabledInstant?: bigint;
  numberOfDaysToRetain?: number;
  enabled?: boolean;
}

export const timeBasedDeletePolicySchema: Schema<TimeBasedDeletePolicy> = object(
  {
    enabledInstant: ['enabledInstant', optional(bigint())],
    numberOfDaysToRetain: ['numberOfDaysToRetain', optional(number())],
    enabled: ['enabled', optional(boolean())],
  }
);
