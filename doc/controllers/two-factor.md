# Two-Factor

```ts
const twoFactorController = new TwoFactorController(client);
```

## Class Name

`TwoFactorController`

## Methods

* [Retrieve Two Factor Status](../../doc/controllers/two-factor.md#retrieve-two-factor-status)
* [Start Two Factor Login](../../doc/controllers/two-factor.md#start-two-factor-login)
* [Two Factor Login](../../doc/controllers/two-factor.md#two-factor-login)
* [Send Two Factor Code for Enable Disable](../../doc/controllers/two-factor.md#send-two-factor-code-for-enable-disable)
* [Generate Two Factor Secret Using JWT](../../doc/controllers/two-factor.md#generate-two-factor-secret-using-jwt)
* [Send Two Factor Code for Login Using Method](../../doc/controllers/two-factor.md#send-two-factor-code-for-login-using-method)


# Retrieve Two Factor Status

Retrieve a user's two-factor status.  This can be used to see if a user will need to complete a two-factor challenge to complete a login, and optionally identify the state of the two-factor trust across various applications.

```ts
async retrieveTwoFactorStatus(
  twoFactorTrustId: string,
  userId?: string,
  applicationId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TwoFactorStatusResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `twoFactorTrustId` | `string` | Template, Required | The optional two-factor trust Id to verify. |
| `userId` | `string \| undefined` | Query, Optional | The user Id to retrieve the Two-Factor status. |
| `applicationId` | `string \| undefined` | Query, Optional | The optional applicationId to verify. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TwoFactorStatusResponse`](../../doc/models/two-factor-status-response.md)

## Example Usage

```ts
const twoFactorTrustId = 'twoFactorTrustId0';

try {
  const { result, ...httpResponse } = await twoFactorController.retrieveTwoFactorStatus(twoFactorTrustId);
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


# Start Two Factor Login

Start a Two-Factor login request by generating a two-factor identifier. This code can then be sent to the Two Factor Send  API (/api/two-factor/send)in order to send a one-time use code to a user. You can also use one-time use code returned  to send the code out-of-band. The Two-Factor login is completed by making a request to the Two-Factor Login  API (/api/two-factor/login). with the two-factor identifier and the one-time use code.  This API is intended to allow you to begin a Two-Factor login outside a normal login that originated from the Login API (/api/login).

```ts
async startTwoFactorLogin(
  body?: TwoFactorStartRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TwoFactorStartResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TwoFactorStartRequest \| undefined`](../../doc/models/two-factor-start-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TwoFactorStartResponse`](../../doc/models/two-factor-start-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await twoFactorController.startTwoFactorLogin();
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


# Two Factor Login

Complete login using a 2FA challenge

```ts
async twoFactorLogin(
  body?: TwoFactorLoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TwoFactorLoginRequest \| undefined`](../../doc/models/two-factor-login-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await twoFactorController.twoFactorLogin();
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


# Send Two Factor Code for Enable Disable

Send a Two Factor authentication code to assist in setting up Two Factor authentication or disabling.

```ts
async sendTwoFactorCodeForEnableDisable(
  body?: TwoFactorSendRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TwoFactorSendRequest \| undefined`](../../doc/models/two-factor-send-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await twoFactorController.sendTwoFactorCodeForEnableDisable();
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


# Generate Two Factor Secret Using JWT

Generate a Two Factor secret that can be used to enable Two Factor authentication for a User. The response will contain both the secret and a Base32 encoded form of the secret which can be shown to a User when using a 2 Step Authentication application such as Google Authenticator.

```ts
async generateTwoFactorSecretUsingJWT(
  requestOptions?: RequestOptions
): Promise<ApiResponse<SecretResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SecretResponse`](../../doc/models/secret-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await twoFactorController.generateTwoFactorSecretUsingJWT();
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


# Send Two Factor Code for Login Using Method

Send a Two Factor authentication code to allow the completion of Two Factor authentication.

```ts
async sendTwoFactorCodeForLoginUsingMethod(
  twoFactorId: string,
  body?: TwoFactorSendRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `twoFactorId` | `string` | Template, Required | The Id returned by the Login API necessary to complete Two Factor authentication. |
| `body` | [`TwoFactorSendRequest \| undefined`](../../doc/models/two-factor-send-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const twoFactorId = 'twoFactorId2';

try {
  const { result, ...httpResponse } = await twoFactorController.sendTwoFactorCodeForLoginUsingMethod(twoFactorId);
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

