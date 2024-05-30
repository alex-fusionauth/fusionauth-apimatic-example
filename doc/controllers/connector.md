# Connector

```ts
const connectorController = new ConnectorController(client);
```

## Class Name

`ConnectorController`

## Methods

* [Patch Connector](../../doc/controllers/connector.md#patch-connector)
* [Delete Connector](../../doc/controllers/connector.md#delete-connector)
* [Retrieve Connector](../../doc/controllers/connector.md#retrieve-connector)
* [Create Connector](../../doc/controllers/connector.md#create-connector)
* [Update Connector](../../doc/controllers/connector.md#update-connector)
* [Retrieve Connectors](../../doc/controllers/connector.md#retrieve-connectors)


# Patch Connector

Updates, via PATCH, the connector with the given Id.

```ts
async patchConnector(
  connectorId: string,
  body?: ConnectorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectorResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connectorId` | `string` | Template, Required | The Id of the connector to update. |
| `body` | [`ConnectorRequest \| undefined`](../../doc/models/connector-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectorResponse`](../../doc/models/connector-response.md)

## Example Usage

```ts
const connectorId = 'connectorId0';

try {
  const { result, ...httpResponse } = await connectorController.patchConnector(connectorId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Delete Connector

Deletes the connector for the given Id.

```ts
async deleteConnector(
  connectorId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connectorId` | `string` | Template, Required | The Id of the connector to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const connectorId = 'connectorId0';

try {
  const { result, ...httpResponse } = await connectorController.deleteConnector(connectorId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve Connector

Retrieves the connector with the given Id.

```ts
async retrieveConnector(
  connectorId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectorResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connectorId` | `string` | Template, Required | The Id of the connector. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectorResponse`](../../doc/models/connector-response.md)

## Example Usage

```ts
const connectorId = 'connectorId0';

try {
  const { result, ...httpResponse } = await connectorController.retrieveConnector(connectorId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | `ApiError` |


# Create Connector

Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.

```ts
async createConnector(
  connectorId: string,
  body?: ConnectorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectorResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connectorId` | `string` | Template, Required | (Optional) The Id for the connector. If not provided a secure random UUID will be generated. |
| `body` | [`ConnectorRequest \| undefined`](../../doc/models/connector-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectorResponse`](../../doc/models/connector-response.md)

## Example Usage

```ts
const connectorId = 'connectorId0';

try {
  const { result, ...httpResponse } = await connectorController.createConnector(connectorId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Update Connector

Updates the connector with the given Id.

```ts
async updateConnector(
  connectorId: string,
  body?: ConnectorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectorResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connectorId` | `string` | Template, Required | The Id of the connector to update. |
| `body` | [`ConnectorRequest \| undefined`](../../doc/models/connector-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectorResponse`](../../doc/models/connector-response.md)

## Example Usage

```ts
const connectorId = 'connectorId0';

try {
  const { result, ...httpResponse } = await connectorController.updateConnector(connectorId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve Connectors

Retrieves all the connectors.

```ts
async retrieveConnectors(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectorResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConnectorResponse`](../../doc/models/connector-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await connectorController.retrieveConnectors();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | `ApiError` |

