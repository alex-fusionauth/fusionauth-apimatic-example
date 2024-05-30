/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';
import {
  SystemTrustedProxyConfigurationPolicyEnum,
  systemTrustedProxyConfigurationPolicyEnumSchema,
} from './systemTrustedProxyConfigurationPolicyEnum';

export interface SystemTrustedProxyConfiguration {
  trustPolicy?: SystemTrustedProxyConfigurationPolicyEnum;
  trusted?: string[];
}

export const systemTrustedProxyConfigurationSchema: Schema<SystemTrustedProxyConfiguration> = object(
  {
    trustPolicy: [
      'trustPolicy',
      optional(systemTrustedProxyConfigurationPolicyEnumSchema),
    ],
    trusted: ['trusted', optional(array(string()))],
  }
);