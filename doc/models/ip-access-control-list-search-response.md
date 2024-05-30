
# IP Access Control List Search Response

## Structure

`IPAccessControlListSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAccessControlLists` | [`IPAccessControlList[] \| undefined`](../../doc/models/ip-access-control-list.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "ipAccessControlLists": [
    {
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
      "entries": [
        {
          "action": "Allow",
          "endIPAddress": "endIPAddress0",
          "startIPAddress": "startIPAddress6"
        },
        {
          "action": "Allow",
          "endIPAddress": "endIPAddress0",
          "startIPAddress": "startIPAddress6"
        }
      ],
      "id": "000021aa-0000-0000-0000-000000000000",
      "insertInstant": 84,
      "lastUpdateInstant": 142
    }
  ],
  "total": 178
}
```

