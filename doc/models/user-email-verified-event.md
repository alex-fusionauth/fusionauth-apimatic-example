
# User Email Verified Event

Models the User Email Verify Event.

## Structure

`UserEmailVerifiedEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |
| `createInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `id` | `string \| undefined` | Optional | - |
| `info` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |
| `tenantId` | `string \| undefined` | Optional | - |
| `type` | [`EventTypeEnum \| undefined`](../../doc/models/event-type-enum.md) | Optional | Models the event types that FusionAuth produces. |

## Example (as JSON)

```json
{
  "createInstant": 1659380719000,
  "user": {
    "preferredLanguages": [
      "preferredLanguages2"
    ],
    "active": false,
    "birthDate": "birthDate4",
    "cleanSpeakId": "0000212a-0000-0000-0000-000000000000",
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      },
      "key1": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  },
  "id": "00000ef4-0000-0000-0000-000000000000",
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
  "tenantId": "00001f26-0000-0000-0000-000000000000"
}
```

