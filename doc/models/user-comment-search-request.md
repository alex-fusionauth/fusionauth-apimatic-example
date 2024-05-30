
# User Comment Search Request

Search request for user comments

## Structure

`UserCommentSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`UserCommentSearchCriteria \| undefined`](../../doc/models/user-comment-search-criteria.md) | Optional | Search criteria for user comments. |

## Example (as JSON)

```json
{
  "search": {
    "comment": "comment6",
    "commenterId": "00001b82-0000-0000-0000-000000000000",
    "tenantId": "00001246-0000-0000-0000-000000000000",
    "userId": "000025a0-0000-0000-0000-000000000000",
    "numberOfResults": 180
  }
}
```

