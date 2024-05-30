
# System Configuration

## Structure

`SystemConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `auditLogConfiguration` | [`AuditLogConfiguration \| undefined`](../../doc/models/audit-log-configuration.md) | Optional | - |
| `corsConfiguration` | [`CORSConfiguration \| undefined`](../../doc/models/cors-configuration.md) | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `eventLogConfiguration` | [`EventLogConfiguration \| undefined`](../../doc/models/event-log-configuration.md) | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `loginRecordConfiguration` | [`LoginRecordConfiguration \| undefined`](../../doc/models/login-record-configuration.md) | Optional | - |
| `reportTimezone` | `string \| undefined` | Optional | Timezone Identifier<br>**Constraints**: *Pattern*: `^w+/w+$` |
| `trustedProxyConfiguration` | [`SystemTrustedProxyConfiguration \| undefined`](../../doc/models/system-trusted-proxy-configuration.md) | Optional | - |
| `uiConfiguration` | [`UIConfiguration \| undefined`](../../doc/models/ui-configuration.md) | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "auditLogConfiguration": {
    "delete": {
      "numberOfDaysToRetain": 178,
      "enabled": false
    }
  },
  "corsConfiguration": {
    "allowCredentials": false,
    "allowedHeaders": [
      "allowedHeaders4",
      "allowedHeaders5"
    ],
    "allowedMethods": [
      "PATCH",
      "GET"
    ],
    "allowedOrigins": [
      "allowedOrigins2",
      "allowedOrigins3",
      "allowedOrigins4"
    ],
    "debug": false
  },
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    },
    "key2": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "eventLogConfiguration": {
    "numberToRetain": 180
  }
}
```

