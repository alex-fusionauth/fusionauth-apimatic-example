
# Two Factor Start Response

## Structure

`TwoFactorStartResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | - |
| `methods` | [`TwoFactorMethod[] \| undefined`](../../doc/models/two-factor-method.md) | Optional | - |
| `twoFactorId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "code": "code2",
  "methods": [
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
  ],
  "twoFactorId": "twoFactorId6"
}
```

