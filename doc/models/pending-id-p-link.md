
# Pending Id P Link

## Structure

`PendingIdPLink`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `identityProviderId` | `string \| undefined` | Optional | - |
| `identityProviderLinks` | [`IdentityProviderLink[] \| undefined`](../../doc/models/identity-provider-link.md) | Optional | - |
| `identityProviderName` | `string \| undefined` | Optional | - |
| `identityProviderTenantConfiguration` | [`IdentityProviderTenantConfiguration \| undefined`](../../doc/models/identity-provider-tenant-configuration.md) | Optional | - |
| `identityProviderType` | [`IdentityProviderTypeEnum \| undefined`](../../doc/models/identity-provider-type-enum.md) | Optional | - |
| `identityProviderUserId` | `string \| undefined` | Optional | - |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |
| `username` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "displayName": "displayName8",
  "email": "email6",
  "identityProviderId": "00000dea-0000-0000-0000-000000000000",
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
  ],
  "identityProviderName": "identityProviderName4"
}
```

