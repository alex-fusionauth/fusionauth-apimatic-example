
# Tenant Request

## Structure

`TenantRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sourceTenantId` | `string \| undefined` | Optional | - |
| `tenant` | [`Tenant \| undefined`](../../doc/models/tenant.md) | Optional | - |
| `webhookIds` | `string[] \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "sourceTenantId": "00001e94-0000-0000-0000-000000000000",
  "tenant": {
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
    "accessControlConfiguration": {
      "uiIPAccessControlListId": "00001c56-0000-0000-0000-000000000000"
    },
    "captchaConfiguration": {
      "captchaMethod": "GoogleRecaptchaV2",
      "secretKey": "secretKey0",
      "siteKey": "siteKey6",
      "threshold": 110.34,
      "enabled": false
    },
    "configured": false,
    "connectorPolicies": [
      {
        "connectorId": "00001338-0000-0000-0000-000000000000",
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
        "domains": [
          {
            "key1": "val1",
            "key2": "val2"
          },
          {
            "key1": "val1",
            "key2": "val2"
          },
          {
            "key1": "val1",
            "key2": "val2"
          }
        ],
        "migrate": false
      }
    ]
  },
  "webhookIds": [
    "0000050c-0000-0000-0000-000000000000"
  ],
  "eventInfo": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "deviceDescription": "deviceDescription8",
    "deviceName": "deviceName2",
    "deviceType": "deviceType6",
    "ipAddress": "ipAddress2"
  }
}
```

