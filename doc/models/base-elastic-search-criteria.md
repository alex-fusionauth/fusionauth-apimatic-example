
# Base Elastic Search Criteria

## Structure

`BaseElasticSearchCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accurateTotal` | `boolean \| undefined` | Optional | - |
| `ids` | `string[] \| undefined` | Optional | - |
| `nextResults` | `string \| undefined` | Optional | - |
| `query` | `string \| undefined` | Optional | - |
| `queryString` | `string \| undefined` | Optional | - |
| `sortFields` | [`SortField[] \| undefined`](../../doc/models/sort-field.md) | Optional | - |
| `numberOfResults` | `number \| undefined` | Optional | - |
| `orderBy` | `string \| undefined` | Optional | - |
| `startRow` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "accurateTotal": false,
  "ids": [
    "00000f35-0000-0000-0000-000000000000"
  ],
  "nextResults": "nextResults2",
  "query": "query2",
  "queryString": "queryString6"
}
```

