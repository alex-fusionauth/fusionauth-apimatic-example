
# User Registration Update Complete Event

Models the User Update Registration Event.  <p>  This is different than user.registration.update in that it is sent after this event completes, this cannot be transactional.

## Structure

`UserRegistrationUpdateCompleteEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `original` | [`UserRegistration \| undefined`](../../doc/models/user-registration.md) | Optional | User registration information for a single application. |
| `registration` | [`UserRegistration \| undefined`](../../doc/models/user-registration.md) | Optional | User registration information for a single application. |
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
  "applicationId": "0000086e-0000-0000-0000-000000000000",
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
    "preferredLanguages": [
      "preferredLanguages4"
    ],
    "tokens": {
      "key0": "tokens3",
      "key1": "tokens4"
    },
    "applicationId": "00002422-0000-0000-0000-000000000000",
    "authenticationToken": "authenticationToken4"
  },
  "registration": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "preferredLanguages": [
      "preferredLanguages2",
      "preferredLanguages1",
      "preferredLanguages0"
    ],
    "tokens": {
      "key0": "tokens3"
    },
    "applicationId": "00001c10-0000-0000-0000-000000000000",
    "authenticationToken": "authenticationToken2"
  },
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

