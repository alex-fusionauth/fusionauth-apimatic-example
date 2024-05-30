
# Group Search Request

Search request for Groups.

## Structure

`GroupSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`GroupSearchCriteria \| undefined`](../../doc/models/group-search-criteria.md) | Optional | Search criteria for Groups |

## Example (as JSON)

```json
{
  "search": {
    "name": "name2",
    "tenantId": "00001246-0000-0000-0000-000000000000",
    "numberOfResults": 180,
    "orderBy": "orderBy2",
    "startRow": 114
  }
}
```

