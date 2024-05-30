/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema } from '../schema';
import { TOTPAlgorithmEnum, tOTPAlgorithmEnumSchema } from './tOTPAlgorithmEnum';

export interface MultiFactorAuthenticatorMethod {
  algorithm?: TOTPAlgorithmEnum;
  codeLength?: number;
  timeStep?: number;
  enabled?: boolean;
}

export const multiFactorAuthenticatorMethodSchema: Schema<MultiFactorAuthenticatorMethod> = object(
  {
    algorithm: ['algorithm', optional(tOTPAlgorithmEnumSchema)],
    codeLength: ['codeLength', optional(number())],
    timeStep: ['timeStep', optional(number())],
    enabled: ['enabled', optional(boolean())],
  }
);