
# Password Breach Detection

## Structure

`PasswordBreachDetection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `matchMode` | [`BreachMatchModeEnum \| undefined`](../../doc/models/breach-match-mode-enum.md) | Optional | - |
| `notifyUserEmailTemplateId` | `string \| undefined` | Optional | - |
| `onLogin` | [`BreachActionEnum \| undefined`](../../doc/models/breach-action-enum.md) | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "matchMode": "Medium",
  "notifyUserEmailTemplateId": "00001d56-0000-0000-0000-000000000000",
  "onLogin": "NotifyUser",
  "enabled": false
}
```

