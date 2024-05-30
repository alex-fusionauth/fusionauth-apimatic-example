/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  UserCommentSearchCriteria,
  userCommentSearchCriteriaSchema,
} from './userCommentSearchCriteria';

/** Search request for user comments */
export interface UserCommentSearchRequest {
  /** Search criteria for user comments. */
  search?: UserCommentSearchCriteria;
}

export const userCommentSearchRequestSchema: Schema<UserCommentSearchRequest> = object(
  { search: ['search', optional(lazy(() => userCommentSearchCriteriaSchema))] }
);
