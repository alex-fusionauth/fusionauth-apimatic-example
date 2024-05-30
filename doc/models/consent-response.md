
# Consent Response

API response for consent.

## Structure

`ConsentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consent` | [`Consent \| undefined`](../../doc/models/consent.md) | Optional | Models a consent. |
| `consents` | [`Consent[] \| undefined`](../../doc/models/consent.md) | Optional | - |

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
  },
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
  ]
}
```

