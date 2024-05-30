
# Identity Provider Link

## Structure

`IdentityProviderLink`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `displayName` | `string \| undefined` | Optional | - |
| `identityProviderId` | `string \| undefined` | Optional | - |
| `identityProviderName` | `string \| undefined` | Optional | - |
| `identityProviderType` | [`IdentityProviderTypeEnum \| undefined`](../../doc/models/identity-provider-type-enum.md) | Optional | - |
| `identityProviderUserId` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastLoginInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `tenantId` | `string \| undefined` | Optional | - |
| `token` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastLoginInstant": 1659380719000,
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
  "displayName": "displayName8",
  "identityProviderId": "00000700-0000-0000-0000-000000000000",
  "identityProviderName": "identityProviderName4",
  "identityProviderType": "LinkedIn"
}
```

