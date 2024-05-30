
# Preview Request

## Structure

`PreviewRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailTemplate` | [`EmailTemplate \| undefined`](../../doc/models/email-template.md) | Optional | Stores an email template used to send emails to users. |
| `locale` | `string \| undefined` | Optional | A Locale object represents a specific geographical, political, or cultural region. |

## Example (as JSON)

```json
{
  "locale": "en_US",
  "emailTemplate": {
    "defaultFromName": "defaultFromName4",
    "defaultHtmlTemplate": "defaultHtmlTemplate4",
    "defaultSubject": "defaultSubject6",
    "defaultTextTemplate": "defaultTextTemplate6",
    "fromEmail": "fromEmail4"
  }
}
```

