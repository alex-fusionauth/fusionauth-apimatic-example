
# Verify Email Request

## Structure

`VerifyEmailRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `oneTimeCode` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |
| `verificationId` | `string \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "oneTimeCode": "oneTimeCode4",
  "userId": "000022a6-0000-0000-0000-000000000000",
  "verificationId": "verificationId0",
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

