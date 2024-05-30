/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Request for managing FusionAuth Reactor and licenses. */
export interface ReactorRequest {
  license?: string;
  licenseId?: string;
}

export const reactorRequestSchema: Schema<ReactorRequest> = object({
  license: ['license', optional(string())],
  licenseId: ['licenseId', optional(string())],
});
