/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  EventLogSearchCriteria,
  eventLogSearchCriteriaSchema,
} from './eventLogSearchCriteria';

export interface EventLogSearchRequest {
  /** Search criteria for the event log. */
  search?: EventLogSearchCriteria;
}

export const eventLogSearchRequestSchema: Schema<EventLogSearchRequest> = object(
  { search: ['search', optional(lazy(() => eventLogSearchCriteriaSchema))] }
);
