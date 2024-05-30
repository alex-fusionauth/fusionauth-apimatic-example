
# Errors

Standard error domain object that can also be used as the response from an API call.

## Structure

`Errors`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fieldErrors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | - |
| `generalErrors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | - |

## Example (as JSON)

```json
{
  "fieldErrors": [
    {
      "code": "code6",
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
      "message": "message8"
    },
    {
      "code": "code6",
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
      "message": "message8"
    }
  ],
  "generalErrors": [
    {
      "code": "code0",
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "message": "message2"
    },
    {
      "code": "code0",
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "message": "message2"
    },
    {
      "code": "code0",
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "message": "message2"
    }
  ]
}
```

