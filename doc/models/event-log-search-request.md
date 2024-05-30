
# Event Log Search Request

## Structure

`EventLogSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`EventLogSearchCriteria \| undefined`](../../doc/models/event-log-search-criteria.md) | Optional | Search criteria for the event log. |

## Example (as JSON)

```json
{
  "search": {
    "end": 242,
    "message": "message2",
    "start": 200,
    "type": "Error",
    "numberOfResults": 180
  }
}
```

