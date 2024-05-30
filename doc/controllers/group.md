# Group

```ts
const groupController = new GroupController(client);
```

## Class Name

`GroupController`

## Methods

* [Patch Group](../../doc/controllers/group.md#patch-group)
* [Create Group](../../doc/controllers/group.md#create-group)
* [Update Group](../../doc/controllers/group.md#update-group)
* [Update Group Members](../../doc/controllers/group.md#update-group-members)
* [Search Groups](../../doc/controllers/group.md#search-groups)
* [Retrieve Groups](../../doc/controllers/group.md#retrieve-groups)
* [Delete Group](../../doc/controllers/group.md#delete-group)
* [Create Group Members](../../doc/controllers/group.md#create-group-members)
* [Search Group Members](../../doc/controllers/group.md#search-group-members)
* [Retrieve Group](../../doc/controllers/group.md#retrieve-group)
* [Delete Group Members](../../doc/controllers/group.md#delete-group-members)


# Patch Group

Updates, via PATCH, the group with the given Id.

```ts
async patchGroup(
  groupId: string,
  xFusionAuthTenantId?: string,
  body?: GroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The Id of the group to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`GroupRequest \| undefined`](../../doc/models/group-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GroupResponse`](../../doc/models/group-response.md)

## Example Usage

```ts
const groupId = 'groupId2';

try {
  const { result, ...httpResponse } = await groupController.patchGroup(groupId);
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


# Create Group

Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.

```ts
async createGroup(
  groupId: string,
  xFusionAuthTenantId?: string,
  body?: GroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | (Optional) The Id for the group. If not provided a secure random UUID will be generated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`GroupRequest \| undefined`](../../doc/models/group-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GroupResponse`](../../doc/models/group-response.md)

## Example Usage

```ts
const groupId = 'groupId2';

try {
  const { result, ...httpResponse } = await groupController.createGroup(groupId);
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


# Update Group

Updates the group with the given Id.

```ts
async updateGroup(
  groupId: string,
  xFusionAuthTenantId?: string,
  body?: GroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The Id of the group to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`GroupRequest \| undefined`](../../doc/models/group-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GroupResponse`](../../doc/models/group-response.md)

## Example Usage

```ts
const groupId = 'groupId2';

try {
  const { result, ...httpResponse } = await groupController.updateGroup(groupId);
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


# Update Group Members

Creates a member in a group.

```ts
async updateGroupMembers(
  body?: MemberRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MemberResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MemberRequest \| undefined`](../../doc/models/member-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MemberResponse`](../../doc/models/member-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await groupController.updateGroupMembers();
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


# Search Groups

Searches groups with the specified criteria and pagination.

```ts
async searchGroups(
  body?: GroupSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GroupSearchRequest \| undefined`](../../doc/models/group-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GroupSearchResponse`](../../doc/models/group-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await groupController.searchGroups();
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


# Retrieve Groups

Retrieves all the groups.

```ts
async retrieveGroups(
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GroupResponse`](../../doc/models/group-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await groupController.retrieveGroups();
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


# Delete Group

Deletes the group for the given Id.

```ts
async deleteGroup(
  groupId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The Id of the group to delete. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const groupId = 'groupId2';

try {
  const { result, ...httpResponse } = await groupController.deleteGroup(groupId);
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


# Create Group Members

Creates a member in a group.

```ts
async createGroupMembers(
  body?: MemberRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MemberResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MemberRequest \| undefined`](../../doc/models/member-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MemberResponse`](../../doc/models/member-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await groupController.createGroupMembers();
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


# Search Group Members

Searches group members with the specified criteria and pagination.

```ts
async searchGroupMembers(
  body?: GroupMemberSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupMemberSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GroupMemberSearchRequest \| undefined`](../../doc/models/group-member-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GroupMemberSearchResponse`](../../doc/models/group-member-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await groupController.searchGroupMembers();
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


# Retrieve Group

Retrieves the group for the given Id.

```ts
async retrieveGroup(
  groupId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The Id of the group. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GroupResponse`](../../doc/models/group-response.md)

## Example Usage

```ts
const groupId = 'groupId2';

try {
  const { result, ...httpResponse } = await groupController.retrieveGroup(groupId);
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


# Delete Group Members

Removes users as members of a group.

```ts
async deleteGroupMembers(
  body?: MemberDeleteRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MemberDeleteRequest \| undefined`](../../doc/models/member-delete-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await groupController.deleteGroupMembers();
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

