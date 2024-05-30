
# Email Configuration

## Structure

`EmailConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalHeaders` | [`EmailHeader[] \| undefined`](../../doc/models/email-header.md) | Optional | - |
| `debug` | `boolean \| undefined` | Optional | - |
| `defaultFromEmail` | `string \| undefined` | Optional | - |
| `defaultFromName` | `string \| undefined` | Optional | - |
| `emailUpdateEmailTemplateId` | `string \| undefined` | Optional | - |
| `emailVerifiedEmailTemplateId` | `string \| undefined` | Optional | - |
| `forgotPasswordEmailTemplateId` | `string \| undefined` | Optional | - |
| `host` | `string \| undefined` | Optional | - |
| `implicitEmailVerificationAllowed` | `boolean \| undefined` | Optional | - |
| `loginIdInUseOnCreateEmailTemplateId` | `string \| undefined` | Optional | - |
| `loginIdInUseOnUpdateEmailTemplateId` | `string \| undefined` | Optional | - |
| `loginNewDeviceEmailTemplateId` | `string \| undefined` | Optional | - |
| `loginSuspiciousEmailTemplateId` | `string \| undefined` | Optional | - |
| `password` | `string \| undefined` | Optional | - |
| `passwordResetSuccessEmailTemplateId` | `string \| undefined` | Optional | - |
| `passwordUpdateEmailTemplateId` | `string \| undefined` | Optional | - |
| `passwordlessEmailTemplateId` | `string \| undefined` | Optional | - |
| `port` | `number \| undefined` | Optional | - |
| `properties` | `string \| undefined` | Optional | - |
| `security` | [`EmailSecurityTypeEnum \| undefined`](../../doc/models/email-security-type-enum.md) | Optional | - |
| `setPasswordEmailTemplateId` | `string \| undefined` | Optional | - |
| `twoFactorMethodAddEmailTemplateId` | `string \| undefined` | Optional | - |
| `twoFactorMethodRemoveEmailTemplateId` | `string \| undefined` | Optional | - |
| `unverified` | [`EmailUnverifiedOptions \| undefined`](../../doc/models/email-unverified-options.md) | Optional | - |
| `username` | `string \| undefined` | Optional | - |
| `verificationEmailTemplateId` | `string \| undefined` | Optional | - |
| `verificationStrategy` | [`VerificationStrategyEnum \| undefined`](../../doc/models/verification-strategy-enum.md) | Optional | - |
| `verifyEmail` | `boolean \| undefined` | Optional | - |
| `verifyEmailWhenChanged` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "additionalHeaders": [
    {
      "name": "name2",
      "value": "value4"
    }
  ],
  "debug": false,
  "defaultFromEmail": "defaultFromEmail0",
  "defaultFromName": "defaultFromName8",
  "emailUpdateEmailTemplateId": "00001822-0000-0000-0000-000000000000"
}
```

