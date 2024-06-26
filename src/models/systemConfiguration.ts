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
import {
  AuditLogConfiguration,
  auditLogConfigurationSchema,
} from './auditLogConfiguration';
import { CORSConfiguration, cORSConfigurationSchema } from './cORSConfiguration';
import {
  EventLogConfiguration,
  eventLogConfigurationSchema,
} from './eventLogConfiguration';
import {
  LoginRecordConfiguration,
  loginRecordConfigurationSchema,
} from './loginRecordConfiguration';
import {
  SystemTrustedProxyConfiguration,
  systemTrustedProxyConfigurationSchema,
} from './systemTrustedProxyConfiguration';
import { UIConfiguration, uIConfigurationSchema } from './uIConfiguration';

export interface SystemConfiguration {
  auditLogConfiguration?: AuditLogConfiguration;
  corsConfiguration?: CORSConfiguration;
  data?: Record<string, unknown>;
  eventLogConfiguration?: EventLogConfiguration;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  lastUpdateInstant?: bigint;
  loginRecordConfiguration?: LoginRecordConfiguration;
  /** Timezone Identifier */
  reportTimezone?: string;
  trustedProxyConfiguration?: SystemTrustedProxyConfiguration;
  uiConfiguration?: UIConfiguration;
}

export const systemConfigurationSchema: Schema<SystemConfiguration> = object({
  auditLogConfiguration: [
    'auditLogConfiguration',
    optional(lazy(() => auditLogConfigurationSchema)),
  ],
  corsConfiguration: [
    'corsConfiguration',
    optional(lazy(() => cORSConfigurationSchema)),
  ],
  data: ['data', optional(dict(unknown()))],
  eventLogConfiguration: [
    'eventLogConfiguration',
    optional(lazy(() => eventLogConfigurationSchema)),
  ],
  insertInstant: ['insertInstant', optional(bigint())],
  lastUpdateInstant: ['lastUpdateInstant', optional(bigint())],
  loginRecordConfiguration: [
    'loginRecordConfiguration',
    optional(lazy(() => loginRecordConfigurationSchema)),
  ],
  reportTimezone: ['reportTimezone', optional(string())],
  trustedProxyConfiguration: [
    'trustedProxyConfiguration',
    optional(lazy(() => systemTrustedProxyConfigurationSchema)),
  ],
  uiConfiguration: [
    'uiConfiguration',
    optional(lazy(() => uIConfigurationSchema)),
  ],
});
