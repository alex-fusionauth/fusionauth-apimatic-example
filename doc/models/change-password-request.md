
# Change Password Request

Change password request object.

## Structure

`ChangePasswordRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `changePasswordId` | `string \| undefined` | Optional | - |
| `currentPassword` | `string \| undefined` | Optional | - |
| `loginId` | `string \| undefined` | Optional | - |
| `password` | `string \| undefined` | Optional | - |
| `refreshToken` | `string \| undefined` | Optional | - |
| `trustChallenge` | `string \| undefined` | Optional | - |
| `trustToken` | `string \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "applicationId": "000011c8-0000-0000-0000-000000000000",
  "changePasswordId": "changePasswordId8",
  "currentPassword": "currentPassword4",
  "loginId": "loginId6",
  "password": "password6"
}
```

