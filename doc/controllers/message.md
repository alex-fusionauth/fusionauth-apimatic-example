# Message

```ts
const messageController = new MessageController(client);
```

## Class Name

`MessageController`

## Methods

* [Retrieve Message Template](../../doc/controllers/message.md#retrieve-message-template)
* [Retrieve Message Template Preview](../../doc/controllers/message.md#retrieve-message-template-preview)
* [Delete Message Template](../../doc/controllers/message.md#delete-message-template)
* [Retrieve Message Templates](../../doc/controllers/message.md#retrieve-message-templates)
* [Create Message Template](../../doc/controllers/message.md#create-message-template)
* [Patch Message Template](../../doc/controllers/message.md#patch-message-template)
* [Update Message Template](../../doc/controllers/message.md#update-message-template)


# Retrieve Message Template

Retrieves the message template for the given Id. If you don't specify the id, this will return all the message templates.

```ts
async retrieveMessageTemplate(
  messageTemplateId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MessageTemplateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageTemplateId` | `string` | Template, Required | (Optional) The Id of the message template. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MessageTemplateResponse`](../../doc/models/message-template-response.md)

## Example Usage

```ts
const messageTemplateId = 'messageTemplateId2';

try {
  const { result, ...httpResponse } = await messageController.retrieveMessageTemplate(messageTemplateId);
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


# Retrieve Message Template Preview

Creates a preview of the message template provided in the request, normalized to a given locale.

```ts
async retrieveMessageTemplatePreview(
  body?: PreviewMessageTemplateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PreviewMessageTemplateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PreviewMessageTemplateRequest \| undefined`](../../doc/models/preview-message-template-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PreviewMessageTemplateResponse`](../../doc/models/preview-message-template-response.md)

## Example Usage

```ts
const body: PreviewMessageTemplateRequest = {
  locale: 'en_US',
};

try {
  const { result, ...httpResponse } = await messageController.retrieveMessageTemplatePreview(body);
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


# Delete Message Template

Deletes the message template for the given Id.

```ts
async deleteMessageTemplate(
  messageTemplateId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageTemplateId` | `string` | Template, Required | The Id of the message template to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const messageTemplateId = 'messageTemplateId2';

try {
  const { result, ...httpResponse } = await messageController.deleteMessageTemplate(messageTemplateId);
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


# Retrieve Message Templates

Retrieves all the message templates.

```ts
async retrieveMessageTemplates(
  requestOptions?: RequestOptions
): Promise<ApiResponse<MessageTemplateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MessageTemplateResponse`](../../doc/models/message-template-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await messageController.retrieveMessageTemplates();
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


# Create Message Template

Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.

```ts
async createMessageTemplate(
  messageTemplateId: string,
  body?: MessageTemplateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MessageTemplateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageTemplateId` | `string` | Template, Required | (Optional) The Id for the template. If not provided a secure random UUID will be generated. |
| `body` | [`MessageTemplateRequest \| undefined`](../../doc/models/message-template-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MessageTemplateResponse`](../../doc/models/message-template-response.md)

## Example Usage

```ts
const messageTemplateId = 'messageTemplateId2';

try {
  const { result, ...httpResponse } = await messageController.createMessageTemplate(messageTemplateId);
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


# Patch Message Template

Updates, via PATCH, the message template with the given Id.

```ts
async patchMessageTemplate(
  messageTemplateId: string,
  body?: MessageTemplateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MessageTemplateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageTemplateId` | `string` | Template, Required | The Id of the message template to update. |
| `body` | [`MessageTemplateRequest \| undefined`](../../doc/models/message-template-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MessageTemplateResponse`](../../doc/models/message-template-response.md)

## Example Usage

```ts
const messageTemplateId = 'messageTemplateId2';

try {
  const { result, ...httpResponse } = await messageController.patchMessageTemplate(messageTemplateId);
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


# Update Message Template

Updates the message template with the given Id.

```ts
async updateMessageTemplate(
  messageTemplateId: string,
  body?: MessageTemplateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MessageTemplateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageTemplateId` | `string` | Template, Required | The Id of the message template to update. |
| `body` | [`MessageTemplateRequest \| undefined`](../../doc/models/message-template-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MessageTemplateResponse`](../../doc/models/message-template-response.md)

## Example Usage

```ts
const messageTemplateId = 'messageTemplateId2';

try {
  const { result, ...httpResponse } = await messageController.updateMessageTemplate(messageTemplateId);
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

