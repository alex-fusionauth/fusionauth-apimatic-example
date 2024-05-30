
# API Key Request

Authentication key request object.

## Structure

`APIKeyRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | [`APIKey \| undefined`](../../doc/models/api-key.md) | Optional | domain POJO to represent AuthenticationKey |
| `sourceKeyId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "apiKey": {
    "id": "000017de-0000-0000-0000-000000000000",
    "insertInstant": 56,
    "ipAccessControlListId": "000010f0-0000-0000-0000-000000000000",
    "key": "key0",
    "keyManager": false
  },
  "sourceKeyId": "00001c90-0000-0000-0000-000000000000"
}
```

