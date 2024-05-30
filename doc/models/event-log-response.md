
# Event Log Response

Event log response.

## Structure

`EventLogResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventLog` | [`EventLog \| undefined`](../../doc/models/event-log.md) | Optional | Event log used internally by FusionAuth to help developers debug hooks, Webhooks, email templates, etc. |

## Example (as JSON)

```json
{
  "eventLog": {
    "id": 186,
    "insertInstant": 20,
    "message": "message0",
    "type": "Debug"
  }
}
```

