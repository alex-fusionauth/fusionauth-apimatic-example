
# Email Template

Stores an email template used to send emails to users.

## Structure

`EmailTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultFromName` | `string \| undefined` | Optional | - |
| `defaultHtmlTemplate` | `string \| undefined` | Optional | - |
| `defaultSubject` | `string \| undefined` | Optional | - |
| `defaultTextTemplate` | `string \| undefined` | Optional | - |
| `fromEmail` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `localizedFromNames` | `unknown \| undefined` | Optional | Models a set of localized Strings that can be stored as JSON. |
| `localizedHtmlTemplates` | `unknown \| undefined` | Optional | Models a set of localized Strings that can be stored as JSON. |
| `localizedSubjects` | `unknown \| undefined` | Optional | Models a set of localized Strings that can be stored as JSON. |
| `localizedTextTemplates` | `unknown \| undefined` | Optional | Models a set of localized Strings that can be stored as JSON. |
| `name` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "defaultFromName": "defaultFromName0",
  "defaultHtmlTemplate": "defaultHtmlTemplate0",
  "defaultSubject": "defaultSubject2",
  "defaultTextTemplate": "defaultTextTemplate2",
  "fromEmail": "fromEmail0"
}
```

