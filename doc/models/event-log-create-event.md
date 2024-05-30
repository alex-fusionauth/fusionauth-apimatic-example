
# Event Log Create Event

An Event "event" to indicate an event log was created.

## Structure

`EventLogCreateEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventLog` | [`EventLog \| undefined`](../../doc/models/event-log.md) | Optional | Event log used internally by FusionAuth to help developers debug hooks, Webhooks, email templates, etc. |
| `createInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `id` | `string \| undefined` | Optional | - |
| `info` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |
| `tenantId` | `string \| undefined` | Optional | - |
| `type` | [`EventTypeEnum \| undefined`](../../doc/models/event-type-enum.md) | Optional | Models the event types that FusionAuth produces. |

## Example (as JSON)

```json
{
  "createInstant": 1659380719000,
  "eventLog": {
    "id": 186,
    "insertInstant": 20,
    "message": "message0",
    "type": "Debug"
  },
  "id": "0000167a-0000-0000-0000-000000000000",
  "info": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      },
      "key1": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "deviceDescription": "deviceDescription4",
    "deviceName": "deviceName0",
    "deviceType": "deviceType4",
    "ipAddress": "ipAddress0"
  },
  "tenantId": "000026ac-0000-0000-0000-000000000000"
}
```

