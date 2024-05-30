/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ConnectorLambdaConfiguration {
  reconcileId?: string;
}

export const connectorLambdaConfigurationSchema: Schema<ConnectorLambdaConfiguration> = object(
  { reconcileId: ['reconcileId', optional(string())] }
);