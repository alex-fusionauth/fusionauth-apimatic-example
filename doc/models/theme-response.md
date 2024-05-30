
# Theme Response

Theme API response object.

## Structure

`ThemeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `theme` | [`Theme \| undefined`](../../doc/models/theme.md) | Optional | - |
| `themes` | [`Theme[] \| undefined`](../../doc/models/theme.md) | Optional | - |

## Example (as JSON)

```json
{
  "theme": {
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
    "defaultMessages": "defaultMessages4",
    "id": "00002328-0000-0000-0000-000000000000",
    "insertInstant": 226,
    "lastUpdateInstant": 28
  },
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
  ]
}
```

