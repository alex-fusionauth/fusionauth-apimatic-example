
# JWT Refresh Event

Models the JWT Refresh Event. This event will be fired when a JWT is "refreshed" (generated) using a Refresh Token.

## Structure

`JWTRefreshEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `original` | `string \| undefined` | Optional | - |
| `refreshToken` | `string \| undefined` | Optional | - |
| `token` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |
| `createInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `id` | `string \| undefined` | Optional | - |
| `info` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |
| `tenantId` | `string \| undefined` | Optional | - |
| `type` | [`EventTypeEnum \| undefined`](../../doc/models/event-type-enum.md) | Optional | Models the event types that FusionAuth produces. |

## Example (as JSON)

```json
{
  "createInstant": 1659380719000,
  "applicationId": "0000021e-0000-0000-0000-000000000000",
  "original": "original8",
  "refreshToken": "refreshToken0",
  "token": "token4",
  "userId": "00001c86-0000-0000-0000-000000000000"
}
```

