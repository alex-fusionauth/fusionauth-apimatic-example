
# User Login Failed Event

Models the User Login Failed Event.

## Structure

`UserLoginFailedEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `authenticationType` | `string \| undefined` | Optional | - |
| `ipAddress` | `string \| undefined` | Optional | - |
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
  "applicationId": "00001ae8-0000-0000-0000-000000000000",
  "authenticationType": "authenticationType0",
  "ipAddress": "ipAddress8",
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
  }
}
```

