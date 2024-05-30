
# User Comment

A log for an event that happened to a User.

## Structure

`UserComment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `comment` | `string \| undefined` | Optional | - |
| `commenterId` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `userId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "comment": "comment4",
  "commenterId": "00001da6-0000-0000-0000-000000000000",
  "id": "00000438-0000-0000-0000-000000000000",
  "userId": "000000b4-0000-0000-0000-000000000000"
}
```

