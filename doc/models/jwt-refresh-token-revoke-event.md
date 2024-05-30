
# JWT Refresh Token Revoke Event

Models the Refresh Token Revoke Event. This event might be for a single token, a user  or an entire application.

## Structure

`JWTRefreshTokenRevokeEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `applicationTimeToLiveInSeconds` | `Record<string, number> \| undefined` | Optional | - |
| `refreshToken` | [`RefreshToken \| undefined`](../../doc/models/refresh-token.md) | Optional | Models a JWT Refresh Token. |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |
| `userId` | `string \| undefined` | Optional | - |
| `createInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `id` | `string \| undefined` | Optional | - |
| `info` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |
| `tenantId` | `string \| undefined` | Optional | - |
| `type` | [`EventTypeEnum \| undefined`](../../doc/models/event-type-enum.md) | Optional | Models the event types that FusionAuth produces. |

## Example (as JSON)

```json
{
  "createInstant": 1659380719000,
  "applicationId": "00002010-0000-0000-0000-000000000000",
  "applicationTimeToLiveInSeconds": {
    "key0": 170,
    "key1": 171
  },
  "refreshToken": {
    "applicationId": "000006ba-0000-0000-0000-000000000000",
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      },
      "key1": {
        "key1": "val1",
        "key2": "val2"
      },
      "key2": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "id": "000024a6-0000-0000-0000-000000000000",
    "insertInstant": 0,
    "metaData": {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        },
        "key2": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "device": {
        "description": "description6",
        "lastAccessedAddress": "lastAccessedAddress4",
        "lastAccessedInstant": 156,
        "name": "name6",
        "type": "type4"
      },
      "scopes": [
        {
          "key1": "val1",
          "key2": "val2"
        },
        {
          "key1": "val1",
          "key2": "val2"
        },
        {
          "key1": "val1",
          "key2": "val2"
        }
      ]
    }
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
  },
  "userId": "00001368-0000-0000-0000-000000000000"
}
```

