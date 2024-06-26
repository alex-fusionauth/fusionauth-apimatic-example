/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  BaseMessengerConfiguration,
  baseMessengerConfigurationSchema,
} from './baseMessengerConfiguration';

export interface MessengerResponse {
  /** Do not require a setter for 'type', it is defined by the concrete class and is not mutable */
  messenger?: BaseMessengerConfiguration;
  messengers?: BaseMessengerConfiguration[];
}

export const messengerResponseSchema: Schema<MessengerResponse> = object({
  messenger: [
    'messenger',
    optional(lazy(() => baseMessengerConfigurationSchema)),
  ],
  messengers: [
    'messengers',
    optional(array(lazy(() => baseMessengerConfigurationSchema))),
  ],
});
