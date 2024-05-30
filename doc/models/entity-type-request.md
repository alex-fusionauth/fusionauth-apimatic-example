
# Entity Type Request

Entity Type API request object.

## Structure

`EntityTypeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityType` | [`EntityType \| undefined`](../../doc/models/entity-type.md) | Optional | Models an entity type that has a specific set of permissions. These are global objects and can be used across tenants. |
| `permission` | [`EntityTypePermission \| undefined`](../../doc/models/entity-type-permission.md) | Optional | Models a specific entity type permission. This permission can be granted to users or other entities. |

## Example (as JSON)

```json
{
  "entityType": {
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
    "id": "00000300-0000-0000-0000-000000000000",
    "insertInstant": 138,
    "jwtConfiguration": {
      "accessTokenKeyId": "000002ec-0000-0000-0000-000000000000",
      "timeToLiveInSeconds": 136,
      "enabled": false
    },
    "lastUpdateInstant": 196
  },
  "permission": {
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
    "description": "description2",
    "id": "00001eb6-0000-0000-0000-000000000000",
    "insertInstant": 96,
    "isDefault": false
  }
}
```

