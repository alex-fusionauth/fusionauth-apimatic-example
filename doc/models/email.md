
# Email

This class is an abstraction of a simple email message.

## Structure

`Email`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attachments` | [`Attachment[] \| undefined`](../../doc/models/attachment.md) | Optional | - |
| `bcc` | [`EmailAddress[] \| undefined`](../../doc/models/email-address.md) | Optional | - |
| `cc` | [`EmailAddress[] \| undefined`](../../doc/models/email-address.md) | Optional | - |
| `from` | [`EmailAddress \| undefined`](../../doc/models/email-address.md) | Optional | An email address. |
| `html` | `string \| undefined` | Optional | - |
| `replyTo` | [`EmailAddress \| undefined`](../../doc/models/email-address.md) | Optional | An email address. |
| `subject` | `string \| undefined` | Optional | - |
| `text` | `string \| undefined` | Optional | - |
| `to` | [`EmailAddress[] \| undefined`](../../doc/models/email-address.md) | Optional | - |

## Example (as JSON)

```json
{
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
  "html": "html4"
}
```

