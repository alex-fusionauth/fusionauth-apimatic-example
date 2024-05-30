
# Entity Grant Request

Entity grant API request object.

## Structure

`EntityGrantRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grant` | [`EntityGrant \| undefined`](../../doc/models/entity-grant.md) | Optional | A grant for an entity to a user or another entity. |

## Example (as JSON)

```json
{
  "grant": {
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
    "id": "000022a8-0000-0000-0000-000000000000",
    "insertInstant": 2,
    "lastUpdateInstant": 196
  }
}
```

