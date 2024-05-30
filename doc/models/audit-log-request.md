
# Audit Log Request

## Structure

`AuditLogRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `auditLog` | [`AuditLog \| undefined`](../../doc/models/audit-log.md) | Optional | An audit log. |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "auditLog": {
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
    "id": 34,
    "insertInstant": 124,
    "insertUser": "insertUser2",
    "message": "message0"
  },
  "eventInfo": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "deviceDescription": "deviceDescription8",
    "deviceName": "deviceName2",
    "deviceType": "deviceType6",
    "ipAddress": "ipAddress2"
  }
}
```

