/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema } from '../schema';

export interface IdentityProviderLimitUserLinkingPolicy {
  maximumLinks?: number;
  enabled?: boolean;
}

export const identityProviderLimitUserLinkingPolicySchema: Schema<IdentityProviderLimitUserLinkingPolicy> = object(
  {
    maximumLinks: ['maximumLinks', optional(number())],
    enabled: ['enabled', optional(boolean())],
  }
);