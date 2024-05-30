
# Open Id Connect Identity Provider

## Structure

`OpenIdConnectIdentityProvider`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domains` | `unknown[] \| undefined` | Optional | **Constraints**: *Unique Items Required* |
| `buttonImageURL` | `string \| undefined` | Optional | - |
| `buttonText` | `string \| undefined` | Optional | - |
| `oauth2` | [`IdentityProviderOauth2Configuration \| undefined`](../../doc/models/identity-provider-oauth-2-configuration.md) | Optional | - |
| `postRequest` | `boolean \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `applicationConfiguration` | [`Record<string, OpenIdConnectApplicationConfiguration> \| undefined`](../../doc/models/open-id-connect-application-configuration.md) | Optional | - |
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
  "domains": [
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "buttonImageURL": "buttonImageURL2",
  "buttonText": "buttonText6",
  "oauth2": {
    "authorization_endpoint": "authorization_endpoint2",
    "clientAuthenticationMethod": "client_secret_basic",
    "client_id": "client_id2",
    "client_secret": "client_secret4",
    "emailClaim": "emailClaim2"
  },
  "postRequest": false
}
```

