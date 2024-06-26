/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { Error } from '../models/error';

/**
 * Creates an instance of Errors
 */
interface Errors {
  fieldErrors?: Error[];
  generalErrors?: Error[];
}

export class ErrorsError extends ApiError<Errors> {}
