
# Application Search Response

Application search response

## Structure

`ApplicationSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applications` | [`Application[] \| undefined`](../../doc/models/application.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |
| `expandable` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "applications": [
    {
      "accessControlConfiguration": {
        "uiIPAccessControlListId": "00001c56-0000-0000-0000-000000000000"
      },
      "active": false,
      "authenticationTokenConfiguration": {
        "enabled": false
      },
      "cleanSpeakConfiguration": {
        "apiKey": "apiKey6",
        "applicationIds": [
          "00001177-0000-0000-0000-000000000000",
          "00001176-0000-0000-0000-000000000000"
        ],
        "url": "url0",
        "usernameModeration": {
          "applicationId": "000008ee-0000-0000-0000-000000000000",
          "enabled": false
        },
        "enabled": false
      },
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    },
    {
      "accessControlConfiguration": {
        "uiIPAccessControlListId": "00001c56-0000-0000-0000-000000000000"
      },
      "active": false,
      "authenticationTokenConfiguration": {
        "enabled": false
      },
      "cleanSpeakConfiguration": {
        "apiKey": "apiKey6",
        "applicationIds": [
          "00001177-0000-0000-0000-000000000000",
          "00001176-0000-0000-0000-000000000000"
        ],
        "url": "url0",
        "usernameModeration": {
          "applicationId": "000008ee-0000-0000-0000-000000000000",
          "enabled": false
        },
        "enabled": false
      },
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    },
    {
      "accessControlConfiguration": {
        "uiIPAccessControlListId": "00001c56-0000-0000-0000-000000000000"
      },
      "active": false,
      "authenticationTokenConfiguration": {
        "enabled": false
      },
      "cleanSpeakConfiguration": {
        "apiKey": "apiKey6",
        "applicationIds": [
          "00001177-0000-0000-0000-000000000000",
          "00001176-0000-0000-0000-000000000000"
        ],
        "url": "url0",
        "usernameModeration": {
          "applicationId": "000008ee-0000-0000-0000-000000000000",
          "enabled": false
        },
        "enabled": false
      },
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    }
  ],
  "total": 116,
  "expandable": [
    "expandable6",
    "expandable7"
  ]
}
```

