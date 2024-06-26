/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema } from '../schema';
import {
  LoginRecordSearchCriteria,
  loginRecordSearchCriteriaSchema,
} from './loginRecordSearchCriteria';

export interface LoginRecordSearchRequest {
  retrieveTotal?: boolean;
  search?: LoginRecordSearchCriteria;
}

export const loginRecordSearchRequestSchema: Schema<LoginRecordSearchRequest> = object(
  {
    retrieveTotal: ['retrieveTotal', optional(boolean())],
    search: ['search', optional(lazy(() => loginRecordSearchCriteriaSchema))],
  }
);
