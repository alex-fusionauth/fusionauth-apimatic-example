
# Event Log

Event log used internally by FusionAuth to help developers debug hooks, Webhooks, email templates, etc.

## Structure

`EventLog`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `message` | `string \| undefined` | Optional | - |
| `type` | [`EventLogTypeEnum \| undefined`](../../doc/models/event-log-type-enum.md) | Optional | Event Log Type |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "id": 114,
  "message": "message4",
  "type": "Debug"
}
```

