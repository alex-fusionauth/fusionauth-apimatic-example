
# IP Access Control List

## Structure

`IPAccessControlList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `entries` | [`IPAccessControlEntry[] \| undefined`](../../doc/models/ip-access-control-entry.md) | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
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
  "entries": [
    {
      "action": "Allow",
      "endIPAddress": "endIPAddress0",
      "startIPAddress": "startIPAddress6"
    },
    {
      "action": "Allow",
      "endIPAddress": "endIPAddress0",
      "startIPAddress": "startIPAddress6"
    }
  ],
  "id": "00001426-0000-0000-0000-000000000000"
}
```

