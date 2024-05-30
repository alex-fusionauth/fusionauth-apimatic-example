
# Identity Provider Pending Link Response

## Structure

`IdentityProviderPendingLinkResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProviderTenantConfiguration` | [`IdentityProviderTenantConfiguration \| undefined`](../../doc/models/identity-provider-tenant-configuration.md) | Optional | - |
| `linkCount` | `number \| undefined` | Optional | - |
| `pendingIdPLink` | [`PendingIdPLink \| undefined`](../../doc/models/pending-id-p-link.md) | Optional | - |

## Example (as JSON)

```json
{
  "identityProviderTenantConfiguration": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      },
      "key1": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "limitUserLinkCount": {
      "maximumLinks": 16,
      "enabled": false
    }
  },
  "linkCount": 22,
  "pendingIdPLink": {
    "displayName": "displayName6",
    "email": "email0",
    "identityProviderId": "000002b0-0000-0000-0000-000000000000",
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
      },
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
    ],
    "identityProviderName": "identityProviderName0"
  }
}
```

