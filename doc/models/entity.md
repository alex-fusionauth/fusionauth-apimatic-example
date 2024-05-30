
# Entity

Models an entity that a user can be granted permissions to. Or an entity that can be granted permissions to another entity.

## Structure

`Entity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `clientId` | `string \| undefined` | Optional | - |
| `clientSecret` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |
| `parentId` | `string \| undefined` | Optional | - |
| `tenantId` | `string \| undefined` | Optional | - |
| `type` | [`EntityType \| undefined`](../../doc/models/entity-type.md) | Optional | Models an entity type that has a specific set of permissions. These are global objects and can be used across tenants. |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
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
  "clientId": "clientId0",
  "clientSecret": "clientSecret8",
  "id": "00000164-0000-0000-0000-000000000000"
}
```

