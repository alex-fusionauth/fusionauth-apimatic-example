
# Consent Request

API request for User consent types.

## Structure

`ConsentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consent` | [`Consent \| undefined`](../../doc/models/consent.md) | Optional | Models a consent. |

## Example (as JSON)

```json
{
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
  }
}
```

