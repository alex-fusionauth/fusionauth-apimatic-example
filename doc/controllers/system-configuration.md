# System-Configuration

```ts
const systemConfigurationController = new SystemConfigurationController(client);
```

## Class Name

`SystemConfigurationController`

## Methods

* [Update System Configuration](../../doc/controllers/system-configuration.md#update-system-configuration)
* [Patch System Configuration](../../doc/controllers/system-configuration.md#patch-system-configuration)


# Update System Configuration

Updates the system configuration.

```ts
async updateSystemConfiguration(
  body?: SystemConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SystemConfigurationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SystemConfigurationRequest \| undefined`](../../doc/models/system-configuration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SystemConfigurationResponse`](../../doc/models/system-configuration-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await systemConfigurationController.updateSystemConfiguration();
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


# Patch System Configuration

Updates, via PATCH, the system configuration.

```ts
async patchSystemConfiguration(
  body?: SystemConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SystemConfigurationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SystemConfigurationRequest \| undefined`](../../doc/models/system-configuration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SystemConfigurationResponse`](../../doc/models/system-configuration-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await systemConfigurationController.patchSystemConfiguration();
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

