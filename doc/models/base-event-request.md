
# Base Event Request

Base class for requests that can contain event information. This event information is used when sending Webhooks or emails  during the transaction. The caller is responsible for ensuring that the event information is correct.

## Structure

`BaseEventRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "eventInfo": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "deviceDescription": "deviceDescription8",
    "deviceName": "deviceName2",
    "deviceType": "deviceType6",
    "ipAddress": "ipAddress2"
  }
}
```

