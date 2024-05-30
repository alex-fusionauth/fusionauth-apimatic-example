
# Application

## Structure

`Application`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessControlConfiguration` | [`ApplicationAccessControlConfiguration \| undefined`](../../doc/models/application-access-control-configuration.md) | Optional | - |
| `active` | `boolean \| undefined` | Optional | - |
| `authenticationTokenConfiguration` | [`AuthenticationTokenConfiguration \| undefined`](../../doc/models/authentication-token-configuration.md) | Optional | - |
| `cleanSpeakConfiguration` | [`CleanSpeakConfiguration \| undefined`](../../doc/models/clean-speak-configuration.md) | Optional | CleanSpeak configuration at the system and application level. |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `emailConfiguration` | [`ApplicationEmailConfiguration \| undefined`](../../doc/models/application-email-configuration.md) | Optional | - |
| `externalIdentifierConfiguration` | [`ApplicationExternalIdentifierConfiguration \| undefined`](../../doc/models/application-external-identifier-configuration.md) | Optional | - |
| `formConfiguration` | [`ApplicationFormConfiguration \| undefined`](../../doc/models/application-form-configuration.md) | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `jwtConfiguration` | [`JWTConfiguration \| undefined`](../../doc/models/jwt-configuration.md) | Optional | JWT Configuration. A JWT Configuration for an Application may not be active if it is using the global configuration, the configuration  may be <code>enabled = false<code>. |
| `lambdaConfiguration` | [`LambdaConfiguration \| undefined`](../../doc/models/lambda-configuration.md) | Optional | - |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `loginConfiguration` | [`LoginConfiguration \| undefined`](../../doc/models/login-configuration.md) | Optional | - |
| `multiFactorConfiguration` | [`ApplicationMultiFactorConfiguration \| undefined`](../../doc/models/application-multi-factor-configuration.md) | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `oauthConfiguration` | [`OAuth2Configuration \| undefined`](../../doc/models/o-auth-2-configuration.md) | Optional | - |
| `passwordlessConfiguration` | [`PasswordlessConfiguration \| undefined`](../../doc/models/passwordless-configuration.md) | Optional | - |
| `registrationConfiguration` | [`RegistrationConfiguration \| undefined`](../../doc/models/registration-configuration.md) | Optional | - |
| `registrationDeletePolicy` | [`ApplicationRegistrationDeletePolicy \| undefined`](../../doc/models/application-registration-delete-policy.md) | Optional | A Application-level policy for deleting Users. |
| `roles` | [`ApplicationRole[] \| undefined`](../../doc/models/application-role.md) | Optional | - |
| `samlv2Configuration` | [`SAMLv2Configuration \| undefined`](../../doc/models/sam-lv-2-configuration.md) | Optional | - |
| `scopes` | [`ApplicationOAuthScope[] \| undefined`](../../doc/models/application-o-auth-scope.md) | Optional | - |
| `state` | [`ObjectStateEnum \| undefined`](../../doc/models/object-state-enum.md) | Optional | - |
| `tenantId` | `string \| undefined` | Optional | - |
| `themeId` | `string \| undefined` | Optional | - |
| `unverified` | [`RegistrationUnverifiedOptions \| undefined`](../../doc/models/registration-unverified-options.md) | Optional | - |
| `verificationEmailTemplateId` | `string \| undefined` | Optional | - |
| `verificationStrategy` | [`VerificationStrategyEnum \| undefined`](../../doc/models/verification-strategy-enum.md) | Optional | - |
| `verifyRegistration` | `boolean \| undefined` | Optional | - |
| `webAuthnConfiguration` | [`ApplicationWebAuthnConfiguration \| undefined`](../../doc/models/application-web-authn-configuration.md) | Optional | Application-level configuration for WebAuthn |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "accessControlConfiguration": {
    "uiIPAccessControlListId": "00001c56-0000-0000-0000-000000000000"
  },
  "active": false,
  "authenticationTokenConfiguration": {
    "enabled": false
  },
  "cleanSpeakConfiguration": {
    "apiKey": "apiKey6",
    "applicationIds": [
      "00001177-0000-0000-0000-000000000000",
      "00001176-0000-0000-0000-000000000000"
    ],
    "url": "url0",
    "usernameModeration": {
      "applicationId": "000008ee-0000-0000-0000-000000000000",
      "enabled": false
    },
    "enabled": false
  },
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    },
    "key2": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

