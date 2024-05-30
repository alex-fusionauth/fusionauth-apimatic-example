
# Verify Registration Request

## Structure

`VerifyRegistrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `oneTimeCode` | `string \| undefined` | Optional | - |
| `verificationId` | `string \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "oneTimeCode": "oneTimeCode2",
  "verificationId": "verificationId8",
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

