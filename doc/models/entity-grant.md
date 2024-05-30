
# Entity Grant

A grant for an entity to a user or another entity.

## Structure

`EntityGrant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `entity` | [`Entity \| undefined`](../../doc/models/entity.md) | Optional | Models an entity that a user can be granted permissions to. Or an entity that can be granted permissions to another entity. |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `permissions` | `unknown[] \| undefined` | Optional | **Constraints**: *Unique Items Required* |
| `recipientEntityId` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |

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
  "entity": {
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
    "clientId": "clientId6",
    "clientSecret": "clientSecret4",
    "id": "00002276-0000-0000-0000-000000000000",
    "insertInstant": 224
  },
  "id": "00001c14-0000-0000-0000-000000000000"
}
```

