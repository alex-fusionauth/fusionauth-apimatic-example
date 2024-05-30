# User-Action-Reason

```ts
const userActionReasonController = new UserActionReasonController(client);
```

## Class Name

`UserActionReasonController`

## Methods

* [Create User Action Reason](../../doc/controllers/user-action-reason.md#create-user-action-reason)
* [Delete User Action Reason](../../doc/controllers/user-action-reason.md#delete-user-action-reason)
* [Retrieve User Action Reason](../../doc/controllers/user-action-reason.md#retrieve-user-action-reason)
* [Patch User Action Reason](../../doc/controllers/user-action-reason.md#patch-user-action-reason)
* [Update User Action Reason](../../doc/controllers/user-action-reason.md#update-user-action-reason)
* [Retrieve User Action Reasons](../../doc/controllers/user-action-reason.md#retrieve-user-action-reasons)


# Create User Action Reason

Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.

```ts
async createUserActionReason(
  userActionReasonId: string,
  body?: UserActionReasonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserActionReasonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActionReasonId` | `string` | Template, Required | (Optional) The Id for the user action reason. If not provided a secure random UUID will be generated. |
| `body` | [`UserActionReasonRequest \| undefined`](../../doc/models/user-action-reason-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserActionReasonResponse`](../../doc/models/user-action-reason-response.md)

## Example Usage

```ts
const userActionReasonId = 'userActionReasonId4';

try {
  const { result, ...httpResponse } = await userActionReasonController.createUserActionReason(userActionReasonId);
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


# Delete User Action Reason

Deletes the user action reason for the given Id.

```ts
async deleteUserActionReason(
  userActionReasonId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActionReasonId` | `string` | Template, Required | The Id of the user action reason to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userActionReasonId = 'userActionReasonId4';

try {
  const { result, ...httpResponse } = await userActionReasonController.deleteUserActionReason(userActionReasonId);
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


# Retrieve User Action Reason

Retrieves the user action reason for the given Id. If you pass in null for the id, this will return all the user action reasons.

```ts
async retrieveUserActionReason(
  userActionReasonId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserActionReasonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActionReasonId` | `string` | Template, Required | (Optional) The Id of the user action reason. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserActionReasonResponse`](../../doc/models/user-action-reason-response.md)

## Example Usage

```ts
const userActionReasonId = 'userActionReasonId4';

try {
  const { result, ...httpResponse } = await userActionReasonController.retrieveUserActionReason(userActionReasonId);
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


# Patch User Action Reason

Updates, via PATCH, the user action reason with the given Id.

```ts
async patchUserActionReason(
  userActionReasonId: string,
  body?: UserActionReasonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserActionReasonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActionReasonId` | `string` | Template, Required | The Id of the user action reason to update. |
| `body` | [`UserActionReasonRequest \| undefined`](../../doc/models/user-action-reason-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserActionReasonResponse`](../../doc/models/user-action-reason-response.md)

## Example Usage

```ts
const userActionReasonId = 'userActionReasonId4';

try {
  const { result, ...httpResponse } = await userActionReasonController.patchUserActionReason(userActionReasonId);
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


# Update User Action Reason

Updates the user action reason with the given Id.

```ts
async updateUserActionReason(
  userActionReasonId: string,
  body?: UserActionReasonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserActionReasonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActionReasonId` | `string` | Template, Required | The Id of the user action reason to update. |
| `body` | [`UserActionReasonRequest \| undefined`](../../doc/models/user-action-reason-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserActionReasonResponse`](../../doc/models/user-action-reason-response.md)

## Example Usage

```ts
const userActionReasonId = 'userActionReasonId4';

try {
  const { result, ...httpResponse } = await userActionReasonController.updateUserActionReason(userActionReasonId);
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


# Retrieve User Action Reasons

Retrieves all the user action reasons.

```ts
async retrieveUserActionReasons(
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserActionReasonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserActionReasonResponse`](../../doc/models/user-action-reason-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userActionReasonController.retrieveUserActionReasons();
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

