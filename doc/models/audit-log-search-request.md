
# Audit Log Search Request

## Structure

`AuditLogSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`AuditLogSearchCriteria \| undefined`](../../doc/models/audit-log-search-criteria.md) | Optional | - |

## Example (as JSON)

```json
{
  "search": {
    "end": 242,
    "message": "message2",
    "newValue": "newValue4",
    "oldValue": "oldValue4",
    "reason": "reason8"
  }
}
```

