/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IdentityProviderLoginMethodEnum
 */
export enum IdentityProviderLoginMethodEnum {
  UsePopup = 'UsePopup',
  UseRedirect = 'UseRedirect',
  UseVendorJavaScript = 'UseVendorJavaScript',
}

/**
 * Schema for IdentityProviderLoginMethodEnum
 */
export const  identityProviderLoginMethodEnumSchema: Schema<IdentityProviderLoginMethodEnum> = stringEnum(IdentityProviderLoginMethodEnum);
