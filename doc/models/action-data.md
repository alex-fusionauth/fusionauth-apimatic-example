
# Action Data

## Structure

`ActionData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actioneeUserId` | `string \| undefined` | Optional | - |
| `actionerUserId` | `string \| undefined` | Optional | - |
| `applicationIds` | `string[] \| undefined` | Optional | - |
| `comment` | `string \| undefined` | Optional | - |
| `emailUser` | `boolean \| undefined` | Optional | - |
| `expiry` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `notifyUser` | `boolean \| undefined` | Optional | - |
| `option` | `string \| undefined` | Optional | - |
| `reasonId` | `string \| undefined` | Optional | - |
| `userActionId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "expiry": 1659380719000,
  "actioneeUserId": "0000050c-0000-0000-0000-000000000000",
  "actionerUserId": "00001d98-0000-0000-0000-000000000000",
  "applicationIds": [
    "00000653-0000-0000-0000-000000000000"
  ],
  "comment": "comment0",
  "emailUser": false
}
```

