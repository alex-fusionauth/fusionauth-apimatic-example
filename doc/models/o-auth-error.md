
# O Auth Error

## Structure

`OAuthError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `changePasswordId` | `string \| undefined` | Optional | - |
| `errorDescription` | `string \| undefined` | Optional | - |
| `error` | [`OAuthErrorTypeEnum \| undefined`](../../doc/models/o-auth-error-type-enum.md) | Optional | - |
| `errorUri` | `string \| undefined` | Optional | - |
| `twoFactorMethods` | [`TwoFactorMethod[] \| undefined`](../../doc/models/two-factor-method.md) | Optional | - |
| `errorReason` | [`OAuthErrorReasonEnum \| undefined`](../../doc/models/o-auth-error-reason-enum.md) | Optional | - |
| `twoFactorId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "change_password_id": "change_password_id2",
  "error_description": "error_description8",
  "error": "invalid_grant",
  "error_uri": "error_uri8",
  "two_factor_methods": [
    {
      "authenticator": {
        "algorithm": "HmacSHA512",
        "codeLength": 166,
        "timeStep": 208
      },
      "email": "email0",
      "id": "id6",
      "lastUsed": false,
      "method": "method0"
    }
  ]
}
```

