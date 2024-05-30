
# Preview Message Template Request

## Structure

`PreviewMessageTemplateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locale` | `string \| undefined` | Optional | A Locale object represents a specific geographical, political, or cultural region. |
| `messageTemplate` | [`MessageTemplate \| undefined`](../../doc/models/message-template.md) | Optional | Stores an message template used to distribute messages; |

## Example (as JSON)

```json
{
  "locale": "en_US",
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
  }
}
```

