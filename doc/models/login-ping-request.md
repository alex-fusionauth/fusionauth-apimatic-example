
# Login Ping Request

Login Ping API request object.

## Structure

`LoginPingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Optional | - |
| `applicationId` | `string \| undefined` | Optional | - |
| `ipAddress` | `string \| undefined` | Optional | - |
| `metaData` | [`MetaData \| undefined`](../../doc/models/meta-data.md) | Optional | - |
| `newDevice` | `boolean \| undefined` | Optional | - |
| `noJWT` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "userId": "0000052e-0000-0000-0000-000000000000",
  "applicationId": "000011d6-0000-0000-0000-000000000000",
  "ipAddress": "ipAddress6",
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
  },
  "newDevice": false
}
```

