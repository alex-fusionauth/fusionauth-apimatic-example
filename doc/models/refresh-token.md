
# Refresh Token

Models a JWT Refresh Token.

## Structure

`RefreshToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `metaData` | [`MetaData \| undefined`](../../doc/models/meta-data.md) | Optional | - |
| `startInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `tenantId` | `string \| undefined` | Optional | - |
| `token` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "startInstant": 1659380719000,
  "applicationId": "00000c22-0000-0000-0000-000000000000",
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
  "id": "000002fe-0000-0000-0000-000000000000",
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

