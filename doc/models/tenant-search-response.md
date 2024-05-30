
# Tenant Search Response

Tenant search response

## Structure

`TenantSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenants` | [`Tenant[] \| undefined`](../../doc/models/tenant.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "tenants": [
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
        },
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
    }
  ],
  "total": 244
}
```

