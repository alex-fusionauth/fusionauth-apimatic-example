
# Multi Factor Authenticator Method

## Structure

`MultiFactorAuthenticatorMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `algorithm` | [`TOTPAlgorithmEnum \| undefined`](../../doc/models/totp-algorithm-enum.md) | Optional | - |
| `codeLength` | `number \| undefined` | Optional | - |
| `timeStep` | `number \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "algorithm": "HmacSHA256",
  "codeLength": 120,
  "timeStep": 162,
  "enabled": false
}
```

