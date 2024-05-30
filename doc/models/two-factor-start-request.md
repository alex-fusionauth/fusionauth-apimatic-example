
# Two Factor Start Request

## Structure

`TwoFactorStartRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `loginId` | `string \| undefined` | Optional | - |
| `state` | `Record<string, unknown> \| undefined` | Optional | - |
| `trustChallenge` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "applicationId": "00001266-0000-0000-0000-000000000000",
  "code": "code8",
  "loginId": "loginId4",
  "state": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "trustChallenge": "trustChallenge4"
}
```

