
# Group Update Event

Models the Group Update Event.

## Structure

`GroupUpdateEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `group` | [`Group \| undefined`](../../doc/models/group.md) | Optional | - |
| `original` | [`Group \| undefined`](../../doc/models/group.md) | Optional | - |
| `createInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `id` | `string \| undefined` | Optional | - |
| `info` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |
| `tenantId` | `string \| undefined` | Optional | - |
| `type` | [`EventTypeEnum \| undefined`](../../doc/models/event-type-enum.md) | Optional | Models the event types that FusionAuth produces. |

## Example (as JSON)

```json
{
  "createInstant": 1659380719000,
  "group": {
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
    "id": "00001016-0000-0000-0000-000000000000",
    "insertInstant": 128,
    "lastUpdateInstant": 186,
    "name": "name8"
  },
  "original": {
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
    "id": "00001afe-0000-0000-0000-000000000000",
    "insertInstant": 168,
    "lastUpdateInstant": 226,
    "name": "name0"
  },
  "id": "0000242a-0000-0000-0000-000000000000",
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
  }
}
```

