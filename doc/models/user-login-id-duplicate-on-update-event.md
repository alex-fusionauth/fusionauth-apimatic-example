
# User Login Id Duplicate on Update Event

Models an event where a user is being updated and tries to use an "in-use" login Id (email or username).

## Structure

`UserLoginIdDuplicateOnUpdateEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `duplicateEmail` | `string \| undefined` | Optional | - |
| `duplicateUsername` | `string \| undefined` | Optional | - |
| `existing` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |

## Example (as JSON)

```json
{
  "duplicateEmail": "duplicateEmail6",
  "duplicateUsername": "duplicateUsername2",
  "existing": {
    "preferredLanguages": [
      "preferredLanguages4",
      "preferredLanguages3"
    ],
    "active": false,
    "birthDate": "birthDate0",
    "cleanSpeakId": "000006ee-0000-0000-0000-000000000000",
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      }
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
  }
}
```

