/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for WebAuthnWorkflowEnum
 */
export enum WebAuthnWorkflowEnum {
  Bootstrap = 'bootstrap',
  General = 'general',
  Reauthentication = 'reauthentication',
}

/**
 * Schema for WebAuthnWorkflowEnum
 */
export const  webAuthnWorkflowEnumSchema: Schema<WebAuthnWorkflowEnum> = stringEnum(WebAuthnWorkflowEnum);
