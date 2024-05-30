
# Email Template Search Response

Email template search response

## Structure

`EmailTemplateSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailTemplates` | [`EmailTemplate[] \| undefined`](../../doc/models/email-template.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
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
    }
  ],
  "total": 130
}
```

