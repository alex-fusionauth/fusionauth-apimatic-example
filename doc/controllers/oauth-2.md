# Oauth 2

```ts
const oauth2Controller = new Oauth2Controller(client);
```

## Class Name

`Oauth2Controller`

## Methods

* [Create Introspectintrospect Access Tokenintrospect Client Credentials Access Token](../../doc/controllers/oauth-2.md#create-introspectintrospect-access-tokenintrospect-client-credentials-access-token)
* [Approve Device](../../doc/controllers/oauth-2.md#approve-device)
* [Retrieve Device User Coderetrieve User Coderetrieve User Code Using API Key](../../doc/controllers/oauth-2.md#retrieve-device-user-coderetrieve-user-coderetrieve-user-code-using-api-key)
* [Retrieve User Info From Access Token](../../doc/controllers/oauth-2.md#retrieve-user-info-from-access-token)
* [Validate Device](../../doc/controllers/oauth-2.md#validate-device)
* [Create Tokenclient Credentials Grantexchange O Auth Code for Access Tokenexchange O Auth Code for Access Token Using PKC Eexchange Refresh Token for Access Tokenexchange User Credentials for Access Token](../../doc/controllers/oauth-2.md#create-tokenclient-credentials-grantexchange-o-auth-code-for-access-tokenexchange-o-auth-code-for-access-token-using-pkc-eexchange-refresh-token-for-access-tokenexchange-user-credentials-for-access-token)


# Create Introspectintrospect Access Tokenintrospect Client Credentials Access Token

Inspect an access token issued as the result of the Client Credentials Grant. OR Inspect an access token issued as the result of the User based grant such as the Authorization Code Grant, Implicit Grant, the User Credentials Grant or the Refresh Grant.

```ts
async createIntrospectintrospectAccessTokenintrospectClientCredentialsAccessToken(
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await oauth2Controller.createIntrospectintrospectAccessTokenintrospectClientCredentialsAccessToken();
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
| Default | Error | [`OAuthError`](../../doc/models/o-auth-error.md) |


# Approve Device

Approve a device grant.

```ts
async approveDevice(
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceApprovalResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeviceApprovalResponse`](../../doc/models/device-approval-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await oauth2Controller.approveDevice();
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


# Retrieve Device User Coderetrieve User Coderetrieve User Code Using API Key

Retrieve a user_code that is part of an in-progress Device Authorization Grant.  This API is useful if you want to build your own login workflow to complete a device grant.  This request will require an API key. OR Retrieve a user_code that is part of an in-progress Device Authorization Grant.  This API is useful if you want to build your own login workflow to complete a device grant.

```ts
async retrieveDeviceUserCoderetrieveUserCoderetrieveUserCodeUsingAPIKey(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await oauth2Controller.retrieveDeviceUserCoderetrieveUserCoderetrieveUserCodeUsingAPIKey();
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


# Retrieve User Info From Access Token

Call the UserInfo endpoint to retrieve User Claims from the access token issued by FusionAuth.

```ts
async retrieveUserInfoFromAccessToken(
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await oauth2Controller.retrieveUserInfoFromAccessToken();
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
| Default | Error | [`OAuthError`](../../doc/models/o-auth-error.md) |


# Validate Device

Validates the end-user provided user_code from the user-interaction of the Device Authorization Grant. If you build your own activation form you should validate the user provided code prior to beginning the Authorization grant.

```ts
async validateDevice(
  userCode?: string,
  clientId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userCode` | `string \| undefined` | Query, Optional | The end-user verification code. |
| `clientId` | `string \| undefined` | Query, Optional | The client id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await oauth2Controller.validateDevice();
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


# Create Tokenclient Credentials Grantexchange O Auth Code for Access Tokenexchange O Auth Code for Access Token Using PKC Eexchange Refresh Token for Access Tokenexchange User Credentials for Access Token

Exchange User Credentials for a Token. If you will be using the Resource Owner Password Credential Grant, you will make a request to the Token endpoint to exchange the user’s email and password for an access token. OR Exchange a Refresh Token for an Access Token. If you will be using the Refresh Token Grant, you will make a request to the Token endpoint to exchange the user’s refresh token for an access token. OR Exchanges an OAuth authorization code and code_verifier for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint and a code_verifier for an access token. OR Exchanges an OAuth authorization code for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint for an access token. OR Make a Client Credentials grant request to obtain an access token.

```ts
async createTokenclientCredentialsGrantexchangeOAuthCodeForAccessTokenexchangeOAuthCodeForAccessTokenUsingPKCEexchangeRefreshTokenForAccessTokenexchangeUserCredentialsForAccessToken(
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccessToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccessToken`](../../doc/models/access-token.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await oauth2Controller.createTokenclientCredentialsGrantexchangeOAuthCodeForAccessTokenexchangeOAuthCodeForAccessTokenUsingPKCEexchangeRefreshTokenForAccessTokenexchangeUserCredentialsForAccessToken();
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
| Default | Error | [`OAuthError`](../../doc/models/o-auth-error.md) |

