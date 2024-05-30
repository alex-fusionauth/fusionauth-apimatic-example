
# Theme

## Structure

`Theme`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `defaultMessages` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `localizedMessages` | `unknown \| undefined` | Optional | Models a set of localized Strings that can be stored as JSON. |
| `name` | `string \| undefined` | Optional | - |
| `stylesheet` | `string \| undefined` | Optional | - |
| `templates` | [`Templates \| undefined`](../../doc/models/templates.md) | Optional | - |

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
  "defaultMessages": "defaultMessages0",
  "id": "00000cfe-0000-0000-0000-000000000000"
}
```

