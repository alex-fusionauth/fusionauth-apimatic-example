/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorsError } from '../errors/errorsError';
import {
  UserActionRequest,
  userActionRequestSchema,
} from '../models/userActionRequest';
import {
  UserActionResponse,
  userActionResponseSchema,
} from '../models/userActionResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class UserActionController extends BaseController {
  /**
   * Deletes the user action for the given Id. This permanently deletes the user action and also any
   * history and logs of the action being applied to any users. OR Deactivates the user action with the
   * given Id.
   *
   * @param userActionId          The Id of the user action to delete.
   * @param hardDelete
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async deleteUserActiondeactivateUserAction(
    userActionId: string,
    hardDelete?: string,
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      userActionId: [userActionId, string()],
      hardDelete: [hardDelete, optional(string())],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.query('hardDelete', mapped.hardDelete);
    req.appendTemplatePath`/api/user-action/${mapped.userActionId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Updates the user action with the given Id. OR Reactivates the user action with the given Id.
   *
   * @param userActionId          The Id of the user action to update.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API
   *                                                          request. Only required when there is more than one tenant
   *                                                          and the API key is not tenant-scoped.
   * @param reactivate
   * @param body
   * @return Response from the API call
   */
  async updateUserActionreactivateUserAction(
    userActionId: string,
    xFusionAuthTenantId?: string,
    reactivate?: string,
    body?: UserActionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserActionResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      userActionId: [userActionId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      reactivate: [reactivate, optional(string())],
      body: [body, optional(userActionRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.query('reactivate', mapped.reactivate);
    req.json(mapped.body);
    req.appendTemplatePath`/api/user-action/${mapped.userActionId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(userActionResponseSchema, requestOptions);
  }

  /**
   * Creates a user action. This action cannot be taken on a user until this call successfully returns.
   * Anytime after that the user action can be applied to any user.
   *
   * @param userActionId          (Optional) The Id for the user action. If not provided a
   *                                                          secure random UUID will be generated.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API
   *                                                          request. Only required when there is more than one tenant
   *                                                          and the API key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async createUserAction(
    userActionId: string,
    xFusionAuthTenantId?: string,
    body?: UserActionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserActionResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userActionId: [userActionId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(userActionRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.appendTemplatePath`/api/user-action/${mapped.userActionId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(userActionResponseSchema, requestOptions);
  }

  /**
   * Updates, via PATCH, the user action with the given Id.
   *
   * @param userActionId          The Id of the user action to update.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API
   *                                                          request. Only required when there is more than one tenant
   *                                                          and the API key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async patchUserAction(
    userActionId: string,
    xFusionAuthTenantId?: string,
    body?: UserActionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserActionResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      userActionId: [userActionId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(userActionRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.appendTemplatePath`/api/user-action/${mapped.userActionId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(userActionResponseSchema, requestOptions);
  }

  /**
   * Retrieves the user action for the given Id. If you pass in null for the id, this will return all the
   * user actions.
   *
   * @param userActionId          (Optional) The Id of the user action.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async retrieveUserAction(
    userActionId: string,
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserActionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userActionId: [userActionId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.appendTemplatePath`/api/user-action/${mapped.userActionId}`;
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(userActionResponseSchema, requestOptions);
  }

  /**
   * Retrieves all the user actions that are currently inactive.
   *
   * @param inactive
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async retrieveInactiveUserActions(
    inactive?: string,
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UserActionResponse>> {
    const req = this.createRequest('GET', '/api/user-action');
    const mapped = req.prepareArgs({
      inactive: [inactive, optional(string())],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.query('inactive', mapped.inactive);
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(userActionResponseSchema, requestOptions);
  }
}
