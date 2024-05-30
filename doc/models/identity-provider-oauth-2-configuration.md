
# Identity Provider Oauth 2 Configuration

## Structure

`IdentityProviderOauth2Configuration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationEndpoint` | `string \| undefined` | Optional | - |
| `clientAuthenticationMethod` | [`ClientAuthenticationMethodEnum \| undefined`](../../doc/models/client-authentication-method-enum.md) | Optional | - |
| `clientId` | `string \| undefined` | Optional | - |
| `clientSecret` | `string \| undefined` | Optional | - |
| `emailClaim` | `string \| undefined` | Optional | - |
| `emailVerifiedClaim` | `string \| undefined` | Optional | - |
| `issuer` | `string \| undefined` | Optional | - |
| `scope` | `string \| undefined` | Optional | - |
| `tokenEndpoint` | `string \| undefined` | Optional | - |
| `uniqueIdClaim` | `string \| undefined` | Optional | - |
| `userinfoEndpoint` | `string \| undefined` | Optional | - |
| `usernameClaim` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "authorization_endpoint": "authorization_endpoint0",
  "clientAuthenticationMethod": "none",
  "client_id": "client_id6",
  "client_secret": "client_secret2",
  "emailClaim": "emailClaim0"
}
```

