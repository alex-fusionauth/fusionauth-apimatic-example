/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorsError } from '../errors/errorsError';
import { ThemeRequest, themeRequestSchema } from '../models/themeRequest';
import { ThemeResponse, themeResponseSchema } from '../models/themeResponse';
import {
  ThemeSearchRequest,
  themeSearchRequestSchema,
} from '../models/themeSearchRequest';
import {
  ThemeSearchResponse,
  themeSearchResponseSchema,
} from '../models/themeSearchResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class ThemeController extends BaseController {
  /**
   * Updates the theme with the given Id.
   *
   * @param themeId      The Id of the theme to update.
   * @param body
   * @return Response from the API call
   */
  async updateTheme(
    themeId: string,
    body?: ThemeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ThemeResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      themeId: [themeId, string()],
      body: [body, optional(themeRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/theme/${mapped.themeId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(themeResponseSchema, requestOptions);
  }

  /**
   * Searches themes with the specified criteria and pagination.
   *
   * @param body
   * @return Response from the API call
   */
  async searchThemes(
    body?: ThemeSearchRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ThemeSearchResponse>> {
    const req = this.createRequest('POST', '/api/theme/search');
    const mapped = req.prepareArgs({
      body: [body, optional(themeSearchRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(themeSearchResponseSchema, requestOptions);
  }

  /**
   * Retrieves all the themes.
   *
   * @return Response from the API call
   */
  async retrieveThemes(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ThemeResponse>> {
    const req = this.createRequest('GET', '/api/theme');
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(themeResponseSchema, requestOptions);
  }

  /**
   * Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be
   * generated.
   *
   * @param themeId      (Optional) The Id for the theme. If not provided a secure random UUID
   *                                            will be generated.
   * @param body
   * @return Response from the API call
   */
  async createTheme(
    themeId: string,
    body?: ThemeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ThemeResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      themeId: [themeId, string()],
      body: [body, optional(themeRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/theme/${mapped.themeId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(themeResponseSchema, requestOptions);
  }

  /**
   * Updates, via PATCH, the theme with the given Id.
   *
   * @param themeId      The Id of the theme to update.
   * @param body
   * @return Response from the API call
   */
  async patchTheme(
    themeId: string,
    body?: ThemeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ThemeResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      themeId: [themeId, string()],
      body: [body, optional(themeRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/theme/${mapped.themeId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(themeResponseSchema, requestOptions);
  }

  /**
   * Retrieves the theme for the given Id.
   *
   * @param themeId The Id of the theme.
   * @return Response from the API call
   */
  async retrieveTheme(
    themeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ThemeResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ themeId: [themeId, string()] });
    req.appendTemplatePath`/api/theme/${mapped.themeId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(themeResponseSchema, requestOptions);
  }

  /**
   * Deletes the theme for the given Id.
   *
   * @param themeId The Id of the theme to delete.
   * @return Response from the API call
   */
  async deleteTheme(
    themeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ themeId: [themeId, string()] });
    req.appendTemplatePath`/api/theme/${mapped.themeId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.call(requestOptions);
  }
}