
# Forgot Password Request

Forgot password request object.

## Structure

`ForgotPasswordRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `changePasswordId` | `string \| undefined` | Optional | - |
| `loginId` | `string \| undefined` | Optional | - |
| `sendForgotPasswordEmail` | `boolean \| undefined` | Optional | - |
| `state` | `Record<string, unknown> \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `username` | `string \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "applicationId": "0000094c-0000-0000-0000-000000000000",
  "changePasswordId": "changePasswordId6",
  "loginId": "loginId4",
  "sendForgotPasswordEmail": false,
  "state": {
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
```

