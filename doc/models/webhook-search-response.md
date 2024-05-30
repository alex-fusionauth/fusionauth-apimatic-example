
# Webhook Search Response

Webhook search response

## Structure

`WebhookSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `total` | `bigint \| undefined` | Optional | - |
| `webhooks` | [`Webhook[] \| undefined`](../../doc/models/webhook.md) | Optional | - |

## Example (as JSON)

```json
{
  "total": 168,
  "webhooks": [
    {
      "connectTimeout": 56,
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "description": "description4",
      "eventsEnabled": {
        "key0": false,
        "key1": true
      },
      "global": false
    }
  ]
}
```

