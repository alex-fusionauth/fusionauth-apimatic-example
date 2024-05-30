/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorsError } from '../errors/errorsError';
import {
  LoginPingRequest,
  loginPingRequestSchema,
} from '../models/loginPingRequest';
import { LoginRequest, loginRequestSchema } from '../models/loginRequest';
import { LoginResponse, loginResponseSchema } from '../models/loginResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class LoginController extends BaseController {
  /**
   * Authenticates a user to FusionAuth.   This API optionally requires an API key. See <code>Application.
   * loginConfiguration.requireAuthentication</code>.
   *
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request.
   *                                                     Only required when there is more than one tenant and the API
   *                                                     key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async login(
    xFusionAuthTenantId?: string,
    body?: LoginRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LoginResponse>> {
    const req = this.createRequest('POST', '/api/login');
    const mapped = req.prepareArgs({
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(loginRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(loginResponseSchema, requestOptions);
  }

  /**
   * Sends a ping to FusionAuth indicating that the user was automatically logged into an application.
   * When using FusionAuth's SSO or your own, you should call this if the user is already logged in
   * centrally, but accesses an application where they no longer have a session. This helps correctly
   * track login counts, times and helps with reporting.
   *
   * @param userId                The Id of the user that was logged in.
   * @param applicationId         The Id of the application that they logged into.
   * @param callerIPAddress       (Optional) The IP address of the end-user that is logging in. If a null
   *                                        value is provided the IP address will be that of the client or last proxy
   *                                        that sent the request.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async loginPing(
    userId: string,
    applicationId: string,
    callerIPAddress?: string,
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LoginResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      applicationId: [applicationId, string()],
      callerIPAddress: [callerIPAddress, optional(string())],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.query('callerIPAddress', mapped.callerIPAddress);
    req.appendTemplatePath`/api/login/${mapped.userId}/${mapped.applicationId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(loginResponseSchema, requestOptions);
  }

  /**
   * Sends a ping to FusionAuth indicating that the user was automatically logged into an application.
   * When using FusionAuth's SSO or your own, you should call this if the user is already logged in
   * centrally, but accesses an application where they no longer have a session. This helps correctly
   * track login counts, times and helps with reporting.
   *
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API
   *                                                         request. Only required when there is more than one tenant
   *                                                         and the API key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async loginPingWithRequest(
    xFusionAuthTenantId?: string,
    body?: LoginPingRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LoginResponse>> {
    const req = this.createRequest('PUT', '/api/login');
    const mapped = req.prepareArgs({
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(loginPingRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(loginResponseSchema, requestOptions);
  }
}
