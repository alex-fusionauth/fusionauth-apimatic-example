
# Email Template Response

Email template response.

## Structure

`EmailTemplateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailTemplate` | [`EmailTemplate \| undefined`](../../doc/models/email-template.md) | Optional | Stores an email template used to send emails to users. |
| `emailTemplates` | [`EmailTemplate[] \| undefined`](../../doc/models/email-template.md) | Optional | - |

## Example (as JSON)

```json
{
  "emailTemplate": {
    "defaultFromName": "defaultFromName4",
    "defaultHtmlTemplate": "defaultHtmlTemplate4",
    "defaultSubject": "defaultSubject6",
    "defaultTextTemplate": "defaultTextTemplate6",
    "fromEmail": "fromEmail4"
  },
  "emailTemplates": [
    {
      "defaultFromName": "defaultFromName2",
      "defaultHtmlTemplate": "defaultHtmlTemplate2",
      "defaultSubject": "defaultSubject4",
      "defaultTextTemplate": "defaultTextTemplate4",
      "fromEmail": "fromEmail2"
    },
    {
      "defaultFromName": "defaultFromName2",
      "defaultHtmlTemplate": "defaultHtmlTemplate2",
      "defaultSubject": "defaultSubject4",
      "defaultTextTemplate": "defaultTextTemplate4",
      "fromEmail": "fromEmail2"
    },
    {
      "defaultFromName": "defaultFromName2",
      "defaultHtmlTemplate": "defaultHtmlTemplate2",
      "defaultSubject": "defaultSubject4",
      "defaultTextTemplate": "defaultTextTemplate4",
      "fromEmail": "fromEmail2"
    }
  ]
}
```

