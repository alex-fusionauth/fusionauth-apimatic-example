
# User Action Request

User Action API request object.

## Structure

`UserActionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userAction` | [`UserAction \| undefined`](../../doc/models/user-action.md) | Optional | An action that can be executed on a user (discipline or reward potentially). |

## Example (as JSON)

```json
{
  "userAction": {
    "active": false,
    "cancelEmailTemplateId": "00001356-0000-0000-0000-000000000000",
    "endEmailTemplateId": "00000b46-0000-0000-0000-000000000000",
    "id": "00000072-0000-0000-0000-000000000000",
    "includeEmailInEventJSON": false
  }
}
```

