
# Failed Authentication Configuration

Configuration for the behavior of failed login attempts. This helps us protect against brute force password attacks.

## Structure

`FailedAuthenticationConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionCancelPolicy` | [`FailedAuthenticationActionCancelPolicy \| undefined`](../../doc/models/failed-authentication-action-cancel-policy.md) | Optional | A policy to configure if and when the user-action is canceled prior to the expiration of the action. |
| `actionDuration` | `bigint \| undefined` | Optional | - |
| `actionDurationUnit` | [`ExpiryUnitEnum \| undefined`](../../doc/models/expiry-unit-enum.md) | Optional | - |
| `emailUser` | `boolean \| undefined` | Optional | - |
| `resetCountInSeconds` | `number \| undefined` | Optional | - |
| `tooManyAttempts` | `number \| undefined` | Optional | - |
| `userActionId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "actionCancelPolicy": {
    "onPasswordReset": false
  },
  "actionDuration": 170,
  "actionDurationUnit": "MONTHS",
  "emailUser": false,
  "resetCountInSeconds": 222
}
```

