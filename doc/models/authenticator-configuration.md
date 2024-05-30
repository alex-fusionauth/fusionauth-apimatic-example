
# Authenticator Configuration

## Structure

`AuthenticatorConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `algorithm` | [`TOTPAlgorithmEnum \| undefined`](../../doc/models/totp-algorithm-enum.md) | Optional | - |
| `codeLength` | `number \| undefined` | Optional | - |
| `timeStep` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "algorithm": "HmacSHA256",
  "codeLength": 62,
  "timeStep": 104
}
```

