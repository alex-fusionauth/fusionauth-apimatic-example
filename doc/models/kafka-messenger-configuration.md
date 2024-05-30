
# Kafka Messenger Configuration

## Structure

`KafkaMessengerConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultTopic` | `string \| undefined` | Optional | - |
| `producer` | `Record<string, string> \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `debug` | `boolean \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |
| `transport` | `string \| undefined` | Optional | - |
| `type` | [`MessengerTypeEnum \| undefined`](../../doc/models/messenger-type-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "defaultTopic": "defaultTopic2",
  "producer": {
    "key0": "producer3",
    "key1": "producer4"
  },
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "debug": false,
  "id": "0000143a-0000-0000-0000-000000000000"
}
```

