
# Meta Data

## Structure

`MetaData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `device` | [`DeviceInfo \| undefined`](../../doc/models/device-info.md) | Optional | - |
| `scopes` | `unknown[] \| undefined` | Optional | **Constraints**: *Unique Items Required* |

## Example (as JSON)

```json
{
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
  "device": {
    "description": "description6",
    "lastAccessedAddress": "lastAccessedAddress4",
    "lastAccessedInstant": 156,
    "name": "name6",
    "type": "type4"
  },
  "scopes": [
    {
      "key1": "val1",
      "key2": "val2"
    }
  ]
}
```

