/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import {
  AuthenticatorConfiguration,
  authenticatorConfigurationSchema,
} from './authenticatorConfiguration';

export interface TwoFactorMethod {
  authenticator?: AuthenticatorConfiguration;
  email?: string;
  id?: string;
  lastUsed?: boolean;
  method?: string;
  mobilePhone?: string;
  secret?: string;
}

export const twoFactorMethodSchema: Schema<TwoFactorMethod> = object({
  authenticator: [
    'authenticator',
    optional(lazy(() => authenticatorConfigurationSchema)),
  ],
  email: ['email', optional(string())],
  id: ['id', optional(string())],
  lastUsed: ['lastUsed', optional(boolean())],
  method: ['method', optional(string())],
  mobilePhone: ['mobilePhone', optional(string())],
  secret: ['secret', optional(string())],
});
