
# Import Request

Import request.

## Structure

`ImportRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encryptionScheme` | `string \| undefined` | Optional | - |
| `factor` | `number \| undefined` | Optional | - |
| `users` | [`User[] \| undefined`](../../doc/models/user.md) | Optional | - |
| `validateDbConstraints` | `boolean \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "encryptionScheme": "encryptionScheme2",
  "factor": 228,
  "users": [
    {
      "preferredLanguages": [
        "preferredLanguages0",
        "preferredLanguages9"
      ],
      "active": false,
      "birthDate": "birthDate0",
      "cleanSpeakId": "0000205c-0000-0000-0000-000000000000",
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
      }
    },
    {
      "preferredLanguages": [
        "preferredLanguages0",
        "preferredLanguages9"
      ],
      "active": false,
      "birthDate": "birthDate0",
      "cleanSpeakId": "0000205c-0000-0000-0000-000000000000",
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
      }
    }
  ],
  "validateDbConstraints": false,
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

