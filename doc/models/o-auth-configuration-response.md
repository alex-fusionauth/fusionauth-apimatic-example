
# O Auth Configuration Response

## Structure

`OAuthConfigurationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `httpSessionMaxInactiveInterval` | `number \| undefined` | Optional | - |
| `logoutURL` | `string \| undefined` | Optional | - |
| `oauthConfiguration` | [`OAuth2Configuration \| undefined`](../../doc/models/o-auth-2-configuration.md) | Optional | - |

## Example (as JSON)

```json
{
  "httpSessionMaxInactiveInterval": 250,
  "logoutURL": "logoutURL0",
  "oauthConfiguration": {
    "authorizedOriginURLs": [
      "authorizedOriginURLs1",
      "authorizedOriginURLs2",
      "authorizedOriginURLs3"
    ],
    "authorizedRedirectURLs": [
      "authorizedRedirectURLs1",
      "authorizedRedirectURLs2"
    ],
    "authorizedURLValidationPolicy": "AllowWildcards",
    "clientAuthenticationPolicy": "Required",
    "clientId": "clientId8"
  }
}
```

