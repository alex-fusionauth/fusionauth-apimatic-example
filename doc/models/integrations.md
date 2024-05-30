
# Integrations

Available Integrations

## Structure

`Integrations`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cleanspeak` | [`CleanSpeakConfiguration \| undefined`](../../doc/models/clean-speak-configuration.md) | Optional | CleanSpeak configuration at the system and application level. |
| `kafka` | [`KafkaConfiguration \| undefined`](../../doc/models/kafka-configuration.md) | Optional | - |

## Example (as JSON)

```json
{
  "cleanspeak": {
    "apiKey": "apiKey4",
    "applicationIds": [
      "00000f1f-0000-0000-0000-000000000000",
      "00000f20-0000-0000-0000-000000000000"
    ],
    "url": "url8",
    "usernameModeration": {
      "applicationId": "000008ee-0000-0000-0000-000000000000",
      "enabled": false
    },
    "enabled": false
  },
  "kafka": {
    "defaultTopic": "defaultTopic6",
    "producer": {
      "key0": "producer9",
      "key1": "producer0"
    },
    "enabled": false
  }
}
```

