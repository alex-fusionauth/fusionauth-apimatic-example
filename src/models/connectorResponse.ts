/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  BaseConnectorConfiguration,
  baseConnectorConfigurationSchema,
} from './baseConnectorConfiguration';

export interface ConnectorResponse {
  /** Do not require a setter for 'type', it is defined by the concrete class and is not mutable */
  connector?: BaseConnectorConfiguration;
  connectors?: BaseConnectorConfiguration[];
}

export const connectorResponseSchema: Schema<ConnectorResponse> = object({
  connector: [
    'connector',
    optional(lazy(() => baseConnectorConfigurationSchema)),
  ],
  connectors: [
    'connectors',
    optional(array(lazy(() => baseConnectorConfigurationSchema))),
  ],
});
