
# User Comment Search Response

User comment search response

## Structure

`UserCommentSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `total` | `bigint \| undefined` | Optional | - |
| `userComments` | [`UserComment[] \| undefined`](../../doc/models/user-comment.md) | Optional | - |

## Example (as JSON)

```json
{
  "total": 54,
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

