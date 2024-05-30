/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  DisplayableRawLogin,
  displayableRawLoginSchema,
} from './displayableRawLogin';

/** Response for the user login report. */
export interface RecentLoginResponse {
  logins?: DisplayableRawLogin[];
}

export const recentLoginResponseSchema: Schema<RecentLoginResponse> = object({
  logins: ['logins', optional(array(lazy(() => displayableRawLoginSchema)))],
});
