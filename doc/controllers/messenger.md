# Messenger

```ts
const messengerController = new MessengerController(client);
```

## Class Name

`MessengerController`

## Methods

* [Patch Messenger](../../doc/controllers/messenger.md#patch-messenger)
* [Delete Messenger](../../doc/controllers/messenger.md#delete-messenger)
* [Retrieve Messenger](../../doc/controllers/messenger.md#retrieve-messenger)
* [Update Messenger](../../doc/controllers/messenger.md#update-messenger)
* [Retrieve Messengers](../../doc/controllers/messenger.md#retrieve-messengers)
* [Create Messenger](../../doc/controllers/messenger.md#create-messenger)


# Patch Messenger

Updates, via PATCH, the messenger with the given Id.

```ts
async patchMessenger(
  messengerId: string,
  body?: MessengerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MessengerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messengerId` | `string` | Template, Required | The Id of the messenger to update. |
| `body` | [`MessengerRequest \| undefined`](../../doc/models/messenger-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MessengerResponse`](../../doc/models/messenger-response.md)

## Example Usage

```ts
const messengerId = 'messengerId4';

try {
  const { result, ...httpResponse } = await messengerController.patchMessenger(messengerId);
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


# Delete Messenger

Deletes the messenger for the given Id.

```ts
async deleteMessenger(
  messengerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messengerId` | `string` | Template, Required | The Id of the messenger to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const messengerId = 'messengerId4';

try {
  const { result, ...httpResponse } = await messengerController.deleteMessenger(messengerId);
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


# Retrieve Messenger

Retrieves the messenger with the given Id.

```ts
async retrieveMessenger(
  messengerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MessengerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messengerId` | `string` | Template, Required | The Id of the messenger. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MessengerResponse`](../../doc/models/messenger-response.md)

## Example Usage

```ts
const messengerId = 'messengerId4';

try {
  const { result, ...httpResponse } = await messengerController.retrieveMessenger(messengerId);
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


# Update Messenger

Updates the messenger with the given Id.

```ts
async updateMessenger(
  messengerId: string,
  body?: MessengerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MessengerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messengerId` | `string` | Template, Required | The Id of the messenger to update. |
| `body` | [`MessengerRequest \| undefined`](../../doc/models/messenger-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MessengerResponse`](../../doc/models/messenger-response.md)

## Example Usage

```ts
const messengerId = 'messengerId4';

try {
  const { result, ...httpResponse } = await messengerController.updateMessenger(messengerId);
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


# Retrieve Messengers

Retrieves all the messengers.

```ts
async retrieveMessengers(
  requestOptions?: RequestOptions
): Promise<ApiResponse<MessengerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MessengerResponse`](../../doc/models/messenger-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await messengerController.retrieveMessengers();
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


# Create Messenger

Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.

```ts
async createMessenger(
  messengerId: string,
  body?: MessengerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MessengerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messengerId` | `string` | Template, Required | (Optional) The Id for the messenger. If not provided a secure random UUID will be generated. |
| `body` | [`MessengerRequest \| undefined`](../../doc/models/messenger-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MessengerResponse`](../../doc/models/messenger-response.md)

## Example Usage

```ts
const messengerId = 'messengerId4';

try {
  const { result, ...httpResponse } = await messengerController.createMessenger(messengerId);
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

