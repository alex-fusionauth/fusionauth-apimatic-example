
# Audit Log Export Request

## Structure

`AuditLogExportRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `criteria` | [`AuditLogSearchCriteria \| undefined`](../../doc/models/audit-log-search-criteria.md) | Optional | - |
| `dateTimeSecondsFormat` | `string \| undefined` | Optional | - |
| `zoneId` | `string \| undefined` | Optional | Timezone Identifier<br>**Constraints**: *Pattern*: `^w+/w+$` |

## Example (as JSON)

```json
{
  "criteria": {
    "end": 212,
    "message": "message8",
    "newValue": "newValue0",
    "oldValue": "oldValue8",
    "reason": "reason6"
  },
  "dateTimeSecondsFormat": "dateTimeSecondsFormat4",
  "zoneId": "zoneId2"
}
```

