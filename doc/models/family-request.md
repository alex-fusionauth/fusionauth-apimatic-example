
# Family Request

API request for managing families and members.

## Structure

`FamilyRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `familyMember` | [`FamilyMember \| undefined`](../../doc/models/family-member.md) | Optional | Models a single family member. |

## Example (as JSON)

```json
{
  "familyMember": {
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
    "insertInstant": 42,
    "lastUpdateInstant": 100,
    "owner": false,
    "role": "Child"
  }
}
```

