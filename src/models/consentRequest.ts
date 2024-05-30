/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Consent, consentSchema } from './consent';

/** API request for User consent types. */
export interface ConsentRequest {
  /** Models a consent. */
  consent?: Consent;
}

export const consentRequestSchema: Schema<ConsentRequest> = object({
  consent: ['consent', optional(lazy(() => consentSchema))],
});
