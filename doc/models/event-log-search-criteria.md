
# Event Log Search Criteria

Search criteria for the event log.

## Structure

`EventLogSearchCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `end` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `message` | `string \| undefined` | Optional | - |
| `start` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `type` | [`EventLogTypeEnum \| undefined`](../../doc/models/event-log-type-enum.md) | Optional | Event Log Type |
| `numberOfResults` | `number \| undefined` | Optional | - |
| `orderBy` | `string \| undefined` | Optional | - |
| `startRow` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "end": 1659380719000,
  "start": 1659380719000,
  "message": "message6",
  "type": "Debug",
  "numberOfResults": 46
}
```

