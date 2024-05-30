# Integration

```ts
const integrationController = new IntegrationController(client);
```

## Class Name

`IntegrationController`

## Methods

* [Patch Integrations](../../doc/controllers/integration.md#patch-integrations)
* [Update Integrations](../../doc/controllers/integration.md#update-integrations)


# Patch Integrations

Updates, via PATCH, the available integrations.

```ts
async patchIntegrations(
  body?: IntegrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IntegrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`IntegrationRequest \| undefined`](../../doc/models/integration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IntegrationResponse`](../../doc/models/integration-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await integrationController.patchIntegrations();
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


# Update Integrations

Updates the available integrations.

```ts
async updateIntegrations(
  body?: IntegrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IntegrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`IntegrationRequest \| undefined`](../../doc/models/integration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IntegrationResponse`](../../doc/models/integration-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await integrationController.updateIntegrations();
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

