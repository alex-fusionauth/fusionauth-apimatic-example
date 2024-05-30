
# Family Response

API response for managing families and members.

## Structure

`FamilyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `families` | [`Family[] \| undefined`](../../doc/models/family.md) | Optional | - |
| `family` | [`Family \| undefined`](../../doc/models/family.md) | Optional | Models a family grouping of users. |

## Example (as JSON)

```json
{
  "families": [
    {
      "members": [
        {
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
          "insertInstant": 38,
          "lastUpdateInstant": 96,
          "owner": false,
          "role": "Adult"
        },
        {
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
          "insertInstant": 38,
          "lastUpdateInstant": 96,
          "owner": false,
          "role": "Adult"
        }
      ],
      "id": "00002436-0000-0000-0000-000000000000",
      "insertInstant": 144,
      "lastUpdateInstant": 54
    }
  ],
  "family": {
    "members": [
      {
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
        "insertInstant": 38,
        "lastUpdateInstant": 96,
        "owner": false,
        "role": "Adult"
      },
      {
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
        "insertInstant": 38,
        "lastUpdateInstant": 96,
        "owner": false,
        "role": "Adult"
      }
    ],
    "id": "0000205a-0000-0000-0000-000000000000",
    "insertInstant": 228,
    "lastUpdateInstant": 30
  }
}
```

