
# Lookup Response

## Structure

`LookupResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProvider` | [`IdentityProviderDetails \| undefined`](../../doc/models/identity-provider-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "identityProvider": {
    "applicationIds": [
      "00000e51-0000-0000-0000-000000000000",
      "00000e50-0000-0000-0000-000000000000"
    ],
    "id": "00001482-0000-0000-0000-000000000000",
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
}
```

