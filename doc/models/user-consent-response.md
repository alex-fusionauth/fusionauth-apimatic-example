
# User Consent Response

API response for User consent.

## Structure

`UserConsentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userConsent` | [`UserConsent \| undefined`](../../doc/models/user-consent.md) | Optional | Models a User consent. |
| `userConsents` | [`UserConsent[] \| undefined`](../../doc/models/user-consent.md) | Optional | - |

## Example (as JSON)

```json
{
  "userConsent": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      },
      "key1": {
        "key1": "val1",
        "key2": "val2"
      },
      "key2": {
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
    "consentId": "00000a8c-0000-0000-0000-000000000000",
    "giverUserId": "00000c20-0000-0000-0000-000000000000",
    "id": "0000020a-0000-0000-0000-000000000000"
  },
  "userConsents": [
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        },
        "key2": {
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
      "consentId": "000026ec-0000-0000-0000-000000000000",
      "giverUserId": "000016d0-0000-0000-0000-000000000000",
      "id": "00001e6a-0000-0000-0000-000000000000"
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
        },
        "key2": {
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
      "consentId": "000026ec-0000-0000-0000-000000000000",
      "giverUserId": "000016d0-0000-0000-0000-000000000000",
      "id": "00001e6a-0000-0000-0000-000000000000"
    }
  ]
}
```

