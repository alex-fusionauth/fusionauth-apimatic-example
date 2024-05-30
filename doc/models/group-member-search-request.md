
# Group Member Search Request

Search request for Group Members.

## Structure

`GroupMemberSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`GroupMemberSearchCriteria \| undefined`](../../doc/models/group-member-search-criteria.md) | Optional | Search criteria for Group Members |

## Example (as JSON)

```json
{
  "search": {
    "groupId": "00001662-0000-0000-0000-000000000000",
    "tenantId": "00001246-0000-0000-0000-000000000000",
    "userId": "000025a0-0000-0000-0000-000000000000",
    "numberOfResults": 180,
    "orderBy": "orderBy2"
  }
}
```

