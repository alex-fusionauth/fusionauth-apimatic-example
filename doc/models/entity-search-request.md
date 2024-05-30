
# Entity Search Request

Search request for entities

## Structure

`EntitySearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`EntitySearchCriteria \| undefined`](../../doc/models/entity-search-criteria.md) | Optional | This class is the entity query. It provides a build pattern as well as public fields for use on forms and in actions. |

## Example (as JSON)

```json
{
  "search": {
    "accurateTotal": false,
    "ids": [
      "00001c91-0000-0000-0000-000000000000",
      "00001c92-0000-0000-0000-000000000000"
    ],
    "nextResults": "nextResults2",
    "query": "query2",
    "queryString": "queryString6"
  }
}
```

