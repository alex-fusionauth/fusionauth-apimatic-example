# Api-Key

```ts
const apiKeyController = new ApiKeyController(client);
```

## Class Name

`ApiKeyController`

## Methods

* [Delete API Key](../../doc/controllers/api-key.md#delete-api-key)
* [Create Api Keycreate API Keypatch API Key](../../doc/controllers/api-key.md#create-api-keycreate-api-keypatch-api-key)
* [Retrieve API Key](../../doc/controllers/api-key.md#retrieve-api-key)
* [Update API Key](../../doc/controllers/api-key.md#update-api-key)


# Delete API Key

Deletes the API key for the given Id.

```ts
async deleteAPIKey(
  keyId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keyId` | `string` | Template, Required | The Id of the authentication API key to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const keyId = 'keyId0';

try {
  const { result, ...httpResponse } = await apiKeyController.deleteAPIKey(keyId);
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


# Create Api Keycreate API Keypatch API Key

Updates an authentication API key by given id OR Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant.

```ts
async createApiKeycreateAPIKeypatchAPIKey(
  keyId: string,
  body?: APIKeyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<APIKeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keyId` | `string` | Template, Required | The Id of the authentication key. If not provided a secure random api key will be generated. |
| `body` | [`APIKeyRequest \| undefined`](../../doc/models/api-key-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`APIKeyResponse`](../../doc/models/api-key-response.md)

## Example Usage

```ts
const keyId = 'keyId0';

try {
  const { result, ...httpResponse } = await apiKeyController.createApiKeycreateAPIKeypatchAPIKey(keyId);
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


# Retrieve API Key

Retrieves an authentication API key for the given id

```ts
async retrieveAPIKey(
  keyId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<APIKeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keyId` | `string` | Template, Required | The Id of the API key to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`APIKeyResponse`](../../doc/models/api-key-response.md)

## Example Usage

```ts
const keyId = 'keyId0';

try {
  const { result, ...httpResponse } = await apiKeyController.retrieveAPIKey(keyId);
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


# Update API Key

Updates an API key by given id

```ts
async updateAPIKey(
  keyId: string,
  body?: APIKeyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<APIKeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keyId` | `string` | Template, Required | The Id of the API key to update. |
| `body` | [`APIKeyRequest \| undefined`](../../doc/models/api-key-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`APIKeyResponse`](../../doc/models/api-key-response.md)

## Example Usage

```ts
const keyId = 'keyId0';

try {
  const { result, ...httpResponse } = await apiKeyController.updateAPIKey(keyId);
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

