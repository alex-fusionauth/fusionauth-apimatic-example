/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  dict,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';

/** An audit log. */
export interface AuditLog {
  data?: Record<string, unknown>;
  id?: bigint;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  insertUser?: string;
  message?: string;
  newValue?: unknown;
  oldValue?: unknown;
  reason?: string;
}

export const auditLogSchema: Schema<AuditLog> = object({
  data: ['data', optional(dict(unknown()))],
  id: ['id', optional(bigint())],
  insertInstant: ['insertInstant', optional(bigint())],
  insertUser: ['insertUser', optional(string())],
  message: ['message', optional(string())],
  newValue: ['newValue', optional(unknown())],
  oldValue: ['oldValue', optional(unknown())],
  reason: ['reason', optional(string())],
});