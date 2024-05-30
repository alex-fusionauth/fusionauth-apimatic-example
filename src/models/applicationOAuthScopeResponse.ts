/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  ApplicationOAuthScope,
  applicationOAuthScopeSchema,
} from './applicationOAuthScope';

/** The Application Scope API response. */
export interface ApplicationOAuthScopeResponse {
  /** A custom OAuth scope for a specific application. */
  scope?: ApplicationOAuthScope;
}

export const applicationOAuthScopeResponseSchema: Schema<ApplicationOAuthScopeResponse> = object(
  { scope: ['scope', optional(lazy(() => applicationOAuthScopeSchema))] }
);