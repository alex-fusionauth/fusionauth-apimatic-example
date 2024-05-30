/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Requirable, requirableSchema } from './requirable';

/** The handling policy for scopes provided by FusionAuth */
export interface ProvidedScopePolicy {
  /** Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. */
  address?: Requirable;
  /** Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. */
  email?: Requirable;
  /** Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. */
  phone?: Requirable;
  /** Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. */
  profile?: Requirable;
}

export const providedScopePolicySchema: Schema<ProvidedScopePolicy> = object({
  address: ['address', optional(lazy(() => requirableSchema))],
  email: ['email', optional(lazy(() => requirableSchema))],
  phone: ['phone', optional(lazy(() => requirableSchema))],
  profile: ['profile', optional(lazy(() => requirableSchema))],
});
