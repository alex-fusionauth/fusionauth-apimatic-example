/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  dict,
  lazy,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { Templates, templatesSchema } from './templates';

export interface Theme {
  data?: Record<string, unknown>;
  defaultMessages?: string;
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  lastUpdateInstant?: bigint;
  /** Models a set of localized Strings that can be stored as JSON. */
  localizedMessages?: unknown;
  name?: string;
  stylesheet?: string;
  templates?: Templates;
}

export const themeSchema: Schema<Theme> = object({
  data: ['data', optional(dict(unknown()))],
  defaultMessages: ['defaultMessages', optional(string())],
  id: ['id', optional(string())],
  insertInstant: ['insertInstant', optional(bigint())],
  lastUpdateInstant: ['lastUpdateInstant', optional(bigint())],
  localizedMessages: ['localizedMessages', optional(unknown())],
  name: ['name', optional(string())],
  stylesheet: ['stylesheet', optional(string())],
  templates: ['templates', optional(lazy(() => templatesSchema))],
});
