
# Two Factor Method

## Structure

`TwoFactorMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticator` | [`AuthenticatorConfiguration \| undefined`](../../doc/models/authenticator-configuration.md) | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `lastUsed` | `boolean \| undefined` | Optional | - |
| `method` | `string \| undefined` | Optional | - |
| `mobilePhone` | `string \| undefined` | Optional | - |
| `secret` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "authenticator": {
    "algorithm": "HmacSHA512",
    "codeLength": 166,
    "timeStep": 208
  },
  "email": "email6",
  "id": "id0",
  "lastUsed": false,
  "method": "method6"
}
```

