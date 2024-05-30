/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  dict,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { ConnectorTypeEnum, connectorTypeEnumSchema } from './connectorTypeEnum';

/** Models the FusionAuth connector. */
export interface FusionAuthConnectorConfiguration {
  data?: Record<string, unknown>;
  debug?: boolean;
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  lastUpdateInstant?: bigint;
  name?: string;
  /** The types of connectors. This enum is stored as an ordinal on the <code>identities<code> table, order must be maintained. */
  type?: ConnectorTypeEnum;
}

export const fusionAuthConnectorConfigurationSchema: Schema<FusionAuthConnectorConfiguration> = object(
  {
    data: ['data', optional(dict(unknown()))],
    debug: ['debug', optional(boolean())],
    id: ['id', optional(string())],
    insertInstant: ['insertInstant', optional(bigint())],
    lastUpdateInstant: ['lastUpdateInstant', optional(bigint())],
    name: ['name', optional(string())],
    type: ['type', optional(connectorTypeEnumSchema)],
  }
);
