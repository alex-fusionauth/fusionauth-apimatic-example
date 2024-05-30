
# Clean Speak Configuration

CleanSpeak configuration at the system and application level.

## Structure

`CleanSpeakConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string \| undefined` | Optional | - |
| `applicationIds` | `string[] \| undefined` | Optional | - |
| `url` | `string \| undefined` | Optional | - |
| `usernameModeration` | [`UsernameModeration \| undefined`](../../doc/models/username-moderation.md) | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "apiKey": "apiKey2",
  "applicationIds": [
    "000008f9-0000-0000-0000-000000000000"
  ],
  "url": "url6",
  "usernameModeration": {
    "applicationId": "000008ee-0000-0000-0000-000000000000",
    "enabled": false
  },
  "enabled": false
}
```

