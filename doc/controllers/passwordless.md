# Passwordless

```ts
const passwordlessController = new PasswordlessController(client);
```

## Class Name

`PasswordlessController`

## Methods

* [Passwordless Login](../../doc/controllers/passwordless.md#passwordless-login)
* [Send Passwordless Code](../../doc/controllers/passwordless.md#send-passwordless-code)
* [Start Passwordless Login](../../doc/controllers/passwordless.md#start-passwordless-login)


# Passwordless Login

Complete a login request using a passwordless code

```ts
async passwordlessLogin(
  body?: PasswordlessLoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PasswordlessLoginRequest \| undefined`](../../doc/models/passwordless-login-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await passwordlessController.passwordlessLogin();
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


# Send Passwordless Code

Send a passwordless authentication code in an email to complete login.

```ts
async sendPasswordlessCode(
  body?: PasswordlessSendRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PasswordlessSendRequest \| undefined`](../../doc/models/passwordless-send-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await passwordlessController.sendPasswordlessCode();
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


# Start Passwordless Login

Start a passwordless login request by generating a passwordless code. This code can be sent to the User using the Send Passwordless Code API or using a mechanism outside of FusionAuth. The passwordless login is completed by using the Passwordless Login API with this code.

```ts
async startPasswordlessLogin(
  body?: PasswordlessStartRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PasswordlessStartResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PasswordlessStartRequest \| undefined`](../../doc/models/passwordless-start-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PasswordlessStartResponse`](../../doc/models/passwordless-start-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await passwordlessController.startPasswordlessLogin();
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

