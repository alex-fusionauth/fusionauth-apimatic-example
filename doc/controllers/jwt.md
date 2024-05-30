# Jwt

```ts
const jwtController = new JwtController(client);
```

## Class Name

`JwtController`

## Methods

* [Retrieve Refresh Token by Id](../../doc/controllers/jwt.md#retrieve-refresh-token-by-id)
* [Retrieve Refresh Tokens](../../doc/controllers/jwt.md#retrieve-refresh-tokens)
* [Retrieve Jwt Public Keyretrieve JWT Public Keyretrieve JWT Public Key by Application Id](../../doc/controllers/jwt.md#retrieve-jwt-public-keyretrieve-jwt-public-keyretrieve-jwt-public-key-by-application-id)
* [Validate JWT](../../doc/controllers/jwt.md#validate-jwt)
* [Issue JWT](../../doc/controllers/jwt.md#issue-jwt)
* [Exchange Refresh Token for JWT](../../doc/controllers/jwt.md#exchange-refresh-token-for-jwt)
* [Delete Jwt Refreshrevoke Refresh Tokenrevoke Refresh Token by Tokenrevoke Refresh Tokens by Application Idrevoke Refresh Tokens by User Idrevoke Refresh Tokens by User Id for Applicationrevoke Refresh Tokens With Request](../../doc/controllers/jwt.md#delete-jwt-refreshrevoke-refresh-tokenrevoke-refresh-token-by-tokenrevoke-refresh-tokens-by-application-idrevoke-refresh-tokens-by-user-idrevoke-refresh-tokens-by-user-id-for-applicationrevoke-refresh-tokens-with-request)
* [Reconcile JWT](../../doc/controllers/jwt.md#reconcile-jwt)
* [Revoke Refresh Token by Id](../../doc/controllers/jwt.md#revoke-refresh-token-by-id)
* [Vend JWT](../../doc/controllers/jwt.md#vend-jwt)


# Retrieve Refresh Token by Id

Retrieves a single refresh token by unique Id. This is not the same thing as the string value of the refresh token. If you have that, you already have what you need.

```ts
async retrieveRefreshTokenById(
  tokenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RefreshTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenId` | `string` | Template, Required | The Id of the token. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RefreshTokenResponse`](../../doc/models/refresh-token-response.md)

## Example Usage

```ts
const tokenId = 'tokenId0';

try {
  const { result, ...httpResponse } = await jwtController.retrieveRefreshTokenById(tokenId);
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


# Retrieve Refresh Tokens

Retrieves the refresh tokens that belong to the user with the given Id.

```ts
async retrieveRefreshTokens(
  userId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RefreshTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Query, Optional | The Id of the user. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RefreshTokenResponse`](../../doc/models/refresh-token-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jwtController.retrieveRefreshTokens();
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


# Retrieve Jwt Public Keyretrieve JWT Public Keyretrieve JWT Public Key by Application Id

Retrieves the Public Key configured for verifying the JSON Web Tokens (JWT) issued by the Login API by the Application Id. OR Retrieves the Public Key configured for verifying JSON Web Tokens (JWT) by the key Id (kid).

```ts
async retrieveJwtPublicKeyretrieveJWTPublicKeyretrieveJWTPublicKeyByApplicationId(
  applicationId?: string,
  keyId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublicKeyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Query, Optional | The Id of the Application for which this key is used. |
| `keyId` | `string \| undefined` | Query, Optional | The Id of the public key (kid). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublicKeyResponse`](../../doc/models/public-key-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jwtController.retrieveJwtPublicKeyretrieveJWTPublicKeyretrieveJWTPublicKeyByApplicationId();
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


# Validate JWT

Validates the provided JWT (encoded JWT string) to ensure the token is valid. A valid access token is properly signed and not expired. <p> This API may be used to verify the JWT as well as decode the encoded JWT into human readable identity claims.

```ts
async validateJWT(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ValidateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ValidateResponse`](../../doc/models/validate-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jwtController.validateJWT();
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


# Issue JWT

Issue a new access token (JWT) for the requested Application after ensuring the provided JWT is valid. A valid access token is properly signed and not expired. <p> This API may be used in an SSO configuration to issue new tokens for another application after the user has obtained a valid token from authentication.

```ts
async issueJWT(
  applicationId?: string,
  refreshToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IssueResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Query, Optional | The Application Id for which you are requesting a new access token be issued. |
| `refreshToken` | `string \| undefined` | Query, Optional | (Optional) An existing refresh token used to request a refresh token in addition to a JWT in the response. <p>The target application represented by the applicationId request parameter must have refresh tokens enabled in order to receive a refresh token in the response.</p> |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IssueResponse`](../../doc/models/issue-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jwtController.issueJWT();
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


# Exchange Refresh Token for JWT

Exchange a refresh token for a new JWT.

```ts
async exchangeRefreshTokenForJWT(
  body?: RefreshRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<JWTRefreshResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RefreshRequest \| undefined`](../../doc/models/refresh-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JWTRefreshResponse`](../../doc/models/jwt-refresh-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jwtController.exchangeRefreshTokenForJWT();
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


# Delete Jwt Refreshrevoke Refresh Tokenrevoke Refresh Token by Tokenrevoke Refresh Tokens by Application Idrevoke Refresh Tokens by User Idrevoke Refresh Tokens by User Id for Applicationrevoke Refresh Tokens With Request

Revokes refresh tokens using the information in the JSON body. The handling for this method is the same as the revokeRefreshToken method and is based on the information you provide in the RefreshDeleteRequest object. See that method for additional information. OR Revoke all refresh tokens that belong to a user by user Id for a specific application by applicationId. OR Revoke all refresh tokens that belong to a user by user Id. OR Revoke all refresh tokens that belong to an application by applicationId. OR Revokes a single refresh token by using the actual refresh token value. This refresh token value is sensitive, so  be careful with this API request. OR Revokes refresh tokens.  Usage examples:   - Delete a single refresh token, pass in only the token.       revokeRefreshToken(token)    - Delete all refresh tokens for a user, pass in only the userId.       revokeRefreshToken(null, userId)    - Delete all refresh tokens for a user for a specific application, pass in both the userId and the applicationId.       revokeRefreshToken(null, userId, applicationId)    - Delete all refresh tokens for an application       revokeRefreshToken(null, null, applicationId)  Note: <code>null</code> may be handled differently depending upon the programming language.  See also: (method names may vary by language... but you'll figure it out)   - revokeRefreshTokenById  - revokeRefreshTokenByToken  - revokeRefreshTokensByUserId  - revokeRefreshTokensByApplicationId  - revokeRefreshTokensByUserIdForApplication

```ts
async deleteJwtRefreshrevokeRefreshTokenrevokeRefreshTokenByTokenrevokeRefreshTokensByApplicationIdrevokeRefreshTokensByUserIdrevokeRefreshTokensByUserIdForApplicationrevokeRefreshTokensWithRequest(
  userId?: string,
  applicationId?: string,
  token?: string,
  body?: RefreshTokenRevokeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Query, Optional | The unique Id of the user that you want to delete all refresh tokens for. |
| `applicationId` | `string \| undefined` | Query, Optional | The unique Id of the application that you want to delete refresh tokens for. |
| `token` | `string \| undefined` | Query, Optional | The refresh token to delete. |
| `body` | [`RefreshTokenRevokeRequest \| undefined`](../../doc/models/refresh-token-revoke-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jwtController.deleteJwtRefreshrevokeRefreshTokenrevokeRefreshTokenByTokenrevokeRefreshTokensByApplicationIdrevokeRefreshTokensByUserIdrevokeRefreshTokensByUserIdForApplicationrevokeRefreshTokensWithRequest();
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


# Reconcile JWT

Reconcile a User to FusionAuth using JWT issued from another Identity Provider.

```ts
async reconcileJWT(
  body?: IdentityProviderLoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`IdentityProviderLoginRequest \| undefined`](../../doc/models/identity-provider-login-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jwtController.reconcileJWT();
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


# Revoke Refresh Token by Id

Revokes a single refresh token by the unique Id. The unique Id is not sensitive as it cannot be used to obtain another JWT.

```ts
async revokeRefreshTokenById(
  tokenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenId` | `string` | Template, Required | The unique Id of the token to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const tokenId = 'tokenId0';

try {
  const { result, ...httpResponse } = await jwtController.revokeRefreshTokenById(tokenId);
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


# Vend JWT

It's a JWT vending machine!  Issue a new access token (JWT) with the provided claims in the request. This JWT is not scoped to a tenant or user, it is a free form  token that will contain what claims you provide. <p> The iat, exp and jti claims will be added by FusionAuth, all other claims must be provided by the caller.  If a TTL is not provided in the request, the TTL will be retrieved from the default Tenant or the Tenant specified on the request either  by way of the X-FusionAuth-TenantId request header, or a tenant scoped API key.

```ts
async vendJWT(
  body?: JWTVendRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<JWTVendResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`JWTVendRequest \| undefined`](../../doc/models/jwt-vend-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JWTVendResponse`](../../doc/models/jwt-vend-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jwtController.vendJWT();
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

