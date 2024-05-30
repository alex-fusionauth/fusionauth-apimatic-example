
# JWT Vend Request

## Structure

`JWTVendRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `claims` | `Record<string, unknown> \| undefined` | Optional | - |
| `keyId` | `string \| undefined` | Optional | - |
| `timeToLiveInSeconds` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "claims": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "keyId": "00001ab6-0000-0000-0000-000000000000",
  "timeToLiveInSeconds": 20
}
```

