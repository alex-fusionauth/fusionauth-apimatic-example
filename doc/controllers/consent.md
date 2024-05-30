# Consent

```ts
const consentController = new ConsentController(client);
```

## Class Name

`ConsentController`

## Methods

* [Delete Consent](../../doc/controllers/consent.md#delete-consent)
* [Retrieve Consent](../../doc/controllers/consent.md#retrieve-consent)
* [Search Consents](../../doc/controllers/consent.md#search-consents)
* [Retrieve Consents](../../doc/controllers/consent.md#retrieve-consents)
* [Create Consent](../../doc/controllers/consent.md#create-consent)
* [Patch Consent](../../doc/controllers/consent.md#patch-consent)
* [Update Consent](../../doc/controllers/consent.md#update-consent)


# Delete Consent

Deletes the consent for the given Id.

```ts
async deleteConsent(
  consentId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consentId` | `string` | Template, Required | The Id of the consent to delete. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const consentId = 'consentId8';

try {
  const { result, ...httpResponse } = await consentController.deleteConsent(consentId);
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


# Retrieve Consent

Retrieves the Consent for the given Id.

```ts
async retrieveConsent(
  consentId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consentId` | `string` | Template, Required | The Id of the consent. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsentResponse`](../../doc/models/consent-response.md)

## Example Usage

```ts
const consentId = 'consentId8';

try {
  const { result, ...httpResponse } = await consentController.retrieveConsent(consentId);
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


# Search Consents

Searches consents with the specified criteria and pagination.

```ts
async searchConsents(
  body?: ConsentSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConsentSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConsentSearchRequest \| undefined`](../../doc/models/consent-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsentSearchResponse`](../../doc/models/consent-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await consentController.searchConsents();
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


# Retrieve Consents

Retrieves all the consent.

```ts
async retrieveConsents(
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsentResponse`](../../doc/models/consent-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await consentController.retrieveConsents();
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


# Create Consent

Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.

```ts
async createConsent(
  consentId: string,
  xFusionAuthTenantId?: string,
  body?: ConsentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consentId` | `string` | Template, Required | (Optional) The Id for the consent. If not provided a secure random UUID will be generated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`ConsentRequest \| undefined`](../../doc/models/consent-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsentResponse`](../../doc/models/consent-response.md)

## Example Usage

```ts
const consentId = 'consentId8';

try {
  const { result, ...httpResponse } = await consentController.createConsent(consentId);
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


# Patch Consent

Updates, via PATCH, the consent with the given Id.

```ts
async patchConsent(
  consentId: string,
  xFusionAuthTenantId?: string,
  body?: ConsentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consentId` | `string` | Template, Required | The Id of the consent to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`ConsentRequest \| undefined`](../../doc/models/consent-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsentResponse`](../../doc/models/consent-response.md)

## Example Usage

```ts
const consentId = 'consentId8';

try {
  const { result, ...httpResponse } = await consentController.patchConsent(consentId);
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


# Update Consent

Updates the consent with the given Id.

```ts
async updateConsent(
  consentId: string,
  xFusionAuthTenantId?: string,
  body?: ConsentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consentId` | `string` | Template, Required | The Id of the consent to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`ConsentRequest \| undefined`](../../doc/models/consent-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConsentResponse`](../../doc/models/consent-response.md)

## Example Usage

```ts
const consentId = 'consentId8';

try {
  const { result, ...httpResponse } = await consentController.updateConsent(consentId);
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

