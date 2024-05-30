# Lambda

```ts
const lambdaController = new LambdaController(client);
```

## Class Name

`LambdaController`

## Methods

* [Create Lambda](../../doc/controllers/lambda.md#create-lambda)
* [Retrieve Lambdas by Type](../../doc/controllers/lambda.md#retrieve-lambdas-by-type)
* [Search Lambdas](../../doc/controllers/lambda.md#search-lambdas)
* [Delete Lambda](../../doc/controllers/lambda.md#delete-lambda)
* [Patch Lambda](../../doc/controllers/lambda.md#patch-lambda)
* [Retrieve Lambda](../../doc/controllers/lambda.md#retrieve-lambda)
* [Update Lambda](../../doc/controllers/lambda.md#update-lambda)


# Create Lambda

Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.

```ts
async createLambda(
  lambdaId: string,
  body?: LambdaRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LambdaResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lambdaId` | `string` | Template, Required | (Optional) The Id for the lambda. If not provided a secure random UUID will be generated. |
| `body` | [`LambdaRequest \| undefined`](../../doc/models/lambda-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LambdaResponse`](../../doc/models/lambda-response.md)

## Example Usage

```ts
const lambdaId = 'lambdaId2';

try {
  const { result, ...httpResponse } = await lambdaController.createLambda(lambdaId);
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


# Retrieve Lambdas by Type

Retrieves all the lambdas for the provided type.

```ts
async retrieveLambdasByType(
  type?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LambdaResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Query, Optional | The type of the lambda to return. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LambdaResponse`](../../doc/models/lambda-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await lambdaController.retrieveLambdasByType();
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


# Search Lambdas

Searches lambdas with the specified criteria and pagination.

```ts
async searchLambdas(
  body?: LambdaSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LambdaSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LambdaSearchRequest \| undefined`](../../doc/models/lambda-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LambdaSearchResponse`](../../doc/models/lambda-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await lambdaController.searchLambdas();
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


# Delete Lambda

Deletes the lambda for the given Id.

```ts
async deleteLambda(
  lambdaId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lambdaId` | `string` | Template, Required | The Id of the lambda to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const lambdaId = 'lambdaId2';

try {
  const { result, ...httpResponse } = await lambdaController.deleteLambda(lambdaId);
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


# Patch Lambda

Updates, via PATCH, the lambda with the given Id.

```ts
async patchLambda(
  lambdaId: string,
  body?: LambdaRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LambdaResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lambdaId` | `string` | Template, Required | The Id of the lambda to update. |
| `body` | [`LambdaRequest \| undefined`](../../doc/models/lambda-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LambdaResponse`](../../doc/models/lambda-response.md)

## Example Usage

```ts
const lambdaId = 'lambdaId2';

try {
  const { result, ...httpResponse } = await lambdaController.patchLambda(lambdaId);
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


# Retrieve Lambda

Retrieves the lambda for the given Id.

```ts
async retrieveLambda(
  lambdaId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LambdaResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lambdaId` | `string` | Template, Required | The Id of the lambda. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LambdaResponse`](../../doc/models/lambda-response.md)

## Example Usage

```ts
const lambdaId = 'lambdaId2';

try {
  const { result, ...httpResponse } = await lambdaController.retrieveLambda(lambdaId);
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


# Update Lambda

Updates the lambda with the given Id.

```ts
async updateLambda(
  lambdaId: string,
  body?: LambdaRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LambdaResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lambdaId` | `string` | Template, Required | The Id of the lambda to update. |
| `body` | [`LambdaRequest \| undefined`](../../doc/models/lambda-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LambdaResponse`](../../doc/models/lambda-response.md)

## Example Usage

```ts
const lambdaId = 'lambdaId2';

try {
  const { result, ...httpResponse } = await lambdaController.updateLambda(lambdaId);
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

