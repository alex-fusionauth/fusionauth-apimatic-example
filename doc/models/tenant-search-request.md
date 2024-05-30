
# Tenant Search Request

Search request for Tenants

## Structure

`TenantSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`TenantSearchCriteria \| undefined`](../../doc/models/tenant-search-criteria.md) | Optional | Search criteria for Tenants |

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

