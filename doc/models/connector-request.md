
# Connector Request

## Structure

`ConnectorRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connector` | [`BaseConnectorConfiguration \| undefined`](../../doc/models/base-connector-configuration.md) | Optional | Do not require a setter for 'type', it is defined by the concrete class and is not mutable |

## Example (as JSON)

```json
{
  "connector": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "debug": false,
    "id": "0000095c-0000-0000-0000-000000000000",
    "insertInstant": 22,
    "lastUpdateInstant": 80
  }
}
```

