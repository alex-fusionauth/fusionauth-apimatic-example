/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Email, emailSchema } from './email';
import { Errors, errorsSchema } from './errors';

export interface PreviewResponse {
  /** This class is an abstraction of a simple email message. */
  email?: Email;
  /** Standard error domain object that can also be used as the response from an API call. */
  errors?: Errors;
}

export const previewResponseSchema: Schema<PreviewResponse> = object({
  email: ['email', optional(lazy(() => emailSchema))],
  errors: ['errors', optional(lazy(() => errorsSchema))],
});
