
# Tenant Multi Factor Configuration

## Structure

`TenantMultiFactorConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticator` | [`MultiFactorAuthenticatorMethod \| undefined`](../../doc/models/multi-factor-authenticator-method.md) | Optional | - |
| `email` | [`MultiFactorEmailMethod \| undefined`](../../doc/models/multi-factor-email-method.md) | Optional | - |
| `loginPolicy` | [`MultiFactorLoginPolicyEnum \| undefined`](../../doc/models/multi-factor-login-policy-enum.md) | Optional | - |
| `sms` | [`MultiFactorSMSMethod \| undefined`](../../doc/models/multi-factor-sms-method.md) | Optional | - |

## Example (as JSON)

```json
{
  "authenticator": {
    "algorithm": "HmacSHA512",
    "codeLength": 166,
    "timeStep": 208,
    "enabled": false
  },
  "email": {
    "templateId": "00000fec-0000-0000-0000-000000000000",
    "enabled": false
  },
  "loginPolicy": "Enabled",
  "sms": {
    "messengerId": "00000e04-0000-0000-0000-000000000000",
    "templateId": "00002304-0000-0000-0000-000000000000",
    "enabled": false
  }
}
```

