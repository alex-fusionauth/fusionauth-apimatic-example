/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorsError } from '../errors/errorsError';
import { KeyRequest, keyRequestSchema } from '../models/keyRequest';
import { KeyResponse, keyResponseSchema } from '../models/keyResponse';
import {
  KeySearchRequest,
  keySearchRequestSchema,
} from '../models/keySearchRequest';
import {
  KeySearchResponse,
  keySearchResponseSchema,
} from '../models/keySearchResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class KeyController extends BaseController {
  /**
   * Deletes the key for the given Id.
   *
   * @param keyId The Id of the key to delete.
   * @return Response from the API call
   */
  async deleteKey(
    keyId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ keyId: [keyId, string()] });
    req.appendTemplatePath`/api/key/${mapped.keyId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Searches keys with the specified criteria and pagination.
   *
   * @param body
   * @return Response from the API call
   */
  async searchKeys(
    body?: KeySearchRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<KeySearchResponse>> {
    const req = this.createRequest('POST', '/api/key/search');
    const mapped = req.prepareArgs({
      body: [body, optional(keySearchRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(keySearchResponseSchema, requestOptions);
  }

  /**
   * Retrieves all the keys.
   *
   * @return Response from the API call
   */
  async retrieveKeys(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<KeyResponse>> {
    const req = this.createRequest('GET', '/api/key');
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(keyResponseSchema, requestOptions);
  }

  /**
   * Updates the key with the given Id.
   *
   * @param keyId        The Id of the key to update.
   * @param body
   * @return Response from the API call
   */
  async updateKey(
    keyId: string,
    body?: KeyRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<KeyResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      keyId: [keyId, string()],
      body: [body, optional(keyRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/key/${mapped.keyId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(keyResponseSchema, requestOptions);
  }

  /**
   * Generate a new RSA or EC key pair or an HMAC secret.
   *
   * @param keyId        (Optional) The Id for the key. If not provided a secure random UUID will
   *                                          be generated.
   * @param body
   * @return Response from the API call
   */
  async generateKey(
    keyId: string,
    body?: KeyRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<KeyResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      keyId: [keyId, string()],
      body: [body, optional(keyRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/key/generate/${mapped.keyId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(keyResponseSchema, requestOptions);
  }

  /**
   * Import an existing RSA or EC key pair or an HMAC secret.
   *
   * @param keyId        (Optional) The Id for the key. If not provided a secure random UUID will
   *                                          be generated.
   * @param body
   * @return Response from the API call
   */
  async importKey(
    keyId: string,
    body?: KeyRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<KeyResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      keyId: [keyId, string()],
      body: [body, optional(keyRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/key/import/${mapped.keyId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(keyResponseSchema, requestOptions);
  }

  /**
   * Retrieves the key for the given Id.
   *
   * @param keyId The Id of the key.
   * @return Response from the API call
   */
  async retrieveKey(
    keyId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<KeyResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ keyId: [keyId, string()] });
    req.appendTemplatePath`/api/key/${mapped.keyId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(keyResponseSchema, requestOptions);
  }
}
