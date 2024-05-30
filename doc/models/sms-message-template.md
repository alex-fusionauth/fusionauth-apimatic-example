
# SMS Message Template

## Structure

`SMSMessageTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultTemplate` | `string \| undefined` | Optional | - |
| `localizedTemplates` | `unknown \| undefined` | Optional | Models a set of localized Strings that can be stored as JSON. |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |
| `type` | [`MessageTypeEnum \| undefined`](../../doc/models/message-type-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "defaultTemplate": "defaultTemplate0",
  "localizedTemplates": {
    "key1": "val1",
    "key2": "val2"
  },
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "id": "00001d2a-0000-0000-0000-000000000000"
}
```

