
# Reactor Status

## Structure

`ReactorStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `advancedIdentityProviders` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `advancedLambdas` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `advancedMultiFactorAuthentication` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `advancedOAuthScopes` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `advancedOAuthScopesCustomScopes` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `advancedOAuthScopesThirdPartyApplications` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `advancedRegistration` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `applicationMultiFactorAuthentication` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `applicationThemes` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `breachedPasswordDetection` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `connectors` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `entityManagement` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `expiration` | `string \| undefined` | Optional | A date without a time-zone in the ISO-8601 calendar system, such as 2007-12-03.<br>**Constraints**: *Pattern*: `^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$` |
| `licenseAttributes` | `Record<string, string> \| undefined` | Optional | - |
| `licensed` | `boolean \| undefined` | Optional | - |
| `scimServer` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `threatDetection` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `webAuthn` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `webAuthnPlatformAuthenticators` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |
| `webAuthnRoamingAuthenticators` | [`ReactorFeatureStatusEnum \| undefined`](../../doc/models/reactor-feature-status-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "expiration": "2007-12-03",
  "advancedIdentityProviders": "DISABLED",
  "advancedLambdas": "DISCONNECTED",
  "advancedMultiFactorAuthentication": "DISCONNECTED",
  "advancedOAuthScopes": "UNKNOWN",
  "advancedOAuthScopesCustomScopes": "ACTIVE"
}
```

