/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { TwoFactorMethod, twoFactorMethodSchema } from './twoFactorMethod';

export interface UserTwoFactorConfiguration {
  methods?: TwoFactorMethod[];
  recoveryCodes?: string[];
}

export const userTwoFactorConfigurationSchema: Schema<UserTwoFactorConfiguration> = object(
  {
    methods: ['methods', optional(array(lazy(() => twoFactorMethodSchema)))],
    recoveryCodes: ['recoveryCodes', optional(array(string()))],
  }
);
