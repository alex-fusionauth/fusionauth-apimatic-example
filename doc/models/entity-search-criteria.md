
# Entity Search Criteria

This class is the entity query. It provides a build pattern as well as public fields for use on forms and in actions.

## Structure

`EntitySearchCriteria`

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
    "00000cb9-0000-0000-0000-000000000000"
  ],
  "nextResults": "nextResults6",
  "query": "query6",
  "queryString": "queryString0"
}
```

