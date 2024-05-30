# Application

```ts
const applicationController = new ApplicationController(client);
```

## Class Name

`ApplicationController`

## Methods

* [Create Application](../../doc/controllers/application.md#create-application)
* [Delete Application Role](../../doc/controllers/application.md#delete-application-role)
* [Update Application Role](../../doc/controllers/application.md#update-application-role)
* [Retrieve Inactive Applications](../../doc/controllers/application.md#retrieve-inactive-applications)
* [Delete Applicationdeactivate Application](../../doc/controllers/application.md#delete-applicationdeactivate-application)
* [Update Applicationreactivate Application](../../doc/controllers/application.md#update-applicationreactivate-application)
* [Retrieve Application](../../doc/controllers/application.md#retrieve-application)
* [Create O Auth Scope](../../doc/controllers/application.md#create-o-auth-scope)
* [Delete O Auth Scope](../../doc/controllers/application.md#delete-o-auth-scope)
* [Patch O Auth Scope](../../doc/controllers/application.md#patch-o-auth-scope)
* [Retrieve Oauth Configuration](../../doc/controllers/application.md#retrieve-oauth-configuration)
* [Patch Application](../../doc/controllers/application.md#patch-application)
* [Patch Application Role](../../doc/controllers/application.md#patch-application-role)
* [Create Application Role](../../doc/controllers/application.md#create-application-role)
* [Retrieve O Auth Scope](../../doc/controllers/application.md#retrieve-o-auth-scope)
* [Update O Auth Scope](../../doc/controllers/application.md#update-o-auth-scope)
* [Search Applications](../../doc/controllers/application.md#search-applications)


# Create Application

Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.

```ts
async createApplication(
  applicationId: string,
  xFusionAuthTenantId?: string,
  body?: ApplicationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | (Optional) The Id to use for the application. If not provided a secure random UUID will be generated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`ApplicationRequest \| undefined`](../../doc/models/application-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationResponse`](../../doc/models/application-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

try {
  const { result, ...httpResponse } = await applicationController.createApplication(applicationId);
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


# Delete Application Role

Hard deletes an application role. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given role from all users that had it.

```ts
async deleteApplicationRole(
  applicationId: string,
  roleId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application that the role belongs to. |
| `roleId` | `string` | Template, Required | The Id of the role to delete. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const applicationId = 'applicationId0';

const roleId = 'roleId6';

try {
  const { result, ...httpResponse } = await applicationController.deleteApplicationRole(
  applicationId,
  roleId
);
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


# Update Application Role

Updates the application role with the given Id for the application.

```ts
async updateApplicationRole(
  applicationId: string,
  roleId: string,
  xFusionAuthTenantId?: string,
  body?: ApplicationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application that the role belongs to. |
| `roleId` | `string` | Template, Required | The Id of the role to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`ApplicationRequest \| undefined`](../../doc/models/application-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationResponse`](../../doc/models/application-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

const roleId = 'roleId6';

try {
  const { result, ...httpResponse } = await applicationController.updateApplicationRole(
  applicationId,
  roleId
);
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


# Retrieve Inactive Applications

Retrieves all the applications that are currently inactive.

```ts
async retrieveInactiveApplications(
  inactive?: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `inactive` | `string \| undefined` | Query, Optional | - |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationResponse`](../../doc/models/application-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await applicationController.retrieveInactiveApplications();
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


# Delete Applicationdeactivate Application

Hard deletes an application. This is a dangerous operation and should not be used in most circumstances. This will delete the application, any registrations for that application, metrics and reports for the application, all the roles for the application, and any other data associated with the application. This operation could take a very long time, depending on the amount of data in your database. OR Deactivates the application with the given Id.

```ts
async deleteApplicationdeactivateApplication(
  applicationId: string,
  hardDelete?: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application to delete. |
| `hardDelete` | `string \| undefined` | Query, Optional | - |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const applicationId = 'applicationId0';

try {
  const { result, ...httpResponse } = await applicationController.deleteApplicationdeactivateApplication(applicationId);
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


# Update Applicationreactivate Application

Updates the application with the given Id. OR Reactivates the application with the given Id.

```ts
async updateApplicationreactivateApplication(
  applicationId: string,
  xFusionAuthTenantId?: string,
  reactivate?: string,
  body?: ApplicationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `reactivate` | `string \| undefined` | Query, Optional | - |
| `body` | [`ApplicationRequest \| undefined`](../../doc/models/application-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationResponse`](../../doc/models/application-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

try {
  const { result, ...httpResponse } = await applicationController.updateApplicationreactivateApplication(applicationId);
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


# Retrieve Application

Retrieves the application for the given Id or all the applications if the Id is null.

```ts
async retrieveApplication(
  applicationId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | (Optional) The application id. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationResponse`](../../doc/models/application-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

try {
  const { result, ...httpResponse } = await applicationController.retrieveApplication(applicationId);
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


# Create O Auth Scope

Creates a new custom OAuth scope for an application. You must specify the Id of the application you are creating the scope for. You can optionally specify an Id for the OAuth scope on the URL, if not provided one will be generated.

```ts
async createOAuthScope(
  applicationId: string,
  scopeId: string,
  xFusionAuthTenantId?: string,
  body?: ApplicationOAuthScopeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationOAuthScopeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application to create the OAuth scope on. |
| `scopeId` | `string` | Template, Required | (Optional) The Id of the OAuth scope. If not provided a secure random UUID will be generated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`ApplicationOAuthScopeRequest \| undefined`](../../doc/models/application-o-auth-scope-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationOAuthScopeResponse`](../../doc/models/application-o-auth-scope-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

const scopeId = 'scopeId8';

try {
  const { result, ...httpResponse } = await applicationController.createOAuthScope(
  applicationId,
  scopeId
);
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


# Delete O Auth Scope

Hard deletes a custom OAuth scope. OAuth workflows that are still requesting the deleted OAuth scope may fail depending on the application's unknown scope policy.

```ts
async deleteOAuthScope(
  applicationId: string,
  scopeId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application that the OAuth scope belongs to. |
| `scopeId` | `string` | Template, Required | The Id of the OAuth scope to delete. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const applicationId = 'applicationId0';

const scopeId = 'scopeId8';

try {
  const { result, ...httpResponse } = await applicationController.deleteOAuthScope(
  applicationId,
  scopeId
);
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


# Patch O Auth Scope

Updates, via PATCH, the custom OAuth scope with the given Id for the application.

```ts
async patchOAuthScope(
  applicationId: string,
  scopeId: string,
  xFusionAuthTenantId?: string,
  body?: ApplicationOAuthScopeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationOAuthScopeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application that the OAuth scope belongs to. |
| `scopeId` | `string` | Template, Required | The Id of the OAuth scope to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`ApplicationOAuthScopeRequest \| undefined`](../../doc/models/application-o-auth-scope-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationOAuthScopeResponse`](../../doc/models/application-o-auth-scope-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

const scopeId = 'scopeId8';

try {
  const { result, ...httpResponse } = await applicationController.patchOAuthScope(
  applicationId,
  scopeId
);
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


# Retrieve Oauth Configuration

Retrieves the Oauth2 configuration for the application for the given Application Id.

```ts
async retrieveOauthConfiguration(
  applicationId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OAuthConfigurationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the Application to retrieve OAuth configuration. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OAuthConfigurationResponse`](../../doc/models/o-auth-configuration-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

try {
  const { result, ...httpResponse } = await applicationController.retrieveOauthConfiguration(applicationId);
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


# Patch Application

Updates, via PATCH, the application with the given Id.

```ts
async patchApplication(
  applicationId: string,
  xFusionAuthTenantId?: string,
  body?: ApplicationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`ApplicationRequest \| undefined`](../../doc/models/application-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationResponse`](../../doc/models/application-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

try {
  const { result, ...httpResponse } = await applicationController.patchApplication(applicationId);
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


# Patch Application Role

Updates, via PATCH, the application role with the given Id for the application.

```ts
async patchApplicationRole(
  applicationId: string,
  roleId: string,
  xFusionAuthTenantId?: string,
  body?: ApplicationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application that the role belongs to. |
| `roleId` | `string` | Template, Required | The Id of the role to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`ApplicationRequest \| undefined`](../../doc/models/application-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationResponse`](../../doc/models/application-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

const roleId = 'roleId6';

try {
  const { result, ...httpResponse } = await applicationController.patchApplicationRole(
  applicationId,
  roleId
);
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


# Create Application Role

Creates a new role for an application. You must specify the Id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.

```ts
async createApplicationRole(
  applicationId: string,
  roleId: string,
  xFusionAuthTenantId?: string,
  body?: ApplicationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application to create the role on. |
| `roleId` | `string` | Template, Required | (Optional) The Id of the role. If not provided a secure random UUID will be generated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`ApplicationRequest \| undefined`](../../doc/models/application-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationResponse`](../../doc/models/application-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

const roleId = 'roleId6';

try {
  const { result, ...httpResponse } = await applicationController.createApplicationRole(
  applicationId,
  roleId
);
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


# Retrieve O Auth Scope

Retrieves a custom OAuth scope.

```ts
async retrieveOAuthScope(
  applicationId: string,
  scopeId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationOAuthScopeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application that the OAuth scope belongs to. |
| `scopeId` | `string` | Template, Required | The Id of the OAuth scope to retrieve. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationOAuthScopeResponse`](../../doc/models/application-o-auth-scope-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

const scopeId = 'scopeId8';

try {
  const { result, ...httpResponse } = await applicationController.retrieveOAuthScope(
  applicationId,
  scopeId
);
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


# Update O Auth Scope

Updates the OAuth scope with the given Id for the application.

```ts
async updateOAuthScope(
  applicationId: string,
  scopeId: string,
  xFusionAuthTenantId?: string,
  body?: ApplicationOAuthScopeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationOAuthScopeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` | Template, Required | The Id of the application that the OAuth scope belongs to. |
| `scopeId` | `string` | Template, Required | The Id of the OAuth scope to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`ApplicationOAuthScopeRequest \| undefined`](../../doc/models/application-o-auth-scope-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationOAuthScopeResponse`](../../doc/models/application-o-auth-scope-response.md)

## Example Usage

```ts
const applicationId = 'applicationId0';

const scopeId = 'scopeId8';

try {
  const { result, ...httpResponse } = await applicationController.updateOAuthScope(
  applicationId,
  scopeId
);
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


# Search Applications

Searches applications with the specified criteria and pagination.

```ts
async searchApplications(
  body?: ApplicationSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplicationSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApplicationSearchRequest \| undefined`](../../doc/models/application-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplicationSearchResponse`](../../doc/models/application-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await applicationController.searchApplications();
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

