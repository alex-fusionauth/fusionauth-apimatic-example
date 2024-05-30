
# Steam Identity Provider

Steam gaming login provider.

## Structure

`SteamIdentityProvider`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiMode` | [`SteamAPIModeEnum \| undefined`](../../doc/models/steam-api-mode-enum.md) | Optional | Steam API modes. |
| `buttonText` | `string \| undefined` | Optional | - |
| `clientId` | `string \| undefined` | Optional | - |
| `scope` | `string \| undefined` | Optional | - |
| `webAPIKey` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `applicationConfiguration` | [`Record<string, SteamApplicationConfiguration> \| undefined`](../../doc/models/steam-application-configuration.md) | Optional | - |
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
  "type": "Google",
  "apiMode": "Public",
  "buttonText": "buttonText0",
  "client_id": "client_id0",
  "scope": "scope4",
  "webAPIKey": "webAPIKey4"
}
```

