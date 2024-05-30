
# Send Response

## Structure

`SendResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `anonymousResults` | [`Record<string, EmailTemplateErrors> \| undefined`](../../doc/models/email-template-errors.md) | Optional | - |
| `results` | [`Record<string, EmailTemplateErrors> \| undefined`](../../doc/models/email-template-errors.md) | Optional | - |

## Example (as JSON)

```json
{
  "anonymousResults": {
    "key0": {
      "parseErrors": {
        "key0": "parseErrors0",
        "key1": "parseErrors1",
        "key2": "parseErrors2"
      },
      "renderErrors": {
        "key0": "renderErrors4",
        "key1": "renderErrors5",
        "key2": "renderErrors6"
      }
    }
  },
  "results": {
    "key0": {
      "parseErrors": {
        "key0": "parseErrors8"
      },
      "renderErrors": {
        "key0": "renderErrors8"
      }
    },
    "key1": {
      "parseErrors": {
        "key0": "parseErrors8"
      },
      "renderErrors": {
        "key0": "renderErrors8"
      }
    },
    "key2": {
      "parseErrors": {
        "key0": "parseErrors8"
      },
      "renderErrors": {
        "key0": "renderErrors8"
      }
    }
  }
}
```

