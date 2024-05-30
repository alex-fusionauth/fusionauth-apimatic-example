/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, lazy, object, optional, Schema } from '../schema';
import { EventLog, eventLogSchema } from './eventLog';

/** Event log response. */
export interface EventLogSearchResponse {
  eventLogs?: EventLog[];
  total?: bigint;
}

export const eventLogSearchResponseSchema: Schema<EventLogSearchResponse> = object(
  {
    eventLogs: ['eventLogs', optional(array(lazy(() => eventLogSchema)))],
    total: ['total', optional(bigint())],
  }
);