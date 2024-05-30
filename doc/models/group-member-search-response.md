
# Group Member Search Response

Search response for Group Members

## Structure

`GroupMemberSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `members` | [`GroupMember[] \| undefined`](../../doc/models/group-member.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
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
      "groupId": "00001116-0000-0000-0000-000000000000",
      "id": "000001ac-0000-0000-0000-000000000000",
      "insertInstant": 38,
      "userId": "00002538-0000-0000-0000-000000000000"
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
      "groupId": "00001116-0000-0000-0000-000000000000",
      "id": "000001ac-0000-0000-0000-000000000000",
      "insertInstant": 38,
      "userId": "00002538-0000-0000-0000-000000000000"
    }
  ],
  "total": 16
}
```

