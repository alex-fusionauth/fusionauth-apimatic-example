
# User Action Log

A log for an action that was taken on a User.

## Structure

`UserActionLog`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actioneeUserId` | `string \| undefined` | Optional | - |
| `actionerUserId` | `string \| undefined` | Optional | - |
| `applicationIds` | `string[] \| undefined` | Optional | - |
| `comment` | `string \| undefined` | Optional | - |
| `emailUserOnEnd` | `boolean \| undefined` | Optional | - |
| `endEventSent` | `boolean \| undefined` | Optional | - |
| `expiry` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `history` | [`LogHistory \| undefined`](../../doc/models/log-history.md) | Optional | A historical state of a user log event. Since events can be modified, this stores the historical state. |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `localizedName` | `string \| undefined` | Optional | - |
| `localizedOption` | `string \| undefined` | Optional | - |
| `localizedReason` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `notifyUserOnEnd` | `boolean \| undefined` | Optional | - |
| `option` | `string \| undefined` | Optional | - |
| `reason` | `string \| undefined` | Optional | - |
| `reasonCode` | `string \| undefined` | Optional | - |
| `userActionId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "expiry": 1659380719000,
  "insertInstant": 1659380719000,
  "actioneeUserId": "000023e2-0000-0000-0000-000000000000",
  "actionerUserId": "000025d2-0000-0000-0000-000000000000",
  "applicationIds": [
    "00002529-0000-0000-0000-000000000000",
    "0000252a-0000-0000-0000-000000000000",
    "0000252b-0000-0000-0000-000000000000"
  ],
  "comment": "comment4",
  "emailUserOnEnd": false
}
```

