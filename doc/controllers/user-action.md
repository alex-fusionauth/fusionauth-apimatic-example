# User-Action

```ts
const userActionController = new UserActionController(client);
```

## Class Name

`UserActionController`

## Methods

* [Delete User Actiondeactivate User Action](../../doc/controllers/user-action.md#delete-user-actiondeactivate-user-action)
* [Update User Actionreactivate User Action](../../doc/controllers/user-action.md#update-user-actionreactivate-user-action)
* [Create User Action](../../doc/controllers/user-action.md#create-user-action)
* [Patch User Action](../../doc/controllers/user-action.md#patch-user-action)
* [Retrieve User Action](../../doc/controllers/user-action.md#retrieve-user-action)
* [Retrieve Inactive User Actions](../../doc/controllers/user-action.md#retrieve-inactive-user-actions)


# Delete User Actiondeactivate User Action

Deletes the user action for the given Id. This permanently deletes the user action and also any history and logs of the action being applied to any users. OR Deactivates the user action with the given Id.

```ts
async deleteUserActiondeactivateUserAction(
  userActionId: string,
  hardDelete?: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActionId` | `string` | Template, Required | The Id of the user action to delete. |
| `hardDelete` | `string \| undefined` | Query, Optional | - |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userActionId = 'userActionId2';

try {
  const { result, ...httpResponse } = await userActionController.deleteUserActiondeactivateUserAction(userActionId);
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


# Update User Actionreactivate User Action

Updates the user action with the given Id. OR Reactivates the user action with the given Id.

```ts
async updateUserActionreactivateUserAction(
  userActionId: string,
  xFusionAuthTenantId?: string,
  reactivate?: string,
  body?: UserActionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActionId` | `string` | Template, Required | The Id of the user action to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `reactivate` | `string \| undefined` | Query, Optional | - |
| `body` | [`UserActionRequest \| undefined`](../../doc/models/user-action-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserActionResponse`](../../doc/models/user-action-response.md)

## Example Usage

```ts
const userActionId = 'userActionId2';

try {
  const { result, ...httpResponse } = await userActionController.updateUserActionreactivateUserAction(userActionId);
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


# Create User Action

Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.

```ts
async createUserAction(
  userActionId: string,
  xFusionAuthTenantId?: string,
  body?: UserActionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActionId` | `string` | Template, Required | (Optional) The Id for the user action. If not provided a secure random UUID will be generated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`UserActionRequest \| undefined`](../../doc/models/user-action-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserActionResponse`](../../doc/models/user-action-response.md)

## Example Usage

```ts
const userActionId = 'userActionId2';

try {
  const { result, ...httpResponse } = await userActionController.createUserAction(userActionId);
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


# Patch User Action

Updates, via PATCH, the user action with the given Id.

```ts
async patchUserAction(
  userActionId: string,
  xFusionAuthTenantId?: string,
  body?: UserActionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActionId` | `string` | Template, Required | The Id of the user action to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`UserActionRequest \| undefined`](../../doc/models/user-action-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserActionResponse`](../../doc/models/user-action-response.md)

## Example Usage

```ts
const userActionId = 'userActionId2';

try {
  const { result, ...httpResponse } = await userActionController.patchUserAction(userActionId);
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


# Retrieve User Action

Retrieves the user action for the given Id. If you pass in null for the id, this will return all the user actions.

```ts
async retrieveUserAction(
  userActionId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActionId` | `string` | Template, Required | (Optional) The Id of the user action. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserActionResponse`](../../doc/models/user-action-response.md)

## Example Usage

```ts
const userActionId = 'userActionId2';

try {
  const { result, ...httpResponse } = await userActionController.retrieveUserAction(userActionId);
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


# Retrieve Inactive User Actions

Retrieves all the user actions that are currently inactive.

```ts
async retrieveInactiveUserActions(
  inactive?: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `inactive` | `string \| undefined` | Query, Optional | - |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserActionResponse`](../../doc/models/user-action-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userActionController.retrieveInactiveUserActions();
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

