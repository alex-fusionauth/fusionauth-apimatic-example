# Well-Known

```ts
const wellKnownController = new WellKnownController(client);
```

## Class Name

`WellKnownController`

## Methods

* [Retrieve Open Id Configuration](../../doc/controllers/well-known.md#retrieve-open-id-configuration)
* [Retrieve Json Web Key Set](../../doc/controllers/well-known.md#retrieve-json-web-key-set)


# Retrieve Open Id Configuration

Returns the well known OpenID Configuration JSON document

```ts
async retrieveOpenIdConfiguration(
  requestOptions?: RequestOptions
): Promise<ApiResponse<OpenIdConfiguration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OpenIdConfiguration`](../../doc/models/open-id-configuration.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await wellKnownController.retrieveOpenIdConfiguration();
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


# Retrieve Json Web Key Set

Returns public keys used by FusionAuth to cryptographically verify JWTs using the JSON Web Key format.

```ts
async retrieveJsonWebKeySet(
  requestOptions?: RequestOptions
): Promise<ApiResponse<JWKSResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JWKSResponse`](../../doc/models/jwks-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await wellKnownController.retrieveJsonWebKeySet();
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

