
# Application Request

The Application API request object.

## Structure

`ApplicationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `application` | [`Application \| undefined`](../../doc/models/application.md) | Optional | - |
| `role` | [`ApplicationRole \| undefined`](../../doc/models/application-role.md) | Optional | A role given to a user for a specific application. |
| `sourceApplicationId` | `string \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "application": {
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
  "role": {
    "description": "description6",
    "id": "000005ce-0000-0000-0000-000000000000",
    "insertInstant": 120,
    "isDefault": false,
    "isSuperRole": false
  },
  "sourceApplicationId": "00001ff8-0000-0000-0000-000000000000",
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

