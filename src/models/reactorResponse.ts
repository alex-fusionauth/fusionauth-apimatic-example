/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { ReactorStatus, reactorStatusSchema } from './reactorStatus';

export interface ReactorResponse {
  status?: ReactorStatus;
}

export const reactorResponseSchema: Schema<ReactorResponse> = object({
  status: ['status', optional(lazy(() => reactorStatusSchema))],
});
