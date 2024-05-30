# System

```ts
const systemController = new SystemController(client);
```

## Class Name

`SystemController`

## Methods

* [Retrieve Audit Log](../../doc/controllers/system.md#retrieve-audit-log)
* [Retrieve Event Log](../../doc/controllers/system.md#retrieve-event-log)
* [Search Event Logs](../../doc/controllers/system.md#search-event-logs)
* [Create Audit Log](../../doc/controllers/system.md#create-audit-log)
* [Search Audit Logs](../../doc/controllers/system.md#search-audit-logs)
* [Search Login Records](../../doc/controllers/system.md#search-login-records)
* [Reindex](../../doc/controllers/system.md#reindex)
* [Retrieve Version](../../doc/controllers/system.md#retrieve-version)


# Retrieve Audit Log

Retrieves a single audit log for the given Id.

```ts
async retrieveAuditLog(
  auditLogId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuditLogResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `auditLogId` | `string` | Template, Required | The Id of the audit log to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuditLogResponse`](../../doc/models/audit-log-response.md)

## Example Usage

```ts
const auditLogId = 'auditLogId6';

try {
  const { result, ...httpResponse } = await systemController.retrieveAuditLog(auditLogId);
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


# Retrieve Event Log

Retrieves a single event log for the given Id.

```ts
async retrieveEventLog(
  eventLogId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EventLogResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventLogId` | `string` | Template, Required | The Id of the event log to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EventLogResponse`](../../doc/models/event-log-response.md)

## Example Usage

```ts
const eventLogId = 'eventLogId0';

try {
  const { result, ...httpResponse } = await systemController.retrieveEventLog(eventLogId);
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


# Search Event Logs

Searches the event logs with the specified criteria and pagination.

```ts
async searchEventLogs(
  body?: EventLogSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EventLogSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`EventLogSearchRequest \| undefined`](../../doc/models/event-log-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EventLogSearchResponse`](../../doc/models/event-log-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await systemController.searchEventLogs();
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


# Create Audit Log

Creates an audit log with the message and user name (usually an email). Audit logs should be written anytime you make changes to the FusionAuth database. When using the FusionAuth App web interface, any changes are automatically written to the audit log. However, if you are accessing the API, you must write the audit logs yourself.

```ts
async createAuditLog(
  body?: AuditLogRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuditLogResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AuditLogRequest \| undefined`](../../doc/models/audit-log-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuditLogResponse`](../../doc/models/audit-log-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await systemController.createAuditLog();
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


# Search Audit Logs

Searches the audit logs with the specified criteria and pagination.

```ts
async searchAuditLogs(
  body?: AuditLogSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuditLogSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AuditLogSearchRequest \| undefined`](../../doc/models/audit-log-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuditLogSearchResponse`](../../doc/models/audit-log-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await systemController.searchAuditLogs();
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


# Search Login Records

Searches the login records with the specified criteria and pagination.

```ts
async searchLoginRecords(
  body?: LoginRecordSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoginRecordSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LoginRecordSearchRequest \| undefined`](../../doc/models/login-record-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LoginRecordSearchResponse`](../../doc/models/login-record-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await systemController.searchLoginRecords();
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


# Reindex

Requests Elasticsearch to delete and rebuild the index for FusionAuth users or entities. Be very careful when running this request as it will  increase the CPU and I/O load on your database until the operation completes. Generally speaking you do not ever need to run this operation unless  instructed by FusionAuth support, or if you are migrating a database another system and you are not brining along the Elasticsearch index.   You have been warned.

```ts
async reindex(
  body?: ReindexRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReindexRequest \| undefined`](../../doc/models/reindex-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await systemController.reindex();
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


# Retrieve Version

Retrieves the FusionAuth version string.

```ts
async retrieveVersion(
  requestOptions?: RequestOptions
): Promise<ApiResponse<VersionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VersionResponse`](../../doc/models/version-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await systemController.retrieveVersion();
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

