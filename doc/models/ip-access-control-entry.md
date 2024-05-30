
# IP Access Control Entry

## Structure

`IPAccessControlEntry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`IPAccessControlEntryActionEnum \| undefined`](../../doc/models/ip-access-control-entry-action-enum.md) | Optional | - |
| `endIPAddress` | `string \| undefined` | Optional | - |
| `startIPAddress` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "action": "Allow",
  "endIPAddress": "endIPAddress2",
  "startIPAddress": "startIPAddress6"
}
```

