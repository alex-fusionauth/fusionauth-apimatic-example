
# Password Validation Rules

## Structure

`PasswordValidationRules`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `breachDetection` | [`PasswordBreachDetection \| undefined`](../../doc/models/password-breach-detection.md) | Optional | - |
| `maxLength` | `number \| undefined` | Optional | - |
| `minLength` | `number \| undefined` | Optional | - |
| `rememberPreviousPasswords` | [`RememberPreviousPasswords \| undefined`](../../doc/models/remember-previous-passwords.md) | Optional | - |
| `requireMixedCase` | `boolean \| undefined` | Optional | - |
| `requireNonAlpha` | `boolean \| undefined` | Optional | - |
| `requireNumber` | `boolean \| undefined` | Optional | - |
| `validateOnLogin` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "breachDetection": {
    "matchMode": "High",
    "notifyUserEmailTemplateId": "00001496-0000-0000-0000-000000000000",
    "onLogin": "NotifyUser",
    "enabled": false
  },
  "maxLength": 174,
  "minLength": 122,
  "rememberPreviousPasswords": {
    "count": 24,
    "enabled": false
  },
  "requireMixedCase": false
}
```

