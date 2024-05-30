
# Passwordless Send Request

## Structure

`PasswordlessSendRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `loginId` | `string \| undefined` | Optional | - |
| `state` | `Record<string, unknown> \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "applicationId": "00000492-0000-0000-0000-000000000000",
  "code": "code8",
  "loginId": "loginId4",
  "state": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

