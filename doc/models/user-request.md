
# User Request

User API request object.

## Structure

`UserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `currentPassword` | `string \| undefined` | Optional | - |
| `disableDomainBlock` | `boolean \| undefined` | Optional | - |
| `sendSetPasswordEmail` | `boolean \| undefined` | Optional | - |
| `skipVerification` | `boolean \| undefined` | Optional | - |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "applicationId": "0000197c-0000-0000-0000-000000000000",
  "currentPassword": "currentPassword2",
  "disableDomainBlock": false,
  "sendSetPasswordEmail": false,
  "skipVerification": false
}
```

