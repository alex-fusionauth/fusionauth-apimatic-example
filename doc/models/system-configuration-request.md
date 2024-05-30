
# System Configuration Request

Request for the system configuration API.

## Structure

`SystemConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `systemConfiguration` | [`SystemConfiguration \| undefined`](../../doc/models/system-configuration.md) | Optional | - |

## Example (as JSON)

```json
{
  "systemConfiguration": {
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
      }
    },
    "eventLogConfiguration": {
      "numberToRetain": 180
    },
    "insertInstant": 130
  }
}
```

