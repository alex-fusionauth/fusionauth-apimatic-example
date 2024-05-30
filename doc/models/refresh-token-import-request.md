
# Refresh Token Import Request

Refresh Token Import request.

## Structure

`RefreshTokenImportRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refreshTokens` | [`RefreshToken[] \| undefined`](../../doc/models/refresh-token.md) | Optional | - |
| `validateDbConstraints` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "refreshTokens": [
    {
      "applicationId": "00000aea-0000-0000-0000-000000000000",
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        },
        "key1": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "id": "000001c6-0000-0000-0000-000000000000",
      "insertInstant": 112,
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
  ],
  "validateDbConstraints": false
}
```

