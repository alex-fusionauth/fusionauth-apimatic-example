
# Passwordless Login Request

## Structure

`PasswordlessLoginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | - |
| `twoFactorTrustId` | `string \| undefined` | Optional | - |
| `applicationId` | `string \| undefined` | Optional | - |
| `ipAddress` | `string \| undefined` | Optional | - |
| `metaData` | [`MetaData \| undefined`](../../doc/models/meta-data.md) | Optional | - |
| `newDevice` | `boolean \| undefined` | Optional | - |
| `noJWT` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "code": "code6",
  "twoFactorTrustId": "twoFactorTrustId8",
  "applicationId": "000009ae-0000-0000-0000-000000000000",
  "ipAddress": "ipAddress8",
  "metaData": {
    "data": {
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
    },
    "device": {
      "description": "description6",
      "lastAccessedAddress": "lastAccessedAddress4",
      "lastAccessedInstant": 156,
      "name": "name6",
      "type": "type4"
    },
    "scopes": [
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
    ]
  }
}
```

