
# Identity Provider Link Response

## Structure

`IdentityProviderLinkResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProviderLink` | [`IdentityProviderLink \| undefined`](../../doc/models/identity-provider-link.md) | Optional | - |
| `identityProviderLinks` | [`IdentityProviderLink[] \| undefined`](../../doc/models/identity-provider-link.md) | Optional | - |

## Example (as JSON)

```json
{
  "identityProviderLink": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      },
      "key1": {
        "key1": "val1",
        "key2": "val2"
      },
      "key2": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "displayName": "displayName2",
    "identityProviderId": "00000ee4-0000-0000-0000-000000000000",
    "identityProviderName": "identityProviderName4",
    "identityProviderType": "SAMLv2IdPInitiated"
  },
  "identityProviderLinks": [
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        },
        "key2": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "displayName": "displayName6",
      "identityProviderId": "00000e62-0000-0000-0000-000000000000",
      "identityProviderName": "identityProviderName0",
      "identityProviderType": "Google"
    }
  ]
}
```

