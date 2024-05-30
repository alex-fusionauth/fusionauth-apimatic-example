# Key

```ts
const keyController = new KeyController(client);
```

## Class Name

`KeyController`

## Methods

* [Delete Key](../../doc/controllers/key.md#delete-key)
* [Search Keys](../../doc/controllers/key.md#search-keys)
* [Retrieve Keys](../../doc/controllers/key.md#retrieve-keys)
* [Update Key](../../doc/controllers/key.md#update-key)
* [Generate Key](../../doc/controllers/key.md#generate-key)
* [Import Key](../../doc/controllers/key.md#import-key)
* [Retrieve Key](../../doc/controllers/key.md#retrieve-key)


# Delete Key

Deletes the key for the given Id.

```ts
async deleteKey(
  keyId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keyId` | `string` | Template, Required | The Id of the key to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const keyId = 'keyId0';

try {
  const { result, ...httpResponse } = await keyController.deleteKey(keyId);
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


# Search Keys

Searches keys with the specified criteria and pagination.

```ts
async searchKeys(
  body?: KeySearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<KeySearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`KeySearchRequest \| undefined`](../../doc/models/key-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`KeySearchResponse`](../../doc/models/key-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await keyController.searchKeys();
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


# Retrieve Keys

Retrieves all the keys.

```ts
async retrieveKeys(
  requestOptions?: RequestOptions
): Promise<ApiResponse<KeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`KeyResponse`](../../doc/models/key-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await keyController.retrieveKeys();
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


# Update Key

Updates the key with the given Id.

```ts
async updateKey(
  keyId: string,
  body?: KeyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<KeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keyId` | `string` | Template, Required | The Id of the key to update. |
| `body` | [`KeyRequest \| undefined`](../../doc/models/key-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`KeyResponse`](../../doc/models/key-response.md)

## Example Usage

```ts
const keyId = 'keyId0';

try {
  const { result, ...httpResponse } = await keyController.updateKey(keyId);
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


# Generate Key

Generate a new RSA or EC key pair or an HMAC secret.

```ts
async generateKey(
  keyId: string,
  body?: KeyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<KeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keyId` | `string` | Template, Required | (Optional) The Id for the key. If not provided a secure random UUID will be generated. |
| `body` | [`KeyRequest \| undefined`](../../doc/models/key-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`KeyResponse`](../../doc/models/key-response.md)

## Example Usage

```ts
const keyId = 'keyId0';

try {
  const { result, ...httpResponse } = await keyController.generateKey(keyId);
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


# Import Key

Import an existing RSA or EC key pair or an HMAC secret.

```ts
async importKey(
  keyId: string,
  body?: KeyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<KeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keyId` | `string` | Template, Required | (Optional) The Id for the key. If not provided a secure random UUID will be generated. |
| `body` | [`KeyRequest \| undefined`](../../doc/models/key-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`KeyResponse`](../../doc/models/key-response.md)

## Example Usage

```ts
const keyId = 'keyId0';

try {
  const { result, ...httpResponse } = await keyController.importKey(keyId);
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


# Retrieve Key

Retrieves the key for the given Id.

```ts
async retrieveKey(
  keyId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<KeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keyId` | `string` | Template, Required | The Id of the key. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`KeyResponse`](../../doc/models/key-response.md)

## Example Usage

```ts
const keyId = 'keyId0';

try {
  const { result, ...httpResponse } = await keyController.retrieveKey(keyId);
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

