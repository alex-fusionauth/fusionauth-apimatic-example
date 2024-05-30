
# Kafka Configuration

## Structure

`KafkaConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultTopic` | `string \| undefined` | Optional | - |
| `producer` | `Record<string, string> \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "defaultTopic": "defaultTopic6",
  "producer": {
    "key0": "producer9",
    "key1": "producer0",
    "key2": "producer1"
  },
  "enabled": false
}
```

