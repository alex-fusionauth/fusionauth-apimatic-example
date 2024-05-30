
# Twitter Application Configuration

## Structure

`TwitterApplicationConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `buttonText` | `string \| undefined` | Optional | - |
| `consumerKey` | `string \| undefined` | Optional | - |
| `consumerSecret` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `createRegistration` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "buttonText": "buttonText2",
  "consumerKey": "consumerKey0",
  "consumerSecret": "consumerSecret6",
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    },
    "key2": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "createRegistration": false
}
```

