
# Registration Request

Registration API request object.

## Structure

`RegistrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disableDomainBlock` | `boolean \| undefined` | Optional | - |
| `generateAuthenticationToken` | `boolean \| undefined` | Optional | - |
| `registration` | [`UserRegistration \| undefined`](../../doc/models/user-registration.md) | Optional | User registration information for a single application. |
| `sendSetPasswordEmail` | `boolean \| undefined` | Optional | - |
| `skipRegistrationVerification` | `boolean \| undefined` | Optional | - |
| `skipVerification` | `boolean \| undefined` | Optional | - |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "disableDomainBlock": false,
  "generateAuthenticationToken": false,
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
  "sendSetPasswordEmail": false,
  "skipRegistrationVerification": false
}
```

