/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorsError } from '../errors/errorsError';
import {
  PasswordValidationRulesResponse,
  passwordValidationRulesResponseSchema,
} from '../models/passwordValidationRulesResponse';
import {
  TenantDeleteRequest,
  tenantDeleteRequestSchema,
} from '../models/tenantDeleteRequest';
import { TenantRequest, tenantRequestSchema } from '../models/tenantRequest';
import { TenantResponse, tenantResponseSchema } from '../models/tenantResponse';
import {
  TenantSearchRequest,
  tenantSearchRequestSchema,
} from '../models/tenantSearchRequest';
import {
  TenantSearchResponse,
  tenantSearchResponseSchema,
} from '../models/tenantSearchResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class TenantController extends BaseController {
  /**
   * Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be
   * generated.
   *
   * @param tenantId              (Optional) The Id for the tenant. If not provided a secure
   *                                                      random UUID will be generated.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request.
   *                                                      Only required when there is more than one tenant and the API
   *                                                      key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async createTenant(
    tenantId: string,
    xFusionAuthTenantId?: string,
    body?: TenantRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TenantResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      tenantId: [tenantId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(tenantRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.appendTemplatePath`/api/tenant/${mapped.tenantId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(tenantResponseSchema, requestOptions);
  }

  /**
   * Deletes the tenant based on the given request (sent to the API as JSON). This permanently deletes
   * all information, metrics, reports and data associated with the tenant and everything under the
   * tenant (applications, users, etc). OR Deletes the tenant for the given Id asynchronously. This
   * method is helpful if you do not want to wait for the delete operation to complete. OR Deletes the
   * tenant based on the given Id on the URL. This permanently deletes all information, metrics, reports
   * and data associated with the tenant and everything under the tenant (applications, users, etc).
   *
   * @param tenantId              The Id of the tenant to delete.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API
   *                                                            request. Only required when there is more than one
   *                                                            tenant and the API key is not tenant-scoped.
   * @param async
   * @param body
   * @return Response from the API call
   */
  async deleteTenantAsyncWithRequest(
    tenantId: string,
    xFusionAuthTenantId?: string,
    async?: string,
    body?: TenantDeleteRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      tenantId: [tenantId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      async: [async, optional(string())],
      body: [body, optional(tenantDeleteRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.query('async', mapped.async);
    req.json(mapped.body);
    req.appendTemplatePath`/api/tenant/${mapped.tenantId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Updates the tenant with the given Id.
   *
   * @param tenantId              The Id of the tenant to update.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request.
   *                                                      Only required when there is more than one tenant and the API
   *                                                      key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async updateTenant(
    tenantId: string,
    xFusionAuthTenantId?: string,
    body?: TenantRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TenantResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      tenantId: [tenantId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(tenantRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.appendTemplatePath`/api/tenant/${mapped.tenantId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(tenantResponseSchema, requestOptions);
  }

  /**
   * Searches tenants with the specified criteria and pagination.
   *
   * @param body
   * @return Response from the API call
   */
  async searchTenants(
    body?: TenantSearchRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TenantSearchResponse>> {
    const req = this.createRequest('POST', '/api/tenant/search');
    const mapped = req.prepareArgs({
      body: [body, optional(tenantSearchRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(tenantSearchResponseSchema, requestOptions);
  }

  /**
   * Updates, via PATCH, the tenant with the given Id.
   *
   * @param tenantId              The Id of the tenant to update.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request.
   *                                                      Only required when there is more than one tenant and the API
   *                                                      key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async patchTenant(
    tenantId: string,
    xFusionAuthTenantId?: string,
    body?: TenantRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TenantResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      tenantId: [tenantId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(tenantRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.appendTemplatePath`/api/tenant/${mapped.tenantId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(tenantResponseSchema, requestOptions);
  }

  /**
   * Retrieves the tenant for the given Id.
   *
   * @param tenantId              The Id of the tenant.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async retrieveTenant(
    tenantId: string,
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TenantResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      tenantId: [tenantId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.appendTemplatePath`/api/tenant/${mapped.tenantId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(tenantResponseSchema, requestOptions);
  }

  /**
   * Retrieves the password validation rules for a specific tenant.  This API does not require an API key.
   *
   * @param tenantId The Id of the tenant.
   * @return Response from the API call
   */
  async retrievePasswordValidationRulesWithTenantId(
    tenantId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PasswordValidationRulesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ tenantId: [tenantId, string()] });
    req.appendTemplatePath`/api/tenant/password-validation-rules/${mapped.tenantId}`;
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(
      passwordValidationRulesResponseSchema,
      requestOptions
    );
  }

  /**
   * Retrieves all the tenants.
   *
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async retrieveTenants(
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TenantResponse>> {
    const req = this.createRequest('GET', '/api/tenant');
    const mapped = req.prepareArgs({
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(tenantResponseSchema, requestOptions);
  }

  /**
   * Retrieves the password validation rules for a specific tenant. This method requires a tenantId to be
   * provided  through the use of a Tenant scoped API key or an HTTP header X-FusionAuth-TenantId to
   * specify the Tenant Id.  This API does not require an API key.
   *
   * @return Response from the API call
   */
  async retrievePasswordValidationRules(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PasswordValidationRulesResponse>> {
    const req = this.createRequest(
      'GET',
      '/api/tenant/password-validation-rules'
    );
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(
      passwordValidationRulesResponseSchema,
      requestOptions
    );
  }
}
