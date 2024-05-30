
# User Login Success Event

Models the User Login Success Event.

## Structure

`UserLoginSuccessEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `authenticationType` | `string \| undefined` | Optional | - |
| `connectorId` | `string \| undefined` | Optional | - |
| `identityProviderId` | `string \| undefined` | Optional | - |
| `identityProviderName` | `string \| undefined` | Optional | - |
| `ipAddress` | `string \| undefined` | Optional | - |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |
| `createInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `id` | `string \| undefined` | Optional | - |
| `info` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |
| `tenantId` | `string \| undefined` | Optional | - |
| `type` | [`EventTypeEnum \| undefined`](../../doc/models/event-type-enum.md) | Optional | Models the event types that FusionAuth produces. |

## Example (as JSON)

```json
{
  "createInstant": 1659380719000,
  "applicationId": "000020b2-0000-0000-0000-000000000000",
  "authenticationType": "authenticationType2",
  "connectorId": "0000104a-0000-0000-0000-000000000000",
  "identityProviderId": "00000408-0000-0000-0000-000000000000",
  "identityProviderName": "identityProviderName4"
}
```

