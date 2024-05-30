
# Group Request

Group API request object.

## Structure

`GroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `group` | [`Group \| undefined`](../../doc/models/group.md) | Optional | - |
| `roleIds` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "group": {
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
    "id": "00001016-0000-0000-0000-000000000000",
    "insertInstant": 128,
    "lastUpdateInstant": 186,
    "name": "name8"
  },
  "roleIds": [
    "00001d38-0000-0000-0000-000000000000"
  ]
}
```

