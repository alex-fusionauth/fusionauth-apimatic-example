/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorsError } from '../errors/errorsError';
import { APIKeyRequest, aPIKeyRequestSchema } from '../models/aPIKeyRequest';
import { APIKeyResponse, aPIKeyResponseSchema } from '../models/aPIKeyResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class ApiKeyController extends BaseController {
  /**
   * Deletes the API key for the given Id.
   *
   * @param keyId The Id of the authentication API key to delete.
   * @return Response from the API call
   */
  async deleteAPIKey(
    keyId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ keyId: [keyId, string()] });
    req.appendTemplatePath`/api/api-key/${mapped.keyId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Updates an authentication API key by given id OR Creates an API key. You can optionally specify a
   * unique Id for the key, if not provided one will be generated. an API key can only be created with
   * equal or lesser authority. An API key cannot create another API key unless it is granted  to that
   * API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant.
   *
   * @param keyId        The Id of the authentication key. If not provided a secure random api
   *                                             key will be generated.
   * @param body
   * @return Response from the API call
   */
  async createApiKeycreateAPIKeypatchAPIKey(
    keyId: string,
    body?: APIKeyRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<APIKeyResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      keyId: [keyId, string()],
      body: [body, optional(aPIKeyRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/api-key/${mapped.keyId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(aPIKeyResponseSchema, requestOptions);
  }

  /**
   * Retrieves an authentication API key for the given id
   *
   * @param keyId The Id of the API key to retrieve.
   * @return Response from the API call
   */
  async retrieveAPIKey(
    keyId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<APIKeyResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ keyId: [keyId, string()] });
    req.appendTemplatePath`/api/api-key/${mapped.keyId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(aPIKeyResponseSchema, requestOptions);
  }

  /**
   * Updates an API key by given id
   *
   * @param keyId        The Id of the API key to update.
   * @param body
   * @return Response from the API call
   */
  async updateAPIKey(
    keyId: string,
    body?: APIKeyRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<APIKeyResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      keyId: [keyId, string()],
      body: [body, optional(aPIKeyRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/api-key/${mapped.keyId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(aPIKeyResponseSchema, requestOptions);
  }
}
