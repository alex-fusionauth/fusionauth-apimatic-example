/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  dict,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';

export interface SAMLv2ApplicationConfiguration {
  buttonImageURL?: string;
  buttonText?: string;
  data?: Record<string, unknown>;
  createRegistration?: boolean;
}

export const sAMLv2ApplicationConfigurationSchema: Schema<SAMLv2ApplicationConfiguration> = object(
  {
    buttonImageURL: ['buttonImageURL', optional(string())],
    buttonText: ['buttonText', optional(string())],
    data: ['data', optional(dict(unknown()))],
    createRegistration: ['createRegistration', optional(boolean())],
  }
);
