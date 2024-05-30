/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorsError } from '../errors/errorsError';
import {
  GroupMemberSearchRequest,
  groupMemberSearchRequestSchema,
} from '../models/groupMemberSearchRequest';
import {
  GroupMemberSearchResponse,
  groupMemberSearchResponseSchema,
} from '../models/groupMemberSearchResponse';
import { GroupRequest, groupRequestSchema } from '../models/groupRequest';
import { GroupResponse, groupResponseSchema } from '../models/groupResponse';
import {
  GroupSearchRequest,
  groupSearchRequestSchema,
} from '../models/groupSearchRequest';
import {
  GroupSearchResponse,
  groupSearchResponseSchema,
} from '../models/groupSearchResponse';
import {
  MemberDeleteRequest,
  memberDeleteRequestSchema,
} from '../models/memberDeleteRequest';
import { MemberRequest, memberRequestSchema } from '../models/memberRequest';
import { MemberResponse, memberResponseSchema } from '../models/memberResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class GroupController extends BaseController {
  /**
   * Updates, via PATCH, the group with the given Id.
   *
   * @param groupId               The Id of the group to update.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request.
   *                                                     Only required when there is more than one tenant and the API
   *                                                     key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async patchGroup(
    groupId: string,
    xFusionAuthTenantId?: string,
    body?: GroupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GroupResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      groupId: [groupId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(groupRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.appendTemplatePath`/api/group/${mapped.groupId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(groupResponseSchema, requestOptions);
  }

  /**
   * Creates a group. You can optionally specify an Id for the group, if not provided one will be
   * generated.
   *
   * @param groupId               (Optional) The Id for the group. If not provided a secure
   *                                                     random UUID will be generated.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request.
   *                                                     Only required when there is more than one tenant and the API
   *                                                     key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async createGroup(
    groupId: string,
    xFusionAuthTenantId?: string,
    body?: GroupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GroupResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      groupId: [groupId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(groupRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.appendTemplatePath`/api/group/${mapped.groupId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(groupResponseSchema, requestOptions);
  }

  /**
   * Updates the group with the given Id.
   *
   * @param groupId               The Id of the group to update.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request.
   *                                                     Only required when there is more than one tenant and the API
   *                                                     key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async updateGroup(
    groupId: string,
    xFusionAuthTenantId?: string,
    body?: GroupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GroupResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      groupId: [groupId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(groupRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.appendTemplatePath`/api/group/${mapped.groupId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(groupResponseSchema, requestOptions);
  }

  /**
   * Creates a member in a group.
   *
   * @param body
   * @return Response from the API call
   */
  async updateGroupMembers(
    body?: MemberRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MemberResponse>> {
    const req = this.createRequest('PUT', '/api/group/member');
    const mapped = req.prepareArgs({
      body: [body, optional(memberRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(memberResponseSchema, requestOptions);
  }

  /**
   * Searches groups with the specified criteria and pagination.
   *
   * @param body
   * @return Response from the API call
   */
  async searchGroups(
    body?: GroupSearchRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GroupSearchResponse>> {
    const req = this.createRequest('POST', '/api/group/search');
    const mapped = req.prepareArgs({
      body: [body, optional(groupSearchRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(groupSearchResponseSchema, requestOptions);
  }

  /**
   * Retrieves all the groups.
   *
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async retrieveGroups(
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GroupResponse>> {
    const req = this.createRequest('GET', '/api/group');
    const mapped = req.prepareArgs({
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(groupResponseSchema, requestOptions);
  }

  /**
   * Deletes the group for the given Id.
   *
   * @param groupId               The Id of the group to delete.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async deleteGroup(
    groupId: string,
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      groupId: [groupId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.appendTemplatePath`/api/group/${mapped.groupId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Creates a member in a group.
   *
   * @param body
   * @return Response from the API call
   */
  async createGroupMembers(
    body?: MemberRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MemberResponse>> {
    const req = this.createRequest('POST', '/api/group/member');
    const mapped = req.prepareArgs({
      body: [body, optional(memberRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(memberResponseSchema, requestOptions);
  }

  /**
   * Searches group members with the specified criteria and pagination.
   *
   * @param body
   * @return Response from the API call
   */
  async searchGroupMembers(
    body?: GroupMemberSearchRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GroupMemberSearchResponse>> {
    const req = this.createRequest('POST', '/api/group/member/search');
    const mapped = req.prepareArgs({
      body: [body, optional(groupMemberSearchRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(groupMemberSearchResponseSchema, requestOptions);
  }

  /**
   * Retrieves the group for the given Id.
   *
   * @param groupId               The Id of the group.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async retrieveGroup(
    groupId: string,
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GroupResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      groupId: [groupId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.appendTemplatePath`/api/group/${mapped.groupId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(groupResponseSchema, requestOptions);
  }

  /**
   * Removes users as members of a group.
   *
   * @param body
   * @return Response from the API call
   */
  async deleteGroupMembers(
    body?: MemberDeleteRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE', '/api/group/member');
    const mapped = req.prepareArgs({
      body: [body, optional(memberDeleteRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.call(requestOptions);
  }
}