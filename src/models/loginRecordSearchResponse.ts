/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, lazy, object, optional, Schema } from '../schema';
import {
  DisplayableRawLogin,
  displayableRawLoginSchema,
} from './displayableRawLogin';

/** A raw login record response */
export interface LoginRecordSearchResponse {
  logins?: DisplayableRawLogin[];
  total?: bigint;
}

export const loginRecordSearchResponseSchema: Schema<LoginRecordSearchResponse> = object(
  {
    logins: ['logins', optional(array(lazy(() => displayableRawLoginSchema)))],
    total: ['total', optional(bigint())],
  }
);
