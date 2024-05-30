
# Identity Provider Search Response

Identity Provider response.

## Structure

`IdentityProviderSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProviders` | [`IdentityProviderField[] \| undefined`](../../doc/models/containers/identity-provider-field.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "identityProviders": [
    {
      "type": "Apple",
      "bundleId": "bundleId2",
      "buttonText": "buttonText8",
      "keyId": "0000163e-0000-0000-0000-000000000000",
      "scope": "scope6",
      "servicesId": "servicesId8"
    },
    {
      "type": "Apple",
      "bundleId": "bundleId2",
      "buttonText": "buttonText8",
      "keyId": "0000163e-0000-0000-0000-000000000000",
      "scope": "scope6",
      "servicesId": "servicesId8"
    }
  ],
  "total": 150
}
```

