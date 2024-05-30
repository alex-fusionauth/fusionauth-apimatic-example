
# Audit Log Search Criteria

## Structure

`AuditLogSearchCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `end` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `message` | `string \| undefined` | Optional | - |
| `newValue` | `string \| undefined` | Optional | - |
| `oldValue` | `string \| undefined` | Optional | - |
| `reason` | `string \| undefined` | Optional | - |
| `start` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `user` | `string \| undefined` | Optional | - |
| `numberOfResults` | `number \| undefined` | Optional | - |
| `orderBy` | `string \| undefined` | Optional | - |
| `startRow` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "end": 1659380719000,
  "start": 1659380719000,
  "message": "message2",
  "newValue": "newValue4",
  "oldValue": "oldValue4",
  "reason": "reason8"
}
```

