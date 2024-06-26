/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { User, userSchema } from './user';

/** Models an event where a user is being updated and tries to use an "in-use" login Id (email or username). */
export interface UserLoginIdDuplicateOnUpdateEvent {
  duplicateEmail?: string;
  duplicateUsername?: string;
  /** The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. */
  existing?: User;
  /** The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. */
  user?: User;
}

export const userLoginIdDuplicateOnUpdateEventSchema: Schema<UserLoginIdDuplicateOnUpdateEvent> = object(
  {
    duplicateEmail: ['duplicateEmail', optional(string())],
    duplicateUsername: ['duplicateUsername', optional(string())],
    existing: ['existing', optional(lazy(() => userSchema))],
    user: ['user', optional(lazy(() => userSchema))],
  }
);
