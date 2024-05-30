# Ip-Acl

```ts
const ipAclController = new IpAclController(client);
```

## Class Name

`IpAclController`

## Methods

* [Create IP Access Control List](../../doc/controllers/ip-acl.md#create-ip-access-control-list)
* [Delete IP Access Control List](../../doc/controllers/ip-acl.md#delete-ip-access-control-list)
* [Update IP Access Control List](../../doc/controllers/ip-acl.md#update-ip-access-control-list)
* [Retrieve IP Access Control List](../../doc/controllers/ip-acl.md#retrieve-ip-access-control-list)
* [Search IP Access Control Lists](../../doc/controllers/ip-acl.md#search-ip-access-control-lists)


# Create IP Access Control List

Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.

```ts
async createIPAccessControlList(
  accessControlListId: string,
  body?: IPAccessControlListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPAccessControlListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessControlListId` | `string` | Template, Required | (Optional) The Id for the IP Access Control List. If not provided a secure random UUID will be generated. |
| `body` | [`IPAccessControlListRequest \| undefined`](../../doc/models/ip-access-control-list-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPAccessControlListResponse`](../../doc/models/ip-access-control-list-response.md)

## Example Usage

```ts
const accessControlListId = 'accessControlListId2';

try {
  const { result, ...httpResponse } = await ipAclController.createIPAccessControlList(accessControlListId);
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


# Delete IP Access Control List

Deletes the IP Access Control List for the given Id.

```ts
async deleteIPAccessControlList(
  accessControlListId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessControlListId` | `string` | Template, Required | The Id of the IP Access Control List to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const accessControlListId = 'accessControlListId2';

try {
  const { result, ...httpResponse } = await ipAclController.deleteIPAccessControlList(accessControlListId);
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


# Update IP Access Control List

Updates the IP Access Control List with the given Id.

```ts
async updateIPAccessControlList(
  accessControlListId: string,
  body?: IPAccessControlListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPAccessControlListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessControlListId` | `string` | Template, Required | The Id of the IP Access Control List to update. |
| `body` | [`IPAccessControlListRequest \| undefined`](../../doc/models/ip-access-control-list-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPAccessControlListResponse`](../../doc/models/ip-access-control-list-response.md)

## Example Usage

```ts
const accessControlListId = 'accessControlListId2';

try {
  const { result, ...httpResponse } = await ipAclController.updateIPAccessControlList(accessControlListId);
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


# Retrieve IP Access Control List

Retrieves the IP Access Control List with the given Id.

```ts
async retrieveIPAccessControlList(
  accessControlListId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPAccessControlListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessControlListId` | `string` | Template, Required | The Id of the IP Access Control List. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPAccessControlListResponse`](../../doc/models/ip-access-control-list-response.md)

## Example Usage

```ts
const accessControlListId = 'accessControlListId2';

try {
  const { result, ...httpResponse } = await ipAclController.retrieveIPAccessControlList(accessControlListId);
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


# Search IP Access Control Lists

Searches the IP Access Control Lists with the specified criteria and pagination.

```ts
async searchIPAccessControlLists(
  body?: IPAccessControlListSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPAccessControlListSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`IPAccessControlListSearchRequest \| undefined`](../../doc/models/ip-access-control-list-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPAccessControlListSearchResponse`](../../doc/models/ip-access-control-list-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await ipAclController.searchIPAccessControlLists();
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

