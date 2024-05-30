# Webhook

```ts
const webhookController = new WebhookController(client);
```

## Class Name

`WebhookController`

## Methods

* [Delete Webhook](../../doc/controllers/webhook.md#delete-webhook)
* [Update Webhook](../../doc/controllers/webhook.md#update-webhook)
* [Retrieve Webhook](../../doc/controllers/webhook.md#retrieve-webhook)
* [Create Webhook](../../doc/controllers/webhook.md#create-webhook)
* [Search Webhooks](../../doc/controllers/webhook.md#search-webhooks)
* [Retrieve Webhooks](../../doc/controllers/webhook.md#retrieve-webhooks)


# Delete Webhook

Deletes the webhook for the given Id.

```ts
async deleteWebhook(
  webhookId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookId` | `string` | Template, Required | The Id of the webhook to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const webhookId = 'webhookId6';

try {
  const { result, ...httpResponse } = await webhookController.deleteWebhook(webhookId);
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


# Update Webhook

Updates the webhook with the given Id.

```ts
async updateWebhook(
  webhookId: string,
  body?: WebhookRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookId` | `string` | Template, Required | The Id of the webhook to update. |
| `body` | [`WebhookRequest \| undefined`](../../doc/models/webhook-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhookResponse`](../../doc/models/webhook-response.md)

## Example Usage

```ts
const webhookId = 'webhookId6';

try {
  const { result, ...httpResponse } = await webhookController.updateWebhook(webhookId);
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


# Retrieve Webhook

Retrieves the webhook for the given Id. If you pass in null for the id, this will return all the webhooks.

```ts
async retrieveWebhook(
  webhookId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookId` | `string` | Template, Required | (Optional) The Id of the webhook. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhookResponse`](../../doc/models/webhook-response.md)

## Example Usage

```ts
const webhookId = 'webhookId6';

try {
  const { result, ...httpResponse } = await webhookController.retrieveWebhook(webhookId);
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


# Create Webhook

Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.

```ts
async createWebhook(
  webhookId: string,
  body?: WebhookRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookId` | `string` | Template, Required | (Optional) The Id for the webhook. If not provided a secure random UUID will be generated. |
| `body` | [`WebhookRequest \| undefined`](../../doc/models/webhook-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhookResponse`](../../doc/models/webhook-response.md)

## Example Usage

```ts
const webhookId = 'webhookId6';

try {
  const { result, ...httpResponse } = await webhookController.createWebhook(webhookId);
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


# Search Webhooks

Searches webhooks with the specified criteria and pagination.

```ts
async searchWebhooks(
  body?: WebhookSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WebhookSearchRequest \| undefined`](../../doc/models/webhook-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhookSearchResponse`](../../doc/models/webhook-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await webhookController.searchWebhooks();
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


# Retrieve Webhooks

Retrieves all the webhooks.

```ts
async retrieveWebhooks(
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhookResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhookResponse`](../../doc/models/webhook-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await webhookController.retrieveWebhooks();
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

