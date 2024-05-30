
# Family

Models a family grouping of users.

## Structure

`Family`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `members` | [`FamilyMember[] \| undefined`](../../doc/models/family-member.md) | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "members": [
    {
      "data": {
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
      },
      "insertInstant": 38,
      "lastUpdateInstant": 96,
      "owner": false,
      "role": "Adult"
    }
  ],
  "id": "00001dd4-0000-0000-0000-000000000000"
}
```

