# Report

```ts
const reportController = new ReportController(client);
```

## Class Name

`ReportController`

## Methods

* [Retrieve Report Loginretrieve Login Reportretrieve User Login Reportretrieve User Login Report by Login Id](../../doc/controllers/report.md#retrieve-report-loginretrieve-login-reportretrieve-user-login-reportretrieve-user-login-report-by-login-id)
* [Retrieve Daily Active Report](../../doc/controllers/report.md#retrieve-daily-active-report)
* [Retrieve Total Report](../../doc/controllers/report.md#retrieve-total-report)
* [Retrieve Registration Report](../../doc/controllers/report.md#retrieve-registration-report)
* [Retrieve Monthly Active Report](../../doc/controllers/report.md#retrieve-monthly-active-report)


# Retrieve Report Loginretrieve Login Reportretrieve User Login Reportretrieve User Login Report by Login Id

Retrieves the login report between the two instants for a particular user by login Id. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by Id. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants. If you specify an application id, it will only return the login counts for that application.

```ts
async retrieveReportLoginretrieveLoginReportretrieveUserLoginReportretrieveUserLoginReportByLoginId(
  applicationId?: string,
  loginId?: string,
  start?: string,
  end?: string,
  userId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Query, Optional | (Optional) The application id. |
| `loginId` | `string \| undefined` | Query, Optional | The userId id. |
| `start` | `string \| undefined` | Query, Optional | The start instant as UTC milliseconds since Epoch. |
| `end` | `string \| undefined` | Query, Optional | The end instant as UTC milliseconds since Epoch. |
| `userId` | `string \| undefined` | Query, Optional | The userId id. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginReportResponse`](../../doc/models/login-report-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await reportController.retrieveReportLoginretrieveLoginReportretrieveUserLoginReportretrieveUserLoginReportByLoginId();
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


# Retrieve Daily Active Report

Retrieves the daily active user report between the two instants. If you specify an application id, it will only return the daily active counts for that application.

```ts
async retrieveDailyActiveReport(
  applicationId?: string,
  start?: string,
  end?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DailyActiveUserReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Query, Optional | (Optional) The application id. |
| `start` | `string \| undefined` | Query, Optional | The start instant as UTC milliseconds since Epoch. |
| `end` | `string \| undefined` | Query, Optional | The end instant as UTC milliseconds since Epoch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DailyActiveUserReportResponse`](../../doc/models/daily-active-user-report-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await reportController.retrieveDailyActiveReport();
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


# Retrieve Total Report

Retrieves the totals report. This contains all the total counts for each application and the global registration count.

```ts
async retrieveTotalReport(
  requestOptions?: RequestOptions
): Promise<ApiResponse<TotalsReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TotalsReportResponse`](../../doc/models/totals-report-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await reportController.retrieveTotalReport();
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


# Retrieve Registration Report

Retrieves the registration report between the two instants. If you specify an application id, it will only return the registration counts for that application.

```ts
async retrieveRegistrationReport(
  applicationId?: string,
  start?: string,
  end?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RegistrationReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Query, Optional | (Optional) The application id. |
| `start` | `string \| undefined` | Query, Optional | The start instant as UTC milliseconds since Epoch. |
| `end` | `string \| undefined` | Query, Optional | The end instant as UTC milliseconds since Epoch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RegistrationReportResponse`](../../doc/models/registration-report-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await reportController.retrieveRegistrationReport();
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


# Retrieve Monthly Active Report

Retrieves the monthly active user report between the two instants. If you specify an application id, it will only return the monthly active counts for that application.

```ts
async retrieveMonthlyActiveReport(
  applicationId?: string,
  start?: string,
  end?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MonthlyActiveUserReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Query, Optional | (Optional) The application id. |
| `start` | `string \| undefined` | Query, Optional | The start instant as UTC milliseconds since Epoch. |
| `end` | `string \| undefined` | Query, Optional | The end instant as UTC milliseconds since Epoch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MonthlyActiveUserReportResponse`](../../doc/models/monthly-active-user-report-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await reportController.retrieveMonthlyActiveReport();
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

