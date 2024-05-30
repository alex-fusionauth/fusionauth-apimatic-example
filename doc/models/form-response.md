
# Form Response

Form response.

## Structure

`FormResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `form` | [`Form \| undefined`](../../doc/models/form.md) | Optional | - |
| `forms` | [`Form[] \| undefined`](../../doc/models/form.md) | Optional | - |

## Example (as JSON)

```json
{
  "form": {
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
    "id": "000007c2-0000-0000-0000-000000000000",
    "insertInstant": 76,
    "lastUpdateInstant": 134,
    "name": "name6"
  },
  "forms": [
    {
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
      "id": "00002578-0000-0000-0000-000000000000",
      "insertInstant": 34,
      "lastUpdateInstant": 92,
      "name": "name2"
    }
  ]
}
```

