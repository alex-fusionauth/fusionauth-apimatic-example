
# Identity Provider Search Request

Search request for Identity Providers

## Structure

`IdentityProviderSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`IdentityProviderSearchCriteria \| undefined`](../../doc/models/identity-provider-search-criteria.md) | Optional | Search criteria for Identity Providers. |

## Example (as JSON)

```json
{
  "search": {
    "applicationId": "00000b38-0000-0000-0000-000000000000",
    "name": "name2",
    "type": "SAMLv2IdPInitiated",
    "numberOfResults": 180,
    "orderBy": "orderBy2"
  }
}
```

