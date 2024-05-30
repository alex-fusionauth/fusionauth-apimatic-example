
# Group Search Response

Search response for Groups

## Structure

`GroupSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groups` | [`Group[] \| undefined`](../../doc/models/group.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "groups": [
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "id": "00000f38-0000-0000-0000-000000000000",
      "insertInstant": 242,
      "lastUpdateInstant": 44,
      "name": "name6"
    }
  ],
  "total": 252
}
```

