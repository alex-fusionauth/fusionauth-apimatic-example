/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { JWKSResponse, jWKSResponseSchema } from '../models/jWKSResponse';
import {
  OpenIdConfiguration,
  openIdConfigurationSchema,
} from '../models/openIdConfiguration';
import { BaseController } from './baseController';

export class WellKnownController extends BaseController {
  /**
   * Returns the well known OpenID Configuration JSON document
   *
   * @return Response from the API call
   */
  async retrieveOpenIdConfiguration(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OpenIdConfiguration>> {
    const req = this.createRequest('GET', '/.well-known/openid-configuration');
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(openIdConfigurationSchema, requestOptions);
  }

  /**
   * Returns public keys used by FusionAuth to cryptographically verify JWTs using the JSON Web Key
   * format.
   *
   * @return Response from the API call
   */
  async retrieveJsonWebKeySet(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JWKSResponse>> {
    const req = this.createRequest('GET', '/.well-known/jwks.json');
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(jWKSResponseSchema, requestOptions);
  }
}
