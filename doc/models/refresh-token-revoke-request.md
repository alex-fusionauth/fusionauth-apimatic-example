
# Refresh Token Revoke Request

Request for the Refresh Token API to revoke a refresh token rather than using the URL parameters.

## Structure

`RefreshTokenRevokeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `token` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "applicationId": "00001c26-0000-0000-0000-000000000000",
  "token": "token0",
  "userId": "00000f7e-0000-0000-0000-000000000000",
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

