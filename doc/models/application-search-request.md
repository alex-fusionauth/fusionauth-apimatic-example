
# Application Search Request

Search request for Applications

## Structure

`ApplicationSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`ApplicationSearchCriteria \| undefined`](../../doc/models/application-search-criteria.md) | Optional | Search criteria for Applications |
| `expand` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "search": {
    "name": "name2",
    "state": "Inactive",
    "tenantId": "00001246-0000-0000-0000-000000000000",
    "numberOfResults": 180,
    "orderBy": "orderBy2"
  },
  "expand": [
    "expand1"
  ]
}
```

