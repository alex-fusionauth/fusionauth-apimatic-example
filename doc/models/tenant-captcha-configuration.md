
# Tenant Captcha Configuration

## Structure

`TenantCaptchaConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `captchaMethod` | [`CaptchaMethodEnum \| undefined`](../../doc/models/captcha-method-enum.md) | Optional | - |
| `secretKey` | `string \| undefined` | Optional | - |
| `siteKey` | `string \| undefined` | Optional | - |
| `threshold` | `number \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "captchaMethod": "HCaptcha",
  "secretKey": "secretKey0",
  "siteKey": "siteKey6",
  "threshold": 6.84,
  "enabled": false
}
```

