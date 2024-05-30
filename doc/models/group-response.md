
# Group Response

Group API response object.

## Structure

`GroupResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `group` | [`Group \| undefined`](../../doc/models/group.md) | Optional | - |
| `groups` | [`Group[] \| undefined`](../../doc/models/group.md) | Optional | - |

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
    },
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
  ]
}
```

