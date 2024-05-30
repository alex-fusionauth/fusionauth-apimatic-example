
# Preview Response

## Structure

`PreviewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | [`Email \| undefined`](../../doc/models/email.md) | Optional | This class is an abstraction of a simple email message. |
| `errors` | [`Errors \| undefined`](../../doc/models/errors.md) | Optional | Standard error domain object that can also be used as the response from an API call. |

## Example (as JSON)

```json
{
  "email": {
    "attachments": [
      {
        "attachment": "attachment8",
        "mime": "mime0",
        "name": "name0"
      }
    ],
    "bcc": [
      {
        "address": "address6",
        "display": "display2"
      },
      {
        "address": "address6",
        "display": "display2"
      },
      {
        "address": "address6",
        "display": "display2"
      }
    ],
    "cc": [
      {
        "address": "address4",
        "display": "display0"
      }
    ],
    "from": {
      "address": "address8",
      "display": "display4"
    },
    "html": "html6"
  },
  "errors": {
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
      }
    ]
  }
}
```

