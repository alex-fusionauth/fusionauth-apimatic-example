
# External Identifier Configuration

## Structure

`ExternalIdentifierConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationGrantIdTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `changePasswordIdGenerator` | [`SecureGeneratorConfiguration \| undefined`](../../doc/models/secure-generator-configuration.md) | Optional | - |
| `changePasswordIdTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `deviceCodeTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `deviceUserCodeIdGenerator` | [`SecureGeneratorConfiguration \| undefined`](../../doc/models/secure-generator-configuration.md) | Optional | - |
| `emailVerificationIdGenerator` | [`SecureGeneratorConfiguration \| undefined`](../../doc/models/secure-generator-configuration.md) | Optional | - |
| `emailVerificationIdTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `emailVerificationOneTimeCodeGenerator` | [`SecureGeneratorConfiguration \| undefined`](../../doc/models/secure-generator-configuration.md) | Optional | - |
| `externalAuthenticationIdTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `oneTimePasswordTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `passwordlessLoginGenerator` | [`SecureGeneratorConfiguration \| undefined`](../../doc/models/secure-generator-configuration.md) | Optional | - |
| `passwordlessLoginTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `pendingAccountLinkTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `registrationVerificationIdGenerator` | [`SecureGeneratorConfiguration \| undefined`](../../doc/models/secure-generator-configuration.md) | Optional | - |
| `registrationVerificationIdTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `registrationVerificationOneTimeCodeGenerator` | [`SecureGeneratorConfiguration \| undefined`](../../doc/models/secure-generator-configuration.md) | Optional | - |
| `rememberOAuthScopeConsentChoiceTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `samlv2AuthNRequestIdTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `setupPasswordIdGenerator` | [`SecureGeneratorConfiguration \| undefined`](../../doc/models/secure-generator-configuration.md) | Optional | - |
| `setupPasswordIdTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `trustTokenTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `twoFactorIdTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `twoFactorOneTimeCodeIdGenerator` | [`SecureGeneratorConfiguration \| undefined`](../../doc/models/secure-generator-configuration.md) | Optional | - |
| `twoFactorOneTimeCodeIdTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `twoFactorTrustIdTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `webAuthnAuthenticationChallengeTimeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `webAuthnRegistrationChallengeTimeToLiveInSeconds` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "authorizationGrantIdTimeToLiveInSeconds": 172,
  "changePasswordIdGenerator": {
    "length": 72,
    "type": "randomDigits"
  },
  "changePasswordIdTimeToLiveInSeconds": 110,
  "deviceCodeTimeToLiveInSeconds": 108,
  "deviceUserCodeIdGenerator": {
    "length": 80,
    "type": "randomDigits"
  }
}
```

