
# Audit Log Response

Audit log response.

## Structure

`AuditLogResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `auditLog` | [`AuditLog \| undefined`](../../doc/models/audit-log.md) | Optional | An audit log. |

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
  }
}
```

