
# Integration Response

The Integration Response

## Structure

`IntegrationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `integrations` | [`Integrations \| undefined`](../../doc/models/integrations.md) | Optional | Available Integrations |

## Example (as JSON)

```json
{
  "integrations": {
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
}
```

