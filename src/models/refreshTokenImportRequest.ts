/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, lazy, object, optional, Schema } from '../schema';
import { RefreshToken, refreshTokenSchema } from './refreshToken';

/** Refresh Token Import request. */
export interface RefreshTokenImportRequest {
  refreshTokens?: RefreshToken[];
  validateDbConstraints?: boolean;
}

export const refreshTokenImportRequestSchema: Schema<RefreshTokenImportRequest> = object(
  {
    refreshTokens: [
      'refreshTokens',
      optional(array(lazy(() => refreshTokenSchema))),
    ],
    validateDbConstraints: ['validateDbConstraints', optional(boolean())],
  }
);
