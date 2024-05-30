
# Connector Policy

## Structure

`ConnectorPolicy`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connectorId` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `domains` | `unknown[] \| undefined` | Optional | **Constraints**: *Unique Items Required* |
| `migrate` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "connectorId": "00001586-0000-0000-0000-000000000000",
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
  "domains": [
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "migrate": false
}
```

