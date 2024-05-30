
# Send Request

## Structure

`SendRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `bccAddresses` | `string[] \| undefined` | Optional | - |
| `ccAddresses` | `string[] \| undefined` | Optional | - |
| `preferredLanguages` | `string[] \| undefined` | Optional | - |
| `requestData` | `Record<string, unknown> \| undefined` | Optional | - |
| `toAddresses` | [`EmailAddress[] \| undefined`](../../doc/models/email-address.md) | Optional | - |
| `userIds` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "applicationId": "00002554-0000-0000-0000-000000000000",
  "bccAddresses": [
    "bccAddresses5",
    "bccAddresses4"
  ],
  "ccAddresses": [
    "ccAddresses5"
  ],
  "preferredLanguages": [
    "preferredLanguages0",
    "preferredLanguages9"
  ],
  "requestData": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

