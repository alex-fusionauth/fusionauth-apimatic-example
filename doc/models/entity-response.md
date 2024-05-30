
# Entity Response

Entity API response object.

## Structure

`EntityResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entity` | [`Entity \| undefined`](../../doc/models/entity.md) | Optional | Models an entity that a user can be granted permissions to. Or an entity that can be granted permissions to another entity. |

## Example (as JSON)

```json
{
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
  }
}
```

