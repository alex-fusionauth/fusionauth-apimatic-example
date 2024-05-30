
# Event Configuration

## Structure

`EventConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `events` | [`Record<string, EventConfigurationData> \| undefined`](../../doc/models/event-configuration-data.md) | Optional | - |

## Example (as JSON)

```json
{
  "events": {
    "key0": {
      "transactionType": "Any",
      "enabled": false
    },
    "key1": {
      "transactionType": "Any",
      "enabled": false
    }
  }
}
```

