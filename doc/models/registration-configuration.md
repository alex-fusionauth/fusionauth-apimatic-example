
# Registration Configuration

## Structure

`RegistrationConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `birthDate` | [`Requirable \| undefined`](../../doc/models/requirable.md) | Optional | Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. |
| `confirmPassword` | `boolean \| undefined` | Optional | - |
| `firstName` | [`Requirable \| undefined`](../../doc/models/requirable.md) | Optional | Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. |
| `formId` | `string \| undefined` | Optional | - |
| `fullName` | [`Requirable \| undefined`](../../doc/models/requirable.md) | Optional | Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. |
| `lastName` | [`Requirable \| undefined`](../../doc/models/requirable.md) | Optional | Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. |
| `loginIdType` | [`LoginIdTypeEnum \| undefined`](../../doc/models/login-id-type-enum.md) | Optional | - |
| `middleName` | [`Requirable \| undefined`](../../doc/models/requirable.md) | Optional | Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. |
| `mobilePhone` | [`Requirable \| undefined`](../../doc/models/requirable.md) | Optional | Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. |
| `preferredLanguages` | [`Requirable \| undefined`](../../doc/models/requirable.md) | Optional | Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. |
| `type` | [`RegistrationTypeEnum \| undefined`](../../doc/models/registration-type-enum.md) | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "birthDate": {
    "required": false,
    "enabled": false
  },
  "confirmPassword": false,
  "firstName": {
    "required": false,
    "enabled": false
  },
  "formId": "000021fe-0000-0000-0000-000000000000",
  "fullName": {
    "required": false,
    "enabled": false
  }
}
```

