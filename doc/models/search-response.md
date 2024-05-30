
# Search Response

Search API response.

## Structure

`SearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `total` | `bigint \| undefined` | Optional | - |
| `nextResults` | `string \| undefined` | Optional | - |
| `users` | [`User[] \| undefined`](../../doc/models/user.md) | Optional | - |
| `expandable` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "total": 36,
  "nextResults": "nextResults8",
  "users": [
    {
      "preferredLanguages": [
        "preferredLanguages0",
        "preferredLanguages9"
      ],
      "active": false,
      "birthDate": "birthDate0",
      "cleanSpeakId": "0000205c-0000-0000-0000-000000000000",
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
      }
    },
    {
      "preferredLanguages": [
        "preferredLanguages0",
        "preferredLanguages9"
      ],
      "active": false,
      "birthDate": "birthDate0",
      "cleanSpeakId": "0000205c-0000-0000-0000-000000000000",
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
      }
    },
    {
      "preferredLanguages": [
        "preferredLanguages0",
        "preferredLanguages9"
      ],
      "active": false,
      "birthDate": "birthDate0",
      "cleanSpeakId": "0000205c-0000-0000-0000-000000000000",
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
      }
    }
  ],
  "expandable": [
    "expandable2"
  ]
}
```

