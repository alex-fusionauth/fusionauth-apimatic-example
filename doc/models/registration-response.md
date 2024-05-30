
# Registration Response

Registration API request object.

## Structure

`RegistrationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refreshToken` | `string \| undefined` | Optional | - |
| `registration` | [`UserRegistration \| undefined`](../../doc/models/user-registration.md) | Optional | User registration information for a single application. |
| `registrationVerificationId` | `string \| undefined` | Optional | - |
| `registrationVerificationOneTimeCode` | `string \| undefined` | Optional | - |
| `token` | `string \| undefined` | Optional | - |
| `tokenExpirationInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |

## Example (as JSON)

```json
{
  "tokenExpirationInstant": 1659380719000,
  "refreshToken": "refreshToken0",
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
  "registrationVerificationId": "registrationVerificationId2",
  "registrationVerificationOneTimeCode": "registrationVerificationOneTimeCode6",
  "token": "token6"
}
```

