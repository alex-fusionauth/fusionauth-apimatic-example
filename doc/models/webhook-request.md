
# Webhook Request

Webhook API request object.

## Structure

`WebhookRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhook` | [`Webhook \| undefined`](../../doc/models/webhook.md) | Optional | A server where events are sent. This includes user action events and any other events sent by FusionAuth. |

## Example (as JSON)

```json
{
  "webhook": {
    "connectTimeout": 24,
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      },
      "key1": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "description": "description8",
    "eventsEnabled": {
      "key0": false,
      "key1": true,
      "key2": false
    },
    "global": false
  }
}
```

