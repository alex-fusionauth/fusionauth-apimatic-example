
# Audit Log Search Response

Audit log response.

## Structure

`AuditLogSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `auditLogs` | [`AuditLog[] \| undefined`](../../doc/models/audit-log.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "auditLogs": [
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "id": 72,
      "insertInstant": 162,
      "insertUser": "insertUser0",
      "message": "message2"
    }
  ],
  "total": 222
}
```

