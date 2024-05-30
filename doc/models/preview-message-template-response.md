
# Preview Message Template Response

## Structure

`PreviewMessageTemplateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Errors \| undefined`](../../doc/models/errors.md) | Optional | Standard error domain object that can also be used as the response from an API call. |
| `message` | [`SMSMessage \| undefined`](../../doc/models/sms-message.md) | Optional | - |

## Example (as JSON)

```json
{
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
  },
  "message": {
    "phoneNumber": "phoneNumber0",
    "textMessage": "textMessage8"
  }
}
```

