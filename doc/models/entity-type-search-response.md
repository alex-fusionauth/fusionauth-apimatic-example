
# Entity Type Search Response

Search response for entity types.

## Structure

`EntityTypeSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityTypes` | [`EntityType[] \| undefined`](../../doc/models/entity-type.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
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
  "total": 156
}
```

