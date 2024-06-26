/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { FamilyMember, familyMemberSchema } from './familyMember';

/** Models a family grouping of users. */
export interface Family {
  members?: FamilyMember[];
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  lastUpdateInstant?: bigint;
}

export const familySchema: Schema<Family> = object({
  members: ['members', optional(array(lazy(() => familyMemberSchema)))],
  id: ['id', optional(string())],
  insertInstant: ['insertInstant', optional(bigint())],
  lastUpdateInstant: ['lastUpdateInstant', optional(bigint())],
});
