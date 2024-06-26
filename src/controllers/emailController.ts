/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorsError } from '../errors/errorsError';
import {
  EmailTemplateRequest,
  emailTemplateRequestSchema,
} from '../models/emailTemplateRequest';
import {
  EmailTemplateResponse,
  emailTemplateResponseSchema,
} from '../models/emailTemplateResponse';
import {
  EmailTemplateSearchRequest,
  emailTemplateSearchRequestSchema,
} from '../models/emailTemplateSearchRequest';
import {
  EmailTemplateSearchResponse,
  emailTemplateSearchResponseSchema,
} from '../models/emailTemplateSearchResponse';
import { PreviewRequest, previewRequestSchema } from '../models/previewRequest';
import {
  PreviewResponse,
  previewResponseSchema,
} from '../models/previewResponse';
import { SendRequest, sendRequestSchema } from '../models/sendRequest';
import { SendResponse, sendResponseSchema } from '../models/sendResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class EmailController extends BaseController {
  /**
   * Deletes the email template for the given Id.
   *
   * @param emailTemplateId       The Id of the email template to delete.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async deleteEmailTemplate(
    emailTemplateId: string,
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      emailTemplateId: [emailTemplateId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.appendTemplatePath`/api/email/template/${mapped.emailTemplateId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Updates, via PATCH, the email template with the given Id.
   *
   * @param emailTemplateId       The Id of the email template to update.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API
   *                                                             request. Only required when there is more than one
   *                                                             tenant and the API key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async patchEmailTemplate(
    emailTemplateId: string,
    xFusionAuthTenantId?: string,
    body?: EmailTemplateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EmailTemplateResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      emailTemplateId: [emailTemplateId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(emailTemplateRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.appendTemplatePath`/api/email/template/${mapped.emailTemplateId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(emailTemplateResponseSchema, requestOptions);
  }

  /**
   * Updates the email template with the given Id.
   *
   * @param emailTemplateId       The Id of the email template to update.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API
   *                                                             request. Only required when there is more than one
   *                                                             tenant and the API key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async updateEmailTemplate(
    emailTemplateId: string,
    xFusionAuthTenantId?: string,
    body?: EmailTemplateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EmailTemplateResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      emailTemplateId: [emailTemplateId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(emailTemplateRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.appendTemplatePath`/api/email/template/${mapped.emailTemplateId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(emailTemplateResponseSchema, requestOptions);
  }

  /**
   * Creates an email template. You can optionally specify an Id for the template, if not provided one
   * will be generated.
   *
   * @param emailTemplateId       (Optional) The Id for the template. If not provided a
   *                                                             secure random UUID will be generated.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API
   *                                                             request. Only required when there is more than one
   *                                                             tenant and the API key is not tenant-scoped.
   * @param body
   * @return Response from the API call
   */
  async createEmailTemplate(
    emailTemplateId: string,
    xFusionAuthTenantId?: string,
    body?: EmailTemplateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EmailTemplateResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      emailTemplateId: [emailTemplateId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
      body: [body, optional(emailTemplateRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.json(mapped.body);
    req.appendTemplatePath`/api/email/template/${mapped.emailTemplateId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(emailTemplateResponseSchema, requestOptions);
  }

  /**
   * Creates a preview of the email template provided in the request. This allows you to preview an email
   * template that hasn't been saved to the database yet. The entire email template does not need to be
   * provided on the request. This will create the preview based on whatever is given.
   *
   * @param body
   * @return Response from the API call
   */
  async retrieveEmailTemplatePreview(
    body?: PreviewRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PreviewResponse>> {
    const req = this.createRequest('POST', '/api/email/template/preview');
    const mapped = req.prepareArgs({
      body: [body, optional(previewRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(previewResponseSchema, requestOptions);
  }

  /**
   * Searches email templates with the specified criteria and pagination.
   *
   * @param body
   * @return Response from the API call
   */
  async searchEmailTemplates(
    body?: EmailTemplateSearchRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EmailTemplateSearchResponse>> {
    const req = this.createRequest('POST', '/api/email/template/search');
    const mapped = req.prepareArgs({
      body: [body, optional(emailTemplateSearchRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(emailTemplateSearchResponseSchema, requestOptions);
  }

  /**
   * Send an email using an email template id. You can optionally provide <code>requestData</code> to
   * access key value pairs in the email template.
   *
   * @param emailTemplateId The Id for the template.
   * @param body
   * @return Response from the API call
   */
  async sendEmail(
    emailTemplateId: string,
    body?: SendRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SendResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      emailTemplateId: [emailTemplateId, string()],
      body: [body, optional(sendRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/email/send/${mapped.emailTemplateId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(sendResponseSchema, requestOptions);
  }

  /**
   * Retrieves the email template for the given Id. If you don't specify the id, this will return all the
   * email templates.
   *
   * @param emailTemplateId       (Optional) The Id of the email template.
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async retrieveEmailTemplate(
    emailTemplateId: string,
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EmailTemplateResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      emailTemplateId: [emailTemplateId, string()],
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.appendTemplatePath`/api/email/template/${mapped.emailTemplateId}`;
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(emailTemplateResponseSchema, requestOptions);
  }

  /**
   * Retrieves all the email templates.
   *
   * @param xFusionAuthTenantId   The unique Id of the tenant used to scope this API request. Only required
   *                                        when there is more than one tenant and the API key is not tenant-scoped.
   * @return Response from the API call
   */
  async retrieveEmailTemplates(
    xFusionAuthTenantId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EmailTemplateResponse>> {
    const req = this.createRequest('GET', '/api/email/template');
    const mapped = req.prepareArgs({
      xFusionAuthTenantId: [xFusionAuthTenantId, optional(string())],
    });
    req.header('X-FusionAuth-TenantId', mapped.xFusionAuthTenantId);
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(emailTemplateResponseSchema, requestOptions);
  }
}
