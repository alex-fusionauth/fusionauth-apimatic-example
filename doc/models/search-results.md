
# Search Results

Search results.

## Structure

`SearchResults`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nextResults` | `string \| undefined` | Optional | - |
| `results` | `unknown[] \| undefined` | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |
| `totalEqualToActual` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "nextResults": "nextResults6",
  "results": [
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "total": 102,
  "totalEqualToActual": false
}
```

