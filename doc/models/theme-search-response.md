
# Theme Search Response

Search response for Themes

## Structure

`ThemeSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `themes` | [`Theme[] \| undefined`](../../doc/models/theme.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "themes": [
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "defaultMessages": "defaultMessages4",
      "id": "00001d6c-0000-0000-0000-000000000000",
      "insertInstant": 198,
      "lastUpdateInstant": 0
    },
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "defaultMessages": "defaultMessages4",
      "id": "00001d6c-0000-0000-0000-000000000000",
      "insertInstant": 198,
      "lastUpdateInstant": 0
    },
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "defaultMessages": "defaultMessages4",
      "id": "00001d6c-0000-0000-0000-000000000000",
      "insertInstant": 198,
      "lastUpdateInstant": 0
    }
  ],
  "total": 242
}
```

