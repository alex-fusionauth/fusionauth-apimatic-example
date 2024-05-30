
# Refresh Token Response

API response for retrieving Refresh Tokens

## Structure

`RefreshTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refreshToken` | [`RefreshToken \| undefined`](../../doc/models/refresh-token.md) | Optional | Models a JWT Refresh Token. |
| `refreshTokens` | [`RefreshToken[] \| undefined`](../../doc/models/refresh-token.md) | Optional | - |

## Example (as JSON)

```json
{
  "refreshToken": {
    "applicationId": "000006ba-0000-0000-0000-000000000000",
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
    "id": "000024a6-0000-0000-0000-000000000000",
    "insertInstant": 0,
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
  },
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
    },
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
    },
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
  ]
}
```

