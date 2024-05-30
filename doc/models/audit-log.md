
# Audit Log

An audit log.

## Structure

`AuditLog`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `id` | `bigint \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `insertUser` | `string \| undefined` | Optional | - |
| `message` | `string \| undefined` | Optional | - |
| `newValue` | `unknown \| undefined` | Optional | - |
| `oldValue` | `unknown \| undefined` | Optional | - |
| `reason` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
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
  "id": 114,
  "insertUser": "insertUser6",
  "message": "message4"
}
```

