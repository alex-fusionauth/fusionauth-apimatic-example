
# User Delete Request

User API delete request object.

## Structure

`UserDeleteRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dryRun` | `boolean \| undefined` | Optional | - |
| `hardDelete` | `boolean \| undefined` | Optional | - |
| `limit` | `number \| undefined` | Optional | - |
| `query` | `string \| undefined` | Optional | - |
| `queryString` | `string \| undefined` | Optional | - |
| `userIds` | `string[] \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
  "dryRun": false,
  "hardDelete": false,
  "limit": 40,
  "query": "query4",
  "queryString": "queryString8"
}
```

