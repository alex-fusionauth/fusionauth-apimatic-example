
# Identity Provider Tenant Configuration

## Structure

`IdentityProviderTenantConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `limitUserLinkCount` | [`IdentityProviderLimitUserLinkingPolicy \| undefined`](../../doc/models/identity-provider-limit-user-linking-policy.md) | Optional | - |

## Example (as JSON)

```json
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
  "limitUserLinkCount": {
    "maximumLinks": 16,
    "enabled": false
  }
}
```

