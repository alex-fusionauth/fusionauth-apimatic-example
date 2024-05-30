
# User Delete Response

User API bulk response object.

## Structure

`UserDeleteResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dryRun` | `boolean \| undefined` | Optional | - |
| `hardDelete` | `boolean \| undefined` | Optional | - |
| `total` | `number \| undefined` | Optional | - |
| `userIds` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "dryRun": false,
  "hardDelete": false,
  "total": 66,
  "userIds": [
    "00001b8d-0000-0000-0000-000000000000"
  ]
}
```

