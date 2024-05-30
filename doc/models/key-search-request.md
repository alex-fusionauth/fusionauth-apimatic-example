
# Key Search Request

Search request for Keys

## Structure

`KeySearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`KeySearchCriteria \| undefined`](../../doc/models/key-search-criteria.md) | Optional | Search criteria for Keys |

## Example (as JSON)

```json
{
  "search": {
    "algorithm": "RS512",
    "name": "name2",
    "type": "HMAC",
    "numberOfResults": 180,
    "orderBy": "orderBy2"
  }
}
```

