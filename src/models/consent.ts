/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  dict,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { EmailPlus, emailPlusSchema } from './emailPlus';

/** Models a consent. */
export interface Consent {
  data?: Record<string, unknown>;
  consentEmailTemplateId?: string;
  /** Models a set of localized Integers that can be stored as JSON. */
  countryMinimumAgeForSelfConsent?: unknown;
  defaultMinimumAgeForSelfConsent?: number;
  emailPlus?: EmailPlus;
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  lastUpdateInstant?: bigint;
  multipleValuesAllowed?: boolean;
  name?: string;
  values?: string[];
}

export const consentSchema: Schema<Consent> = object({
  data: ['data', optional(dict(unknown()))],
  consentEmailTemplateId: ['consentEmailTemplateId', optional(string())],
  countryMinimumAgeForSelfConsent: [
    'countryMinimumAgeForSelfConsent',
    optional(unknown()),
  ],
  defaultMinimumAgeForSelfConsent: [
    'defaultMinimumAgeForSelfConsent',
    optional(number()),
  ],
  emailPlus: ['emailPlus', optional(lazy(() => emailPlusSchema))],
  id: ['id', optional(string())],
  insertInstant: ['insertInstant', optional(bigint())],
  lastUpdateInstant: ['lastUpdateInstant', optional(bigint())],
  multipleValuesAllowed: ['multipleValuesAllowed', optional(boolean())],
  name: ['name', optional(string())],
  values: ['values', optional(array(string()))],
});
