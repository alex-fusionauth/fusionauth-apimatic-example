/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorsError } from '../errors/errorsError';
import {
  ConnectorRequest,
  connectorRequestSchema,
} from '../models/connectorRequest';
import {
  ConnectorResponse,
  connectorResponseSchema,
} from '../models/connectorResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class ConnectorController extends BaseController {
  /**
   * Updates, via PATCH, the connector with the given Id.
   *
   * @param connectorId  The Id of the connector to update.
   * @param body
   * @return Response from the API call
   */
  async patchConnector(
    connectorId: string,
    body?: ConnectorRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConnectorResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      connectorId: [connectorId, string()],
      body: [body, optional(connectorRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/connector/${mapped.connectorId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(connectorResponseSchema, requestOptions);
  }

  /**
   * Deletes the connector for the given Id.
   *
   * @param connectorId The Id of the connector to delete.
   * @return Response from the API call
   */
  async deleteConnector(
    connectorId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ connectorId: [connectorId, string()] });
    req.appendTemplatePath`/api/connector/${mapped.connectorId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Retrieves the connector with the given Id.
   *
   * @param connectorId The Id of the connector.
   * @return Response from the API call
   */
  async retrieveConnector(
    connectorId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConnectorResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ connectorId: [connectorId, string()] });
    req.appendTemplatePath`/api/connector/${mapped.connectorId}`;
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(connectorResponseSchema, requestOptions);
  }

  /**
   * Creates a connector.  You can optionally specify an Id for the connector, if not provided one will
   * be generated.
   *
   * @param connectorId  (Optional) The Id for the connector. If not provided a secure
   *                                                random UUID will be generated.
   * @param body
   * @return Response from the API call
   */
  async createConnector(
    connectorId: string,
    body?: ConnectorRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConnectorResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      connectorId: [connectorId, string()],
      body: [body, optional(connectorRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/connector/${mapped.connectorId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(connectorResponseSchema, requestOptions);
  }

  /**
   * Updates the connector with the given Id.
   *
   * @param connectorId  The Id of the connector to update.
   * @param body
   * @return Response from the API call
   */
  async updateConnector(
    connectorId: string,
    body?: ConnectorRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConnectorResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      connectorId: [connectorId, string()],
      body: [body, optional(connectorRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/api/connector/${mapped.connectorId}`;
    req.defaultToError(ErrorsError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(connectorResponseSchema, requestOptions);
  }

  /**
   * Retrieves all the connectors.
   *
   * @return Response from the API call
   */
  async retrieveConnectors(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConnectorResponse>> {
    const req = this.createRequest('GET', '/api/connector');
    req.defaultToError(ApiError, 'Error');
    req.authenticate([{ apiKeyAuth: true }]);
    return req.callAsJson(connectorResponseSchema, requestOptions);
  }
}
