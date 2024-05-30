
# Entity Grant Search Response

Search request for entity grants.

## Structure

`EntityGrantSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grants` | [`EntityGrant[] \| undefined`](../../doc/models/entity-grant.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "grants": [
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "entity": {
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
        "clientId": "clientId6",
        "clientSecret": "clientSecret4",
        "id": "00002276-0000-0000-0000-000000000000",
        "insertInstant": 224
      },
      "id": "00001068-0000-0000-0000-000000000000",
      "insertInstant": 226,
      "lastUpdateInstant": 28
    },
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "entity": {
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
        "clientId": "clientId6",
        "clientSecret": "clientSecret4",
        "id": "00002276-0000-0000-0000-000000000000",
        "insertInstant": 224
      },
      "id": "00001068-0000-0000-0000-000000000000",
      "insertInstant": 226,
      "lastUpdateInstant": 28
    },
    {
      "data": {
        "key0": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "entity": {
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
        "clientId": "clientId6",
        "clientSecret": "clientSecret4",
        "id": "00002276-0000-0000-0000-000000000000",
        "insertInstant": 224
      },
      "id": "00001068-0000-0000-0000-000000000000",
      "insertInstant": 226,
      "lastUpdateInstant": 28
    }
  ],
  "total": 66
}
```

