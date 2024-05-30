
# Nintendo Identity Provider

Nintendo gaming login provider.

## Structure

`NintendoIdentityProvider`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `buttonText` | `string \| undefined` | Optional | - |
| `clientId` | `string \| undefined` | Optional | - |
| `clientSecret` | `string \| undefined` | Optional | - |
| `emailClaim` | `string \| undefined` | Optional | - |
| `scope` | `string \| undefined` | Optional | - |
| `uniqueIdClaim` | `string \| undefined` | Optional | - |
| `usernameClaim` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `applicationConfiguration` | [`Record<string, NintendoApplicationConfiguration> \| undefined`](../../doc/models/nintendo-application-configuration.md) | Optional | - |
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
  "buttonText": "buttonText2",
  "client_id": "client_id2",
  "client_secret": "client_secret8",
  "emailClaim": "emailClaim6",
  "scope": "scope2"
}
```

