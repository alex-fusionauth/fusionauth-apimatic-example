
# Open Id Connect Application Configuration

## Structure

`OpenIdConnectApplicationConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `buttonImageURL` | `string \| undefined` | Optional | - |
| `buttonText` | `string \| undefined` | Optional | - |
| `oauth2` | [`IdentityProviderOauth2Configuration \| undefined`](../../doc/models/identity-provider-oauth-2-configuration.md) | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `createRegistration` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "buttonImageURL": "buttonImageURL8",
  "buttonText": "buttonText2",
  "oauth2": {
    "authorization_endpoint": "authorization_endpoint2",
    "clientAuthenticationMethod": "client_secret_basic",
    "client_id": "client_id2",
    "client_secret": "client_secret4",
    "emailClaim": "emailClaim2"
  },
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "createRegistration": false
}
```

