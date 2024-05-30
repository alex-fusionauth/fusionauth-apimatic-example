
# SAM Lv 2 Application Configuration

## Structure

`SAMLv2ApplicationConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `buttonImageURL` | `string \| undefined` | Optional | - |
| `buttonText` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `createRegistration` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "buttonImageURL": "buttonImageURL2",
  "buttonText": "buttonText6",
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "createRegistration": false
}
```

