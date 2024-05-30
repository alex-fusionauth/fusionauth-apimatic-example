
# History Item

## Structure

`HistoryItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionerUserId` | `string \| undefined` | Optional | - |
| `comment` | `string \| undefined` | Optional | - |
| `createInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `expiry` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |

## Example (as JSON)

```json
{
  "createInstant": 1659380719000,
  "expiry": 1659380719000,
  "actionerUserId": "000022be-0000-0000-0000-000000000000",
  "comment": "comment2"
}
```

