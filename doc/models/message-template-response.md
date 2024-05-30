
# Message Template Response

## Structure

`MessageTemplateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageTemplate` | [`MessageTemplate \| undefined`](../../doc/models/message-template.md) | Optional | Stores an message template used to distribute messages; |
| `messageTemplates` | [`MessageTemplate[] \| undefined`](../../doc/models/message-template.md) | Optional | - |

## Example (as JSON)

```json
{
  "messageTemplate": {
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
    "id": "000021c4-0000-0000-0000-000000000000",
    "insertInstant": 30,
    "lastUpdateInstant": 168,
    "name": "name4"
  },
  "messageTemplates": [
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "id": "00000c98-0000-0000-0000-000000000000",
      "insertInstant": 34,
      "lastUpdateInstant": 92,
      "name": "name4"
    },
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "id": "00000c98-0000-0000-0000-000000000000",
      "insertInstant": 34,
      "lastUpdateInstant": 92,
      "name": "name4"
    },
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "id": "00000c98-0000-0000-0000-000000000000",
      "insertInstant": 34,
      "lastUpdateInstant": 92,
      "name": "name4"
    }
  ]
}
```

