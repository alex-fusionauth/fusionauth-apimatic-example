
# External JWT Identity Provider

External JWT-only identity provider.

## Structure

`ExternalJWTIdentityProvider`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `claimMap` | `Record<string, string> \| undefined` | Optional | - |
| `domains` | `unknown[] \| undefined` | Optional | **Constraints**: *Unique Items Required* |
| `defaultKeyId` | `string \| undefined` | Optional | - |
| `headerKeyParameter` | `string \| undefined` | Optional | - |
| `oauth2` | [`IdentityProviderOauth2Configuration \| undefined`](../../doc/models/identity-provider-oauth-2-configuration.md) | Optional | - |
| `uniqueIdentityClaim` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `applicationConfiguration` | [`Record<string, ExternalJWTApplicationConfiguration> \| undefined`](../../doc/models/external-jwt-application-configuration.md) | Optional | - |
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
  "type": "OpenIDConnect",
  "claimMap": {
    "key0": "claimMap9"
  },
  "domains": [
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "defaultKeyId": "00002350-0000-0000-0000-000000000000",
  "headerKeyParameter": "headerKeyParameter4",
  "oauth2": {
    "authorization_endpoint": "authorization_endpoint2",
    "clientAuthenticationMethod": "client_secret_basic",
    "client_id": "client_id2",
    "client_secret": "client_secret4",
    "emailClaim": "emailClaim2"
  }
}
```

