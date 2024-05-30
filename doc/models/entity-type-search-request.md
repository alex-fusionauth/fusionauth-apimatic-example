
# Entity Type Search Request

Search request for entity types.

## Structure

`EntityTypeSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`EntityTypeSearchCriteria \| undefined`](../../doc/models/entity-type-search-criteria.md) | Optional | Search criteria for entity types. |

## Example (as JSON)

```json
{
  "search": {
    "name": "name2",
    "numberOfResults": 180,
    "orderBy": "orderBy2",
    "startRow": 114
  }
}
```

