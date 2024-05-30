
# API Key Response

Authentication key response object.

## Structure

`APIKeyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | [`APIKey \| undefined`](../../doc/models/api-key.md) | Optional | domain POJO to represent AuthenticationKey |

## Example (as JSON)

```json
{
  "apiKey": {
    "id": "000017de-0000-0000-0000-000000000000",
    "insertInstant": 56,
    "ipAccessControlListId": "000010f0-0000-0000-0000-000000000000",
    "key": "key0",
    "keyManager": false
  }
}
```

