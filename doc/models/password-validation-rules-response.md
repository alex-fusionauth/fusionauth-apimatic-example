
# Password Validation Rules Response

## Structure

`PasswordValidationRulesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `passwordValidationRules` | [`PasswordValidationRules \| undefined`](../../doc/models/password-validation-rules.md) | Optional | - |

## Example (as JSON)

```json
{
  "passwordValidationRules": {
    "breachDetection": {
      "matchMode": "High",
      "notifyUserEmailTemplateId": "00001496-0000-0000-0000-000000000000",
      "onLogin": "NotifyUser",
      "enabled": false
    },
    "maxLength": 138,
    "minLength": 170,
    "rememberPreviousPasswords": {
      "count": 24,
      "enabled": false
    },
    "requireMixedCase": false
  }
}
```

