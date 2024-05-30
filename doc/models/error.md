
# Error

Defines an error.

## Structure

`Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `message` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "code": "code2",
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "message": "message4"
}
```

