
# Application Form Configuration

## Structure

`ApplicationFormConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adminRegistrationFormId` | `string \| undefined` | Optional | - |
| `selfServiceFormConfiguration` | [`SelfServiceFormConfiguration \| undefined`](../../doc/models/self-service-form-configuration.md) | Optional | - |
| `selfServiceFormId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "adminRegistrationFormId": "0000186c-0000-0000-0000-000000000000",
  "selfServiceFormConfiguration": {
    "requireCurrentPasswordOnPasswordChange": false
  },
  "selfServiceFormId": "000025fe-0000-0000-0000-000000000000"
}
```

