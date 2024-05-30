/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Lambda, lambdaSchema } from './lambda';

/** Lambda API request object. */
export interface LambdaRequest {
  /** A JavaScript lambda function that is executed during certain events inside FusionAuth. */
  lambda?: Lambda;
}

export const lambdaRequestSchema: Schema<LambdaRequest> = object({
  lambda: ['lambda', optional(lazy(() => lambdaSchema))],
});
