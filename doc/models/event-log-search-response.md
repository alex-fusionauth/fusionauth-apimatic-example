
# Event Log Search Response

Event log response.

## Structure

`EventLogSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventLogs` | [`EventLog[] \| undefined`](../../doc/models/event-log.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "eventLogs": [
    {
      "id": 4,
      "insertInstant": 94,
      "message": "message6",
      "type": "Information"
    },
    {
      "id": 4,
      "insertInstant": 94,
      "message": "message6",
      "type": "Information"
    }
  ],
  "total": 114
}
```

