
# Open Id Configuration

OpenID Connect Configuration as described by the <a href="https:openid.netspecsopenid-connect-discovery-1_0.html#ProviderMetadata">OpenID  Provider Metadata<a>.

## Structure

`OpenIdConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationEndpoint` | `string \| undefined` | Optional | - |
| `backchannelLogoutSupported` | `boolean \| undefined` | Optional | - |
| `claimsSupported` | `string[] \| undefined` | Optional | - |
| `deviceAuthorizationEndpoint` | `string \| undefined` | Optional | - |
| `endSessionEndpoint` | `string \| undefined` | Optional | - |
| `frontchannelLogoutSupported` | `boolean \| undefined` | Optional | - |
| `grantTypesSupported` | `string[] \| undefined` | Optional | - |
| `idTokenSigningAlgValuesSupported` | `string[] \| undefined` | Optional | - |
| `issuer` | `string \| undefined` | Optional | - |
| `jwksUri` | `string \| undefined` | Optional | - |
| `responseModesSupported` | `string[] \| undefined` | Optional | - |
| `responseTypesSupported` | `string[] \| undefined` | Optional | - |
| `scopesSupported` | `string[] \| undefined` | Optional | - |
| `subjectTypesSupported` | `string[] \| undefined` | Optional | - |
| `tokenEndpoint` | `string \| undefined` | Optional | - |
| `tokenEndpointAuthMethodsSupported` | `string[] \| undefined` | Optional | - |
| `userinfoEndpoint` | `string \| undefined` | Optional | - |
| `userinfoSigningAlgValuesSupported` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "authorization_endpoint": "authorization_endpoint8",
  "backchannel_logout_supported": false,
  "claims_supported": [
    "claims_supported5"
  ],
  "device_authorization_endpoint": "device_authorization_endpoint8",
  "end_session_endpoint": "end_session_endpoint4"
}
```

