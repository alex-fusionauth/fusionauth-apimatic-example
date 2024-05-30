/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { RefreshToken, refreshTokenSchema } from './refreshToken';

/** API response for retrieving Refresh Tokens */
export interface RefreshTokenResponse {
  /** Models a JWT Refresh Token. */
  refreshToken?: RefreshToken;
  refreshTokens?: RefreshToken[];
}

export const refreshTokenResponseSchema: Schema<RefreshTokenResponse> = object({
  refreshToken: ['refreshToken', optional(lazy(() => refreshTokenSchema))],
  refreshTokens: [
    'refreshTokens',
    optional(array(lazy(() => refreshTokenSchema))),
  ],
});
