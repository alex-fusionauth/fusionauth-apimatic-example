
# Identity Provider Details

## Structure

`IdentityProviderDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationIds` | `string[] \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `idpEndpoint` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `oauth2` | [`IdentityProviderOauth2Configuration \| undefined`](../../doc/models/identity-provider-oauth-2-configuration.md) | Optional | - |
| `type` | [`IdentityProviderTypeEnum \| undefined`](../../doc/models/identity-provider-type-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "applicationIds": [
    "00001171-0000-0000-0000-000000000000"
  ],
  "id": "000017a2-0000-0000-0000-000000000000",
  "idpEndpoint": "idpEndpoint6",
  "name": "name0",
  "oauth2": {
    "authorization_endpoint": "authorization_endpoint2",
    "clientAuthenticationMethod": "client_secret_basic",
    "client_id": "client_id2",
    "client_secret": "client_secret4",
    "emailClaim": "emailClaim2"
  }
}
```

