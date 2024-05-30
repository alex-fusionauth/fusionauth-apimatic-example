
# Consent

Models a consent.

## Structure

`Consent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `consentEmailTemplateId` | `string \| undefined` | Optional | - |
| `countryMinimumAgeForSelfConsent` | `unknown \| undefined` | Optional | Models a set of localized Integers that can be stored as JSON. |
| `defaultMinimumAgeForSelfConsent` | `number \| undefined` | Optional | - |
| `emailPlus` | [`EmailPlus \| undefined`](../../doc/models/email-plus.md) | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `multipleValuesAllowed` | `boolean \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `values` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "consentEmailTemplateId": "00001b5a-0000-0000-0000-000000000000",
  "countryMinimumAgeForSelfConsent": {
    "key1": "val1",
    "key2": "val2"
  },
  "defaultMinimumAgeForSelfConsent": 240,
  "emailPlus": {
    "emailTemplateId": "0000114e-0000-0000-0000-000000000000",
    "maximumTimeToSendEmailInHours": 240,
    "minimumTimeToSendEmailInHours": 2,
    "enabled": false
  }
}
```

