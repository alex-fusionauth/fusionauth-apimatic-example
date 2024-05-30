
# User Action Event

Models the user action Event.

## Structure

`UserActionEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationIds` | `string[] \| undefined` | Optional | - |
| `action` | `string \| undefined` | Optional | - |
| `actionId` | `string \| undefined` | Optional | - |
| `actioneeUserId` | `string \| undefined` | Optional | - |
| `actionerUserId` | `string \| undefined` | Optional | - |
| `comment` | `string \| undefined` | Optional | - |
| `email` | [`Email \| undefined`](../../doc/models/email.md) | Optional | This class is an abstraction of a simple email message. |
| `emailedUser` | `boolean \| undefined` | Optional | - |
| `expiry` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `localizedAction` | `string \| undefined` | Optional | - |
| `localizedDuration` | `string \| undefined` | Optional | - |
| `localizedOption` | `string \| undefined` | Optional | - |
| `localizedReason` | `string \| undefined` | Optional | - |
| `notifyUser` | `boolean \| undefined` | Optional | - |
| `option` | `string \| undefined` | Optional | - |
| `phase` | [`UserActionPhaseEnum \| undefined`](../../doc/models/user-action-phase-enum.md) | Optional | The phases of a time-based user action. |
| `reason` | `string \| undefined` | Optional | - |
| `reasonCode` | `string \| undefined` | Optional | - |
| `createInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `id` | `string \| undefined` | Optional | - |
| `info` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |
| `tenantId` | `string \| undefined` | Optional | - |
| `type` | [`EventTypeEnum \| undefined`](../../doc/models/event-type-enum.md) | Optional | Models the event types that FusionAuth produces. |

## Example (as JSON)

```json
{
  "expiry": 1659380719000,
  "createInstant": 1659380719000,
  "applicationIds": [
    "0000240b-0000-0000-0000-000000000000",
    "0000240a-0000-0000-0000-000000000000"
  ],
  "action": "action0",
  "actionId": "000017ea-0000-0000-0000-000000000000",
  "actioneeUserId": "000001be-0000-0000-0000-000000000000",
  "actionerUserId": "000020e6-0000-0000-0000-000000000000"
}
```

