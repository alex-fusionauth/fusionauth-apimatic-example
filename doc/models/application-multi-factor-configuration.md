
# Application Multi Factor Configuration

## Structure

`ApplicationMultiFactorConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | [`MultiFactorEmailTemplate \| undefined`](../../doc/models/multi-factor-email-template.md) | Optional | - |
| `loginPolicy` | [`MultiFactorLoginPolicyEnum \| undefined`](../../doc/models/multi-factor-login-policy-enum.md) | Optional | - |
| `sms` | [`MultiFactorSMSTemplate \| undefined`](../../doc/models/multi-factor-sms-template.md) | Optional | - |
| `trustPolicy` | [`ApplicationMultiFactorTrustPolicyEnum \| undefined`](../../doc/models/application-multi-factor-trust-policy-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "email": {
    "templateId": "00000fec-0000-0000-0000-000000000000"
  },
  "loginPolicy": "Disabled",
  "sms": {
    "templateId": "00002304-0000-0000-0000-000000000000"
  },
  "trustPolicy": "None"
}
```

