/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, object, optional, Schema, string, unknown } from '../schema';

/** Defines an error. */
export interface Error {
  code?: string;
  data?: Record<string, unknown>;
  message?: string;
}

export const errorSchema: Schema<Error> = object({
  code: ['code', optional(string())],
  data: ['data', optional(dict(unknown()))],
  message: ['message', optional(string())],
});
