
# Identity Provider Search Criteria

Search criteria for Identity Providers.

## Structure

`IdentityProviderSearchCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `type` | [`IdentityProviderTypeEnum \| undefined`](../../doc/models/identity-provider-type-enum.md) | Optional | - |
| `numberOfResults` | `number \| undefined` | Optional | - |
| `orderBy` | `string \| undefined` | Optional | - |
| `startRow` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "applicationId": "00002042-0000-0000-0000-000000000000",
  "name": "name8",
  "type": "Apple",
  "numberOfResults": 98,
  "orderBy": "orderBy6"
}
```

