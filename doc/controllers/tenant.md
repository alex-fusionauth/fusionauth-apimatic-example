# Tenant

```ts
const tenantController = new TenantController(client);
```

## Class Name

`TenantController`

## Methods

* [Create Tenant](../../doc/controllers/tenant.md#create-tenant)
* [Delete Tenant Async With Request](../../doc/controllers/tenant.md#delete-tenant-async-with-request)
* [Update Tenant](../../doc/controllers/tenant.md#update-tenant)
* [Search Tenants](../../doc/controllers/tenant.md#search-tenants)
* [Patch Tenant](../../doc/controllers/tenant.md#patch-tenant)
* [Retrieve Tenant](../../doc/controllers/tenant.md#retrieve-tenant)
* [Retrieve Password Validation Rules With Tenant Id](../../doc/controllers/tenant.md#retrieve-password-validation-rules-with-tenant-id)
* [Retrieve Tenants](../../doc/controllers/tenant.md#retrieve-tenants)
* [Retrieve Password Validation Rules](../../doc/controllers/tenant.md#retrieve-password-validation-rules)


# Create Tenant

Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.

```ts
async createTenant(
  tenantId: string,
  xFusionAuthTenantId?: string,
  body?: TenantRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TenantResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenantId` | `string` | Template, Required | (Optional) The Id for the tenant. If not provided a secure random UUID will be generated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`TenantRequest \| undefined`](../../doc/models/tenant-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TenantResponse`](../../doc/models/tenant-response.md)

## Example Usage

```ts
const tenantId = 'tenantId6';

try {
  const { result, ...httpResponse } = await tenantController.createTenant(tenantId);
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


# Delete Tenant Async With Request

Deletes the tenant based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc). OR Deletes the tenant for the given Id asynchronously. This method is helpful if you do not want to wait for the delete operation to complete. OR Deletes the tenant based on the given Id on the URL. This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc).

```ts
async deleteTenantAsyncWithRequest(
  tenantId: string,
  xFusionAuthTenantId?: string,
  async?: string,
  body?: TenantDeleteRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenantId` | `string` | Template, Required | The Id of the tenant to delete. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `async` | `string \| undefined` | Query, Optional | - |
| `body` | [`TenantDeleteRequest \| undefined`](../../doc/models/tenant-delete-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const tenantId = 'tenantId6';

try {
  const { result, ...httpResponse } = await tenantController.deleteTenantAsyncWithRequest(tenantId);
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


# Update Tenant

Updates the tenant with the given Id.

```ts
async updateTenant(
  tenantId: string,
  xFusionAuthTenantId?: string,
  body?: TenantRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TenantResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenantId` | `string` | Template, Required | The Id of the tenant to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`TenantRequest \| undefined`](../../doc/models/tenant-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TenantResponse`](../../doc/models/tenant-response.md)

## Example Usage

```ts
const tenantId = 'tenantId6';

try {
  const { result, ...httpResponse } = await tenantController.updateTenant(tenantId);
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


# Search Tenants

Searches tenants with the specified criteria and pagination.

```ts
async searchTenants(
  body?: TenantSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TenantSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TenantSearchRequest \| undefined`](../../doc/models/tenant-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TenantSearchResponse`](../../doc/models/tenant-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await tenantController.searchTenants();
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


# Patch Tenant

Updates, via PATCH, the tenant with the given Id.

```ts
async patchTenant(
  tenantId: string,
  xFusionAuthTenantId?: string,
  body?: TenantRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TenantResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenantId` | `string` | Template, Required | The Id of the tenant to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`TenantRequest \| undefined`](../../doc/models/tenant-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TenantResponse`](../../doc/models/tenant-response.md)

## Example Usage

```ts
const tenantId = 'tenantId6';

try {
  const { result, ...httpResponse } = await tenantController.patchTenant(tenantId);
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


# Retrieve Tenant

Retrieves the tenant for the given Id.

```ts
async retrieveTenant(
  tenantId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TenantResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenantId` | `string` | Template, Required | The Id of the tenant. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TenantResponse`](../../doc/models/tenant-response.md)

## Example Usage

```ts
const tenantId = 'tenantId6';

try {
  const { result, ...httpResponse } = await tenantController.retrieveTenant(tenantId);
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


# Retrieve Password Validation Rules With Tenant Id

Retrieves the password validation rules for a specific tenant.  This API does not require an API key.

```ts
async retrievePasswordValidationRulesWithTenantId(
  tenantId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PasswordValidationRulesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenantId` | `string` | Template, Required | The Id of the tenant. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PasswordValidationRulesResponse`](../../doc/models/password-validation-rules-response.md)

## Example Usage

```ts
const tenantId = 'tenantId6';

try {
  const { result, ...httpResponse } = await tenantController.retrievePasswordValidationRulesWithTenantId(tenantId);
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


# Retrieve Tenants

Retrieves all the tenants.

```ts
async retrieveTenants(
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TenantResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TenantResponse`](../../doc/models/tenant-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await tenantController.retrieveTenants();
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


# Retrieve Password Validation Rules

Retrieves the password validation rules for a specific tenant. This method requires a tenantId to be provided  through the use of a Tenant scoped API key or an HTTP header X-FusionAuth-TenantId to specify the Tenant Id.  This API does not require an API key.

```ts
async retrievePasswordValidationRules(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PasswordValidationRulesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PasswordValidationRulesResponse`](../../doc/models/password-validation-rules-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await tenantController.retrievePasswordValidationRules();
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

