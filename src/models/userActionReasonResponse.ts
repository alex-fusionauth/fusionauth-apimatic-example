/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { UserActionReason, userActionReasonSchema } from './userActionReason';

/** User Action Reason API response object. */
export interface UserActionReasonResponse {
  /** Models action reasons. */
  userActionReason?: UserActionReason;
  userActionReasons?: UserActionReason[];
}

export const userActionReasonResponseSchema: Schema<UserActionReasonResponse> = object(
  {
    userActionReason: [
      'userActionReason',
      optional(lazy(() => userActionReasonSchema)),
    ],
    userActionReasons: [
      'userActionReasons',
      optional(array(lazy(() => userActionReasonSchema))),
    ],
  }
);
