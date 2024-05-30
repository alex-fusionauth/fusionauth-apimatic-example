
# User Action Reason Response

User Action Reason API response object.

## Structure

`UserActionReasonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActionReason` | [`UserActionReason \| undefined`](../../doc/models/user-action-reason.md) | Optional | Models action reasons. |
| `userActionReasons` | [`UserActionReason[] \| undefined`](../../doc/models/user-action-reason.md) | Optional | - |

## Example (as JSON)

```json
{
  "userActionReason": {
    "code": "code6",
    "id": "0000126e-0000-0000-0000-000000000000",
    "insertInstant": 232,
    "lastUpdateInstant": 34,
    "localizedTexts": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "userActionReasons": [
    {
      "code": "code8",
      "id": "000016f8-0000-0000-0000-000000000000",
      "insertInstant": 178,
      "lastUpdateInstant": 236,
      "localizedTexts": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    {
      "code": "code8",
      "id": "000016f8-0000-0000-0000-000000000000",
      "insertInstant": 178,
      "lastUpdateInstant": 236,
      "localizedTexts": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ]
}
```

