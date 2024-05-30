/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorsError } from '../errors/errorsError';
import {
  IntegrationRequest,
  integrationRequestSchema,
} from '../models/integrationRequest';
import {
  IntegrationResponse,
  integrationResponseSchema,
} from '../models/integrationResponse';
import { optional } from '../schema';
import { BaseController } from './baseController';

export class IntegrationController extends BaseController {
  /**
   * Updates, via PATCH, the available integrations.
   *
   * @param body
   * @return Response from the API call
   */
  async patchIntegrations(
    body?: IntegrationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IntegrationResponse>> {
    const req = this.createRequest('PATCH', '/api/integration');
    const mapped = req.prepareArgs({
      body: [body, optional(integrationRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(integrationResponseSchema, requestOptions);
  }

  /**
   * Updates the available integrations.
   *
   * @param body
   * @return Response from the API call
   */
  async updateIntegrations(
    body?: IntegrationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IntegrationResponse>> {
    const req = this.createRequest('PUT', '/api/integration');
    const mapped = req.prepareArgs({
      body: [body, optional(integrationRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(integrationResponseSchema, requestOptions);
  }
}