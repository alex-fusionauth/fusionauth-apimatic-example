
# Login Response

## Structure

`LoginResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actions` | [`LoginPreventedResponse[] \| undefined`](../../doc/models/login-prevented-response.md) | Optional | - |
| `changePasswordId` | `string \| undefined` | Optional | - |
| `changePasswordReason` | [`ChangePasswordReasonEnum \| undefined`](../../doc/models/change-password-reason-enum.md) | Optional | - |
| `configurableMethods` | `string[] \| undefined` | Optional | - |
| `emailVerificationId` | `string \| undefined` | Optional | - |
| `methods` | [`TwoFactorMethod[] \| undefined`](../../doc/models/two-factor-method.md) | Optional | - |
| `pendingIdPLinkId` | `string \| undefined` | Optional | - |
| `refreshToken` | `string \| undefined` | Optional | - |
| `refreshTokenId` | `string \| undefined` | Optional | - |
| `registrationVerificationId` | `string \| undefined` | Optional | - |
| `state` | `Record<string, unknown> \| undefined` | Optional | - |
| `threatsDetected` | `unknown[] \| undefined` | Optional | **Constraints**: *Unique Items Required* |
| `token` | `string \| undefined` | Optional | - |
| `tokenExpirationInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `trustToken` | `string \| undefined` | Optional | - |
| `twoFactorId` | `string \| undefined` | Optional | - |
| `twoFactorTrustId` | `string \| undefined` | Optional | - |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |

## Example (as JSON)

```json
{
  "tokenExpirationInstant": 1659380719000,
  "actions": [
    {
      "actionId": "00002218-0000-0000-0000-000000000000",
      "actionerUserId": "00000404-0000-0000-0000-000000000000",
      "expiry": 234,
      "localizedName": "localizedName2",
      "localizedOption": "localizedOption6"
    },
    {
      "actionId": "00002218-0000-0000-0000-000000000000",
      "actionerUserId": "00000404-0000-0000-0000-000000000000",
      "expiry": 234,
      "localizedName": "localizedName2",
      "localizedOption": "localizedOption6"
    }
  ],
  "changePasswordId": "changePasswordId4",
  "changePasswordReason": "Expired",
  "configurableMethods": [
    "configurableMethods5",
    "configurableMethods6",
    "configurableMethods7"
  ],
  "emailVerificationId": "emailVerificationId6"
}
```

