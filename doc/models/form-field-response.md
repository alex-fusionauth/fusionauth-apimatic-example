
# Form Field Response

Form field response.

## Structure

`FormFieldResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | [`FormField \| undefined`](../../doc/models/form-field.md) | Optional | - |
| `fields` | [`FormField[] \| undefined`](../../doc/models/form-field.md) | Optional | - |

## Example (as JSON)

```json
{
  "field": {
    "confirm": false,
    "consentId": "00000bc6-0000-0000-0000-000000000000",
    "control": "password",
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
    "description": "description4"
  },
  "fields": [
    {
      "confirm": false,
      "consentId": "00001442-0000-0000-0000-000000000000",
      "control": "password",
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
      "description": "description8"
    }
  ]
}
```

