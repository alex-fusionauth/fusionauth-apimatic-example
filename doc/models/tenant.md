
# Tenant

## Structure

`Tenant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `accessControlConfiguration` | [`TenantAccessControlConfiguration \| undefined`](../../doc/models/tenant-access-control-configuration.md) | Optional | - |
| `captchaConfiguration` | [`TenantCaptchaConfiguration \| undefined`](../../doc/models/tenant-captcha-configuration.md) | Optional | - |
| `configured` | `boolean \| undefined` | Optional | - |
| `connectorPolicies` | [`ConnectorPolicy[] \| undefined`](../../doc/models/connector-policy.md) | Optional | - |
| `emailConfiguration` | [`EmailConfiguration \| undefined`](../../doc/models/email-configuration.md) | Optional | - |
| `eventConfiguration` | [`EventConfiguration \| undefined`](../../doc/models/event-configuration.md) | Optional | - |
| `externalIdentifierConfiguration` | [`ExternalIdentifierConfiguration \| undefined`](../../doc/models/external-identifier-configuration.md) | Optional | - |
| `failedAuthenticationConfiguration` | [`FailedAuthenticationConfiguration \| undefined`](../../doc/models/failed-authentication-configuration.md) | Optional | Configuration for the behavior of failed login attempts. This helps us protect against brute force password attacks. |
| `familyConfiguration` | [`FamilyConfiguration \| undefined`](../../doc/models/family-configuration.md) | Optional | - |
| `formConfiguration` | [`TenantFormConfiguration \| undefined`](../../doc/models/tenant-form-configuration.md) | Optional | - |
| `httpSessionMaxInactiveInterval` | `number \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `issuer` | `string \| undefined` | Optional | - |
| `jwtConfiguration` | [`JWTConfiguration \| undefined`](../../doc/models/jwt-configuration.md) | Optional | JWT Configuration. A JWT Configuration for an Application may not be active if it is using the global configuration, the configuration  may be <code>enabled = false<code>. |
| `lambdaConfiguration` | [`TenantLambdaConfiguration \| undefined`](../../doc/models/tenant-lambda-configuration.md) | Optional | - |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `loginConfiguration` | [`TenantLoginConfiguration \| undefined`](../../doc/models/tenant-login-configuration.md) | Optional | - |
| `logoutURL` | `string \| undefined` | Optional | - |
| `maximumPasswordAge` | [`MaximumPasswordAge \| undefined`](../../doc/models/maximum-password-age.md) | Optional | - |
| `minimumPasswordAge` | [`MinimumPasswordAge \| undefined`](../../doc/models/minimum-password-age.md) | Optional | - |
| `multiFactorConfiguration` | [`TenantMultiFactorConfiguration \| undefined`](../../doc/models/tenant-multi-factor-configuration.md) | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `oauthConfiguration` | [`TenantOAuth2Configuration \| undefined`](../../doc/models/tenant-o-auth-2-configuration.md) | Optional | - |
| `passwordEncryptionConfiguration` | [`PasswordEncryptionConfiguration \| undefined`](../../doc/models/password-encryption-configuration.md) | Optional | Password Encryption Scheme Configuration |
| `passwordValidationRules` | [`PasswordValidationRules \| undefined`](../../doc/models/password-validation-rules.md) | Optional | - |
| `rateLimitConfiguration` | [`TenantRateLimitConfiguration \| undefined`](../../doc/models/tenant-rate-limit-configuration.md) | Optional | - |
| `registrationConfiguration` | [`TenantRegistrationConfiguration \| undefined`](../../doc/models/tenant-registration-configuration.md) | Optional | - |
| `scimServerConfiguration` | [`TenantSCIMServerConfiguration \| undefined`](../../doc/models/tenant-scim-server-configuration.md) | Optional | - |
| `ssoConfiguration` | [`TenantSSOConfiguration \| undefined`](../../doc/models/tenant-sso-configuration.md) | Optional | - |
| `state` | [`ObjectStateEnum \| undefined`](../../doc/models/object-state-enum.md) | Optional | - |
| `themeId` | `string \| undefined` | Optional | - |
| `userDeletePolicy` | [`TenantUserDeletePolicy \| undefined`](../../doc/models/tenant-user-delete-policy.md) | Optional | A Tenant-level policy for deleting Users. |
| `usernameConfiguration` | [`TenantUsernameConfiguration \| undefined`](../../doc/models/tenant-username-configuration.md) | Optional | - |
| `webAuthnConfiguration` | [`TenantWebAuthnConfiguration \| undefined`](../../doc/models/tenant-web-authn-configuration.md) | Optional | Tenant-level configuration for WebAuthn |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "accessControlConfiguration": {
    "uiIPAccessControlListId": "00001c56-0000-0000-0000-000000000000"
  },
  "captchaConfiguration": {
    "captchaMethod": "GoogleRecaptchaV2",
    "secretKey": "secretKey0",
    "siteKey": "siteKey6",
    "threshold": 110.34,
    "enabled": false
  },
  "configured": false,
  "connectorPolicies": [
    {
      "connectorId": "00001338-0000-0000-0000-000000000000",
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "domains": [
        {
          "key1": "val1",
          "key2": "val2"
        },
        {
          "key1": "val1",
          "key2": "val2"
        },
        {
          "key1": "val1",
          "key2": "val2"
        }
      ],
      "migrate": false
    }
  ]
}
```

