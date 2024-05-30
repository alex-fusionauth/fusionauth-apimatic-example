# Webauthn

```ts
const webauthnController = new WebauthnController(client);
```

## Class Name

`WebauthnController`

## Methods

* [Complete Web Authn Login](../../doc/controllers/webauthn.md#complete-web-authn-login)
* [Retrieve Web Authn Credential](../../doc/controllers/webauthn.md#retrieve-web-authn-credential)
* [Import Web Authn Credential](../../doc/controllers/webauthn.md#import-web-authn-credential)
* [Retrieve Web Authn Credentials for User](../../doc/controllers/webauthn.md#retrieve-web-authn-credentials-for-user)
* [Start Web Authn Login](../../doc/controllers/webauthn.md#start-web-authn-login)
* [Delete Web Authn Credential](../../doc/controllers/webauthn.md#delete-web-authn-credential)
* [Start Web Authn Registration](../../doc/controllers/webauthn.md#start-web-authn-registration)
* [Complete Web Authn Assertion](../../doc/controllers/webauthn.md#complete-web-authn-assertion)
* [Complete Web Authn Registration](../../doc/controllers/webauthn.md#complete-web-authn-registration)


# Complete Web Authn Login

Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge and then login the user in

```ts
async completeWebAuthnLogin(
  body?: WebAuthnLoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WebAuthnLoginRequest \| undefined`](../../doc/models/web-authn-login-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginResponse`](../../doc/models/login-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await webauthnController.completeWebAuthnLogin();
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


# Retrieve Web Authn Credential

Retrieves the WebAuthn credential for the given Id.

```ts
async retrieveWebAuthnCredential(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebAuthnCredentialResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The Id of the WebAuthn credential. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebAuthnCredentialResponse`](../../doc/models/web-authn-credential-response.md)

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await webauthnController.retrieveWebAuthnCredential(id);
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


# Import Web Authn Credential

Import a WebAuthn credential

```ts
async importWebAuthnCredential(
  body?: WebAuthnCredentialImportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WebAuthnCredentialImportRequest \| undefined`](../../doc/models/web-authn-credential-import-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await webauthnController.importWebAuthnCredential();
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


# Retrieve Web Authn Credentials for User

Retrieves all WebAuthn credentials for the given user.

```ts
async retrieveWebAuthnCredentialsForUser(
  userId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebAuthnCredentialResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Query, Optional | The user's ID. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebAuthnCredentialResponse`](../../doc/models/web-authn-credential-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await webauthnController.retrieveWebAuthnCredentialsForUser();
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


# Start Web Authn Login

Start a WebAuthn authentication ceremony by generating a new challenge for the user

```ts
async startWebAuthnLogin(
  body?: WebAuthnStartRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebAuthnStartResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WebAuthnStartRequest \| undefined`](../../doc/models/web-authn-start-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebAuthnStartResponse`](../../doc/models/web-authn-start-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await webauthnController.startWebAuthnLogin();
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


# Delete Web Authn Credential

Deletes the WebAuthn credential for the given Id.

```ts
async deleteWebAuthnCredential(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The Id of the WebAuthn credential to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await webauthnController.deleteWebAuthnCredential(id);
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


# Start Web Authn Registration

Start a WebAuthn registration ceremony by generating a new challenge for the user

```ts
async startWebAuthnRegistration(
  body?: WebAuthnRegisterStartRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebAuthnRegisterStartResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WebAuthnRegisterStartRequest \| undefined`](../../doc/models/web-authn-register-start-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebAuthnRegisterStartResponse`](../../doc/models/web-authn-register-start-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await webauthnController.startWebAuthnRegistration();
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


# Complete Web Authn Assertion

Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge without logging the user in

```ts
async completeWebAuthnAssertion(
  body?: WebAuthnLoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebAuthnAssertResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WebAuthnLoginRequest \| undefined`](../../doc/models/web-authn-login-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebAuthnAssertResponse`](../../doc/models/web-authn-assert-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await webauthnController.completeWebAuthnAssertion();
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


# Complete Web Authn Registration

Complete a WebAuthn registration ceremony by validating the client request and saving the new credential

```ts
async completeWebAuthnRegistration(
  body?: WebAuthnRegisterCompleteRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebAuthnRegisterCompleteResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WebAuthnRegisterCompleteRequest \| undefined`](../../doc/models/web-authn-register-complete-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebAuthnRegisterCompleteResponse`](../../doc/models/web-authn-register-complete-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await webauthnController.completeWebAuthnRegistration();
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

