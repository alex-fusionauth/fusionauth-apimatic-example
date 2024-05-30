
# Application Search Criteria

Search criteria for Applications

## Structure

`ApplicationSearchCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `state` | [`ObjectStateEnum \| undefined`](../../doc/models/object-state-enum.md) | Optional | - |
| `tenantId` | `string \| undefined` | Optional | - |
| `numberOfResults` | `number \| undefined` | Optional | - |
| `orderBy` | `string \| undefined` | Optional | - |
| `startRow` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name0",
  "state": "PendingDelete",
  "tenantId": "000001fa-0000-0000-0000-000000000000",
  "numberOfResults": 104,
  "orderBy": "orderBy4"
}
```

