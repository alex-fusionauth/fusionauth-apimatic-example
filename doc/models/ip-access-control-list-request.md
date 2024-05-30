
# IP Access Control List Request

## Structure

`IPAccessControlListRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAccessControlList` | [`IPAccessControlList \| undefined`](../../doc/models/ip-access-control-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "ipAccessControlList": {
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
    "entries": [
      {
        "action": "Allow",
        "endIPAddress": "endIPAddress0",
        "startIPAddress": "startIPAddress6"
      }
    ],
    "id": "00001ffc-0000-0000-0000-000000000000",
    "insertInstant": 118,
    "lastUpdateInstant": 176
  }
}
```

