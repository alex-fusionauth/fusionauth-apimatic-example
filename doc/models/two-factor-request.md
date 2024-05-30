
# Two Factor Request

## Structure

`TwoFactorRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `authenticatorId` | `string \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `method` | `string \| undefined` | Optional | - |
| `mobilePhone` | `string \| undefined` | Optional | - |
| `secret` | `string \| undefined` | Optional | - |
| `secretBase32Encoded` | `string \| undefined` | Optional | - |
| `twoFactorId` | `string \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "applicationId": "00000f6a-0000-0000-0000-000000000000",
  "authenticatorId": "authenticatorId0",
  "code": "code4",
  "email": "email0",
  "method": "method0"
}
```

