# Identity-Provider

```ts
const identityProviderController = new IdentityProviderController(client);
```

## Class Name

`IdentityProviderController`

## Methods

* [Create Identity Provider](../../doc/controllers/identity-provider.md#create-identity-provider)
* [Delete Identity Provider](../../doc/controllers/identity-provider.md#delete-identity-provider)
* [Patch Identity Provider](../../doc/controllers/identity-provider.md#patch-identity-provider)
* [Update Identity Provider](../../doc/controllers/identity-provider.md#update-identity-provider)
* [Delete User Link](../../doc/controllers/identity-provider.md#delete-user-link)
* [Lookup Identity Provider](../../doc/controllers/identity-provider.md#lookup-identity-provider)
* [Search Identity Providers](../../doc/controllers/identity-provider.md#search-identity-providers)
* [Start Identity Provider Login](../../doc/controllers/identity-provider.md#start-identity-provider-login)
* [Retrieve Identity Provider](../../doc/controllers/identity-provider.md#retrieve-identity-provider)
* [Retrieve Identity Provider by Type](../../doc/controllers/identity-provider.md#retrieve-identity-provider-by-type)
* [Create User Link](../../doc/controllers/identity-provider.md#create-user-link)
* [Identity Provider Login](../../doc/controllers/identity-provider.md#identity-provider-login)
* [Retrieve Pending Link](../../doc/controllers/identity-provider.md#retrieve-pending-link)
* [Retrieve Identity Provider Linkretrieve User Linkretrieve User Links by User Id](../../doc/controllers/identity-provider.md#retrieve-identity-provider-linkretrieve-user-linkretrieve-user-links-by-user-id)


# Create Identity Provider

Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.

```ts
async createIdentityProvider(
  identityProviderId: string,
  body?: IdentityProviderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityProviderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProviderId` | `string` | Template, Required | (Optional) The Id of the identity provider. If not provided a secure random UUID will be generated. |
| `body` | [`IdentityProviderRequest \| undefined`](../../doc/models/identity-provider-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityProviderResponse`](../../doc/models/identity-provider-response.md)

## Example Usage

```ts
const identityProviderId = 'identityProviderId8';

try {
  const { result, ...httpResponse } = await identityProviderController.createIdentityProvider(identityProviderId);
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


# Delete Identity Provider

Deletes the identity provider for the given Id.

```ts
async deleteIdentityProvider(
  identityProviderId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProviderId` | `string` | Template, Required | The Id of the identity provider to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const identityProviderId = 'identityProviderId8';

try {
  const { result, ...httpResponse } = await identityProviderController.deleteIdentityProvider(identityProviderId);
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


# Patch Identity Provider

Updates, via PATCH, the identity provider with the given Id.

```ts
async patchIdentityProvider(
  identityProviderId: string,
  body?: IdentityProviderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityProviderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProviderId` | `string` | Template, Required | The Id of the identity provider to update. |
| `body` | [`IdentityProviderRequest \| undefined`](../../doc/models/identity-provider-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityProviderResponse`](../../doc/models/identity-provider-response.md)

## Example Usage

```ts
const identityProviderId = 'identityProviderId8';

try {
  const { result, ...httpResponse } = await identityProviderController.patchIdentityProvider(identityProviderId);
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


# Update Identity Provider

Updates the identity provider with the given Id.

```ts
async updateIdentityProvider(
  identityProviderId: string,
  body?: IdentityProviderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityProviderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProviderId` | `string` | Template, Required | The Id of the identity provider to update. |
| `body` | [`IdentityProviderRequest \| undefined`](../../doc/models/identity-provider-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityProviderResponse`](../../doc/models/identity-provider-response.md)

## Example Usage

```ts
const identityProviderId = 'identityProviderId8';

try {
  const { result, ...httpResponse } = await identityProviderController.updateIdentityProvider(identityProviderId);
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


# Delete User Link

Remove an existing link that has been made from a 3rd party identity provider to a FusionAuth user.

```ts
async deleteUserLink(
  identityProviderId?: string,
  identityProviderUserId?: string,
  userId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityProviderLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProviderId` | `string \| undefined` | Query, Optional | The unique Id of the identity provider. |
| `identityProviderUserId` | `string \| undefined` | Query, Optional | The unique Id of the user in the 3rd party identity provider to unlink. |
| `userId` | `string \| undefined` | Query, Optional | The unique Id of the FusionAuth user to unlink. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityProviderLinkResponse`](../../doc/models/identity-provider-link-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await identityProviderController.deleteUserLink();
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


# Lookup Identity Provider

Retrieves the identity provider for the given domain. A 200 response code indicates the domain is managed by a registered identity provider. A 404 indicates the domain is not managed.

```ts
async lookupIdentityProvider(
  domain?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LookupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domain` | `string \| undefined` | Query, Optional | The domain or email address to lookup. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LookupResponse`](../../doc/models/lookup-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await identityProviderController.lookupIdentityProvider();
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


# Search Identity Providers

Searches identity providers with the specified criteria and pagination.

```ts
async searchIdentityProviders(
  body?: IdentityProviderSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityProviderSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`IdentityProviderSearchRequest \| undefined`](../../doc/models/identity-provider-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityProviderSearchResponse`](../../doc/models/identity-provider-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await identityProviderController.searchIdentityProviders();
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


# Start Identity Provider Login

Begins a login request for a 3rd party login that requires user interaction such as HYPR.

```ts
async startIdentityProviderLogin(
  body?: IdentityProviderStartLoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityProviderStartLoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`IdentityProviderStartLoginRequest \| undefined`](../../doc/models/identity-provider-start-login-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityProviderStartLoginResponse`](../../doc/models/identity-provider-start-login-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await identityProviderController.startIdentityProviderLogin();
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


# Retrieve Identity Provider

Retrieves the identity provider for the given Id or all the identity providers if the Id is null.

```ts
async retrieveIdentityProvider(
  identityProviderId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityProviderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProviderId` | `string` | Template, Required | The identity provider Id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityProviderResponse`](../../doc/models/identity-provider-response.md)

## Example Usage

```ts
const identityProviderId = 'identityProviderId8';

try {
  const { result, ...httpResponse } = await identityProviderController.retrieveIdentityProvider(identityProviderId);
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


# Retrieve Identity Provider by Type

Retrieves one or more identity provider for the given type. For types such as Google, Facebook, Twitter and LinkedIn, only a single  identity provider can exist. For types such as OpenID Connect and SAMLv2 more than one identity provider can be configured so this request  may return multiple identity providers.

```ts
async retrieveIdentityProviderByType(
  type?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityProviderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Query, Optional | The type of the identity provider. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityProviderResponse`](../../doc/models/identity-provider-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await identityProviderController.retrieveIdentityProviderByType();
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


# Create User Link

Link an external user from a 3rd party identity provider to a FusionAuth user.

```ts
async createUserLink(
  body?: IdentityProviderLinkRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityProviderLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`IdentityProviderLinkRequest \| undefined`](../../doc/models/identity-provider-link-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityProviderLinkResponse`](../../doc/models/identity-provider-link-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await identityProviderController.createUserLink();
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


# Identity Provider Login

Handles login via third-parties including Social login, external OAuth and OpenID Connect, and other login systems.

```ts
async identityProviderLogin(
  xFusionAuthTenantId?: string,
  body?: IdentityProviderLoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`IdentityProviderLoginRequest \| undefined`](../../doc/models/identity-provider-login-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await identityProviderController.identityProviderLogin();
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


# Retrieve Pending Link

Retrieve a pending identity provider link. This is useful to validate a pending link and retrieve meta-data about the identity provider link.

```ts
async retrievePendingLink(
  pendingLinkId: string,
  userId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityProviderPendingLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pendingLinkId` | `string` | Template, Required | The pending link Id. |
| `userId` | `string \| undefined` | Query, Optional | The optional userId. When provided additional meta-data will be provided to identify how many links if any the user already has. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityProviderPendingLinkResponse`](../../doc/models/identity-provider-pending-link-response.md)

## Example Usage

```ts
const pendingLinkId = 'pendingLinkId6';

try {
  const { result, ...httpResponse } = await identityProviderController.retrievePendingLink(pendingLinkId);
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


# Retrieve Identity Provider Linkretrieve User Linkretrieve User Links by User Id

Retrieve all Identity Provider users (links) for the user. Specify the optional identityProviderId to retrieve links for a particular IdP. OR Retrieve a single Identity Provider user (link).

```ts
async retrieveIdentityProviderLinkretrieveUserLinkretrieveUserLinksByUserId(
  identityProviderId?: string,
  userId?: string,
  identityProviderUserId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityProviderLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProviderId` | `string \| undefined` | Query, Optional | (Optional) The unique Id of the identity provider. Specify this value to reduce the links returned to those for a particular IdP. |
| `userId` | `string \| undefined` | Query, Optional | The unique Id of the user. |
| `identityProviderUserId` | `string \| undefined` | Query, Optional | The unique Id of the user in the 3rd party identity provider. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityProviderLinkResponse`](../../doc/models/identity-provider-link-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await identityProviderController.retrieveIdentityProviderLinkretrieveUserLinkretrieveUserLinksByUserId();
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

