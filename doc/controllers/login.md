# Login

```ts
const loginController = new LoginController(client);
```

## Class Name

`LoginController`

## Methods

* [Login](../../doc/controllers/login.md#login)
* [Login Ping](../../doc/controllers/login.md#login-ping)
* [Login Ping With Request](../../doc/controllers/login.md#login-ping-with-request)


# Login

Authenticates a user to FusionAuth.   This API optionally requires an API key. See <code>Application.loginConfiguration.requireAuthentication</code>.

```ts
async login(
  xFusionAuthTenantId?: string,
  body?: LoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`LoginRequest \| undefined`](../../doc/models/login-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await loginController.login();
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


# Login Ping

Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.

```ts
async loginPing(
  userId: string,
  applicationId: string,
  callerIPAddress?: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user that was logged in. |
| `applicationId` | `string` | Template, Required | The Id of the application that they logged into. |
| `callerIPAddress` | `string \| undefined` | Query, Optional | (Optional) The IP address of the end-user that is logging in. If a null value is provided the IP address will be that of the client or last proxy that sent the request. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
const userId = 'userId0';

const applicationId = 'applicationId0';

try {
  const { result, ...httpResponse } = await loginController.loginPing(
  userId,
  applicationId
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


# Login Ping With Request

Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.

```ts
async loginPingWithRequest(
  xFusionAuthTenantId?: string,
  body?: LoginPingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`LoginPingRequest \| undefined`](../../doc/models/login-ping-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await loginController.loginPingWithRequest();
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

