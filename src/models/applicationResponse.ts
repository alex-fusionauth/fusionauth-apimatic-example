/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Application, applicationSchema } from './application';
import { ApplicationRole, applicationRoleSchema } from './applicationRole';

/** The Application API response. */
export interface ApplicationResponse {
  application?: Application;
  applications?: Application[];
  /** A role given to a user for a specific application. */
  role?: ApplicationRole;
}

export const applicationResponseSchema: Schema<ApplicationResponse> = object({
  application: ['application', optional(lazy(() => applicationSchema))],
  applications: [
    'applications',
    optional(array(lazy(() => applicationSchema))),
  ],
  role: ['role', optional(lazy(() => applicationRoleSchema))],
});
