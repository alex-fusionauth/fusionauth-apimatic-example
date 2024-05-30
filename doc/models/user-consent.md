
# User Consent

Models a User consent.

## Structure

`UserConsent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `consent` | [`Consent \| undefined`](../../doc/models/consent.md) | Optional | Models a consent. |
| `consentId` | `string \| undefined` | Optional | - |
| `giverUserId` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `status` | [`ConsentStatusEnum \| undefined`](../../doc/models/consent-status-enum.md) | Optional | Models a consent. |
| `userId` | `string \| undefined` | Optional | - |
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
  "consent": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "consentEmailTemplateId": "00001d06-0000-0000-0000-000000000000",
    "countryMinimumAgeForSelfConsent": {
      "key1": "val1",
      "key2": "val2"
    },
    "defaultMinimumAgeForSelfConsent": 96,
    "emailPlus": {
      "emailTemplateId": "0000114e-0000-0000-0000-000000000000",
      "maximumTimeToSendEmailInHours": 240,
      "minimumTimeToSendEmailInHours": 2,
      "enabled": false
    }
  },
  "consentId": "0000048c-0000-0000-0000-000000000000",
  "giverUserId": "00001220-0000-0000-0000-000000000000",
  "id": "0000231a-0000-0000-0000-000000000000"
}
```

