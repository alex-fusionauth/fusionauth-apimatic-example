
# Passwordless Start Request

## Structure

`PasswordlessStartRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `loginId` | `string \| undefined` | Optional | - |
| `state` | `Record<string, unknown> \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "applicationId": "0000163c-0000-0000-0000-000000000000",
  "loginId": "loginId6",
  "state": {
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
  }
}
```

