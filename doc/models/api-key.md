
# API Key

domain POJO to represent AuthenticationKey

## Structure

`APIKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `ipAccessControlListId` | `string \| undefined` | Optional | - |
| `key` | `string \| undefined` | Optional | - |
| `keyManager` | `boolean \| undefined` | Optional | - |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `metaData` | [`APIKeyMetaData \| undefined`](../../doc/models/api-key-meta-data.md) | Optional | - |
| `permissions` | [`APIKeyPermissions \| undefined`](../../doc/models/api-key-permissions.md) | Optional | - |
| `tenantId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "id": "000011fa-0000-0000-0000-000000000000",
  "ipAccessControlListId": "00000b0c-0000-0000-0000-000000000000",
  "key": "key2",
  "keyManager": false
}
```

