# Logout

```ts
const logoutController = new LogoutController(client);
```

## Class Name

`LogoutController`


# Create Logoutlogoutlogout With Request

The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API takes the refresh token in the JSON body. OR The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API does nothing if the request does not contain an access token or refresh token cookies.

```ts
async createLogoutlogoutlogoutWithRequest(
  global?: string,
  refreshToken?: string,
  body?: LogoutRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `global` | `string \| undefined` | Query, Optional | When this value is set to true all the refresh tokens issued to the owner of the provided token will be revoked. |
| `refreshToken` | `string \| undefined` | Query, Optional | (Optional) The refresh_token as a request parameter instead of coming in via a cookie. If provided this takes precedence over the cookie. |
| `body` | [`LogoutRequest \| undefined`](../../doc/models/logout-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await logoutController.createLogoutlogoutlogoutWithRequest();
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

