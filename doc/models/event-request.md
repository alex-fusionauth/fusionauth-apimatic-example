
# Event Request

Container for the event information. This is the JSON that is sent from FusionAuth to webhooks.

## Structure

`EventRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `event` | [`BaseEvent \| undefined`](../../doc/models/base-event.md) | Optional | Base-class for all FusionAuth events. |

## Example (as JSON)

```json
{
  "event": {
    "createInstant": 102,
    "id": "000022e2-0000-0000-0000-000000000000",
    "info": {
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
      "deviceDescription": "deviceDescription4",
      "deviceName": "deviceName0",
      "deviceType": "deviceType4",
      "ipAddress": "ipAddress0"
    },
    "tenantId": "00000c04-0000-0000-0000-000000000000",
    "type": "AuditLogCreate"
  }
}
```

