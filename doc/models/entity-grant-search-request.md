
# Entity Grant Search Request

Search request for entity grants.

## Structure

`EntityGrantSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`EntityGrantSearchCriteria \| undefined`](../../doc/models/entity-grant-search-criteria.md) | Optional | Search criteria for entity grants. |

## Example (as JSON)

```json
{
  "search": {
    "entityId": "00001356-0000-0000-0000-000000000000",
    "name": "name2",
    "userId": "000025a0-0000-0000-0000-000000000000",
    "numberOfResults": 180,
    "orderBy": "orderBy2"
  }
}
```

