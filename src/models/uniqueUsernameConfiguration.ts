/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';
import {
  UniqueUsernameStrategyEnum,
  uniqueUsernameStrategyEnumSchema,
} from './uniqueUsernameStrategyEnum';

export interface UniqueUsernameConfiguration {
  numberOfDigits?: number;
  separator?: string;
  strategy?: UniqueUsernameStrategyEnum;
  enabled?: boolean;
}

export const uniqueUsernameConfigurationSchema: Schema<UniqueUsernameConfiguration> = object(
  {
    numberOfDigits: ['numberOfDigits', optional(number())],
    separator: ['separator', optional(string())],
    strategy: ['strategy', optional(uniqueUsernameStrategyEnumSchema)],
    enabled: ['enabled', optional(boolean())],
  }
);