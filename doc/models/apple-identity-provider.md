
# Apple Identity Provider

## Structure

`AppleIdentityProvider`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bundleId` | `string \| undefined` | Optional | - |
| `buttonText` | `string \| undefined` | Optional | - |
| `keyId` | `string \| undefined` | Optional | - |
| `scope` | `string \| undefined` | Optional | - |
| `servicesId` | `string \| undefined` | Optional | - |
| `teamId` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `applicationConfiguration` | [`Record<string, AppleApplicationConfiguration> \| undefined`](../../doc/models/apple-application-configuration.md) | Optional | - |
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
  "type": "ExternalJWT",
  "bundleId": "bundleId2",
  "buttonText": "buttonText8",
  "keyId": "0000163e-0000-0000-0000-000000000000",
  "scope": "scope6",
  "servicesId": "servicesId8"
}
```

