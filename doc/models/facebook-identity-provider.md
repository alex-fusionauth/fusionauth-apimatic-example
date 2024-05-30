
# Facebook Identity Provider

Facebook social login provider.

## Structure

`FacebookIdentityProvider`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appId` | `string \| undefined` | Optional | - |
| `buttonText` | `string \| undefined` | Optional | - |
| `clientSecret` | `string \| undefined` | Optional | - |
| `fields` | `string \| undefined` | Optional | - |
| `loginMethod` | [`IdentityProviderLoginMethodEnum \| undefined`](../../doc/models/identity-provider-login-method-enum.md) | Optional | - |
| `permissions` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `applicationConfiguration` | [`Record<string, FacebookApplicationConfiguration> \| undefined`](../../doc/models/facebook-application-configuration.md) | Optional | - |
| `debug` | `boolean \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lambdaConfiguration` | [`ProviderLambdaConfiguration \| undefined`](../../doc/models/provider-lambda-configuration.md) | Optional | - |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `linkingStrategy` | [`IdentityProviderLinkingStrategyEnum \| undefined`](../../doc/models/identity-provider-linking-strategy-enum.md) | Optional | The IdP behavior when no user link has been made yet. |
| `name` | `string \| undefined` | Optional | - |
| `tenantConfiguration` | [`Record<string, IdentityProviderTenantConfiguration> \| undefined`](../../doc/models/identity-provider-tenant-configuration.md) | Optional | - |
| `type` | [`IdentityProviderTypeEnum`](../../doc/models/identity-provider-type-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "type": "LinkedIn",
  "appId": "appId4",
  "buttonText": "buttonText0",
  "client_secret": "client_secret6",
  "fields": "fields6",
  "loginMethod": "UseVendorJavaScript"
}
```

