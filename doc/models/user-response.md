
# User Response

User API response object.

## Structure

`UserResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailVerificationId` | `string \| undefined` | Optional | - |
| `emailVerificationOneTimeCode` | `string \| undefined` | Optional | - |
| `registrationVerificationIds` | `Record<string, string> \| undefined` | Optional | - |
| `registrationVerificationOneTimeCodes` | `Record<string, string> \| undefined` | Optional | - |
| `token` | `string \| undefined` | Optional | - |
| `tokenExpirationInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |

## Example (as JSON)

```json
{
  "tokenExpirationInstant": 1659380719000,
  "emailVerificationId": "emailVerificationId6",
  "emailVerificationOneTimeCode": "emailVerificationOneTimeCode2",
  "registrationVerificationIds": {
    "key0": "registrationVerificationIds6",
    "key1": "registrationVerificationIds7"
  },
  "registrationVerificationOneTimeCodes": {
    "key0": "registrationVerificationOneTimeCodes4",
    "key1": "registrationVerificationOneTimeCodes5",
    "key2": "registrationVerificationOneTimeCodes6"
  },
  "token": "token8"
}
```

