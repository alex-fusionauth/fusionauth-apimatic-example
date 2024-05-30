
# Entity Type

Models an entity type that has a specific set of permissions. These are global objects and can be used across tenants.

## Structure

`EntityType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `jwtConfiguration` | [`EntityJWTConfiguration \| undefined`](../../doc/models/entity-jwt-configuration.md) | Optional | JWT Configuration for entities. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |
| `permissions` | [`EntityTypePermission[] \| undefined`](../../doc/models/entity-type-permission.md) | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "id": "000023cc-0000-0000-0000-000000000000",
  "jwtConfiguration": {
    "accessTokenKeyId": "000002ec-0000-0000-0000-000000000000",
    "timeToLiveInSeconds": 136,
    "enabled": false
  }
}
```

