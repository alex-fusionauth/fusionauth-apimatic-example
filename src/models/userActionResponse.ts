/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { UserAction, userActionSchema } from './userAction';

/** User Action API response object. */
export interface UserActionResponse {
  /** An action that can be executed on a user (discipline or reward potentially). */
  userAction?: UserAction;
  userActions?: UserAction[];
}

export const userActionResponseSchema: Schema<UserActionResponse> = object({
  userAction: ['userAction', optional(lazy(() => userActionSchema))],
  userActions: ['userActions', optional(array(lazy(() => userActionSchema)))],
});