
# Consent Search Response

Consent search response

## Structure

`ConsentSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consents` | [`Consent[] \| undefined`](../../doc/models/consent.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "consents": [
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "consentEmailTemplateId": "00001334-0000-0000-0000-000000000000",
      "countryMinimumAgeForSelfConsent": {
        "key1": "val1",
        "key2": "val2"
      },
      "defaultMinimumAgeForSelfConsent": 22,
      "emailPlus": {
        "emailTemplateId": "0000114e-0000-0000-0000-000000000000",
        "maximumTimeToSendEmailInHours": 240,
        "minimumTimeToSendEmailInHours": 2,
        "enabled": false
      }
    },
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "consentEmailTemplateId": "00001334-0000-0000-0000-000000000000",
      "countryMinimumAgeForSelfConsent": {
        "key1": "val1",
        "key2": "val2"
      },
      "defaultMinimumAgeForSelfConsent": 22,
      "emailPlus": {
        "emailTemplateId": "0000114e-0000-0000-0000-000000000000",
        "maximumTimeToSendEmailInHours": 240,
        "minimumTimeToSendEmailInHours": 2,
        "enabled": false
      }
    }
  ],
  "total": 32
}
```

