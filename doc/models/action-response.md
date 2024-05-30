
# Action Response

The user action response object.

## Structure

`ActionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`UserActionLog \| undefined`](../../doc/models/user-action-log.md) | Optional | A log for an action that was taken on a User. |
| `actions` | [`UserActionLog[] \| undefined`](../../doc/models/user-action-log.md) | Optional | - |

## Example (as JSON)

```json
{
  "action": {
    "actioneeUserId": "0000176c-0000-0000-0000-000000000000",
    "actionerUserId": "00000b38-0000-0000-0000-000000000000",
    "applicationIds": [
      "00001d45-0000-0000-0000-000000000000",
      "00001d44-0000-0000-0000-000000000000"
    ],
    "comment": "comment6",
    "emailUserOnEnd": false
  },
  "actions": [
    {
      "actioneeUserId": "00001ea0-0000-0000-0000-000000000000",
      "actionerUserId": "00000404-0000-0000-0000-000000000000",
      "applicationIds": [
        "00000729-0000-0000-0000-000000000000"
      ],
      "comment": "comment2",
      "emailUserOnEnd": false
    }
  ]
}
```

