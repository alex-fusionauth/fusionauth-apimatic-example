# Reactor

```ts
const reactorController = new ReactorController(client);
```

## Class Name

`ReactorController`

## Methods

* [Retrieve Reactor Metrics](../../doc/controllers/reactor.md#retrieve-reactor-metrics)
* [Activate Reactor](../../doc/controllers/reactor.md#activate-reactor)


# Retrieve Reactor Metrics

Retrieves the FusionAuth Reactor metrics.

```ts
async retrieveReactorMetrics(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReactorMetricsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReactorMetricsResponse`](../../doc/models/reactor-metrics-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await reactorController.retrieveReactorMetrics();
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


# Activate Reactor

Activates the FusionAuth Reactor using a license Id and optionally a license text (for air-gapped deployments)

```ts
async activateReactor(
  body?: ReactorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReactorRequest \| undefined`](../../doc/models/reactor-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await reactorController.activateReactor();
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

