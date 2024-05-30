
# Search Request

Search API request.

## Structure

`SearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`UserSearchCriteria \| undefined`](../../doc/models/user-search-criteria.md) | Optional | This class is the user query. It provides a build pattern as well as public fields for use on forms and in actions. |
| `expand` | `string[] \| undefined` | Optional | - |

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
  },
  "expand": [
    "expand1"
  ]
}
```

