
# Action Request

The user action request object.

## Structure

`ActionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`ActionData \| undefined`](../../doc/models/action-data.md) | Optional | - |
| `broadcast` | `boolean \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "action": {
    "actioneeUserId": "0000176c-0000-0000-0000-000000000000",
    "actionerUserId": "00000b38-0000-0000-0000-000000000000",
    "applicationIds": [
      "00001d45-0000-0000-0000-000000000000",
      "00001d44-0000-0000-0000-000000000000"
    ],
    "comment": "comment6",
    "emailUser": false
  },
  "broadcast": false,
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

