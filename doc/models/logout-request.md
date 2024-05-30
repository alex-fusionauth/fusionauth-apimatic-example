
# Logout Request

Request for the Logout API that can be used as an alternative to URL parameters.

## Structure

`LogoutRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `global` | `boolean \| undefined` | Optional | - |
| `refreshToken` | `string \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "global": false,
  "refreshToken": "refreshToken2",
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

