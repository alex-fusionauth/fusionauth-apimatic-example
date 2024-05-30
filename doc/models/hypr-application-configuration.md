
# HYPR Application Configuration

## Structure

`HYPRApplicationConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `relyingPartyApplicationId` | `string \| undefined` | Optional | - |
| `relyingPartyURL` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `createRegistration` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "relyingPartyApplicationId": "relyingPartyApplicationId0",
  "relyingPartyURL": "relyingPartyURL0",
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

