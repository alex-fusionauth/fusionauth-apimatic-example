
# Connector Response

## Structure

`ConnectorResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connector` | [`BaseConnectorConfiguration \| undefined`](../../doc/models/base-connector-configuration.md) | Optional | Do not require a setter for 'type', it is defined by the concrete class and is not mutable |
| `connectors` | [`BaseConnectorConfiguration[] \| undefined`](../../doc/models/base-connector-configuration.md) | Optional | - |

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
  },
  "connectors": [
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        },
        "key2": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "debug": false,
      "id": "0000213c-0000-0000-0000-000000000000",
      "insertInstant": 214,
      "lastUpdateInstant": 16
    },
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        },
        "key2": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "debug": false,
      "id": "0000213c-0000-0000-0000-000000000000",
      "insertInstant": 214,
      "lastUpdateInstant": 16
    }
  ]
}
```

