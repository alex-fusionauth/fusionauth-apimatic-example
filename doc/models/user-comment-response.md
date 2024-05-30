
# User Comment Response

User Comment Response

## Structure

`UserCommentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userComment` | [`UserComment \| undefined`](../../doc/models/user-comment.md) | Optional | A log for an event that happened to a User. |
| `userComments` | [`UserComment[] \| undefined`](../../doc/models/user-comment.md) | Optional | - |

## Example (as JSON)

```json
{
  "userComment": {
    "comment": "comment0",
    "commenterId": "00001758-0000-0000-0000-000000000000",
    "id": "000024fa-0000-0000-0000-000000000000",
    "insertInstant": 164,
    "userId": "00002176-0000-0000-0000-000000000000"
  },
  "userComments": [
    {
      "comment": "comment2",
      "commenterId": "00000338-0000-0000-0000-000000000000",
      "id": "000010da-0000-0000-0000-000000000000",
      "insertInstant": 68,
      "userId": "00000d56-0000-0000-0000-000000000000"
    },
    {
      "comment": "comment2",
      "commenterId": "00000338-0000-0000-0000-000000000000",
      "id": "000010da-0000-0000-0000-000000000000",
      "insertInstant": 68,
      "userId": "00000d56-0000-0000-0000-000000000000"
    }
  ]
}
```

