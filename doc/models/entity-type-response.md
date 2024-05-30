
# Entity Type Response

Entity Type API response object.

## Structure

`EntityTypeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityType` | [`EntityType \| undefined`](../../doc/models/entity-type.md) | Optional | Models an entity type that has a specific set of permissions. These are global objects and can be used across tenants. |
| `entityTypes` | [`EntityType[] \| undefined`](../../doc/models/entity-type.md) | Optional | - |
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
  "entityTypes": [
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "id": "00000754-0000-0000-0000-000000000000",
      "insertInstant": 190,
      "jwtConfiguration": {
        "accessTokenKeyId": "000002ec-0000-0000-0000-000000000000",
        "timeToLiveInSeconds": 136,
        "enabled": false
      },
      "lastUpdateInstant": 8
    }
  ],
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

