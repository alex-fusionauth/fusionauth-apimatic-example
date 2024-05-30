
# User Two Factor Configuration

## Structure

`UserTwoFactorConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `methods` | [`TwoFactorMethod[] \| undefined`](../../doc/models/two-factor-method.md) | Optional | - |
| `recoveryCodes` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
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
  "recoveryCodes": [
    "recoveryCodes7",
    "recoveryCodes6"
  ]
}
```

