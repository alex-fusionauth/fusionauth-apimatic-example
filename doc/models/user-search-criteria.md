
# User Search Criteria

This class is the user query. It provides a build pattern as well as public fields for use on forms and in actions.

## Structure

`UserSearchCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accurateTotal` | `boolean \| undefined` | Optional | - |
| `ids` | `string[] \| undefined` | Optional | - |
| `nextResults` | `string \| undefined` | Optional | - |
| `query` | `string \| undefined` | Optional | - |
| `queryString` | `string \| undefined` | Optional | - |
| `sortFields` | [`SortField[] \| undefined`](../../doc/models/sort-field.md) | Optional | - |

## Example (as JSON)

```json
{
  "accurateTotal": false,
  "ids": [
    "00000edb-0000-0000-0000-000000000000"
  ],
  "nextResults": "nextResults2",
  "query": "query2",
  "queryString": "queryString6"
}
```

