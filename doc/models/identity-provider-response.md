
# Identity Provider Response

## Structure

`IdentityProviderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProvider` | [`IdentityProviderField \| undefined`](../../doc/models/containers/identity-provider-field.md) | Optional | - |
| `identityProviders` | [`IdentityProviderField[] \| undefined`](../../doc/models/containers/identity-provider-field.md) | Optional | - |

## Example (as JSON)

```json
{
  "identityProvider": {
    "type": "Apple",
    "bundleId": "bundleId2",
    "buttonText": "buttonText8",
    "keyId": "0000163e-0000-0000-0000-000000000000",
    "scope": "scope6",
    "servicesId": "servicesId8"
  },
  "identityProviders": [
    {
      "type": "Apple",
      "bundleId": "bundleId2",
      "buttonText": "buttonText8",
      "keyId": "0000163e-0000-0000-0000-000000000000",
      "scope": "scope6",
      "servicesId": "servicesId8"
    }
  ]
}
```

