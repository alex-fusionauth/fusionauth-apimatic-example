
# Change Password Response

Change password response object.

## Structure

`ChangePasswordResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `oneTimePassword` | `string \| undefined` | Optional | - |
| `state` | `Record<string, unknown> \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "oneTimePassword": "oneTimePassword8",
  "state": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

