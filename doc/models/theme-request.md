
# Theme Request

Theme API request object.

## Structure

`ThemeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sourceThemeId` | `string \| undefined` | Optional | - |
| `theme` | [`Theme \| undefined`](../../doc/models/theme.md) | Optional | - |

## Example (as JSON)

```json
{
  "sourceThemeId": "000017f4-0000-0000-0000-000000000000",
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
  }
}
```

