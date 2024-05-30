
# User Registration

User registration information for a single application.

## Structure

`UserRegistration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `preferredLanguages` | `string[] \| undefined` | Optional | - |
| `tokens` | `Record<string, string> \| undefined` | Optional | - |
| `applicationId` | `string \| undefined` | Optional | - |
| `authenticationToken` | `string \| undefined` | Optional | - |
| `cleanSpeakId` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastLoginInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `roles` | `unknown[] \| undefined` | Optional | **Constraints**: *Unique Items Required* |
| `timezone` | `string \| undefined` | Optional | Timezone Identifier<br>**Constraints**: *Pattern*: `^w+/w+$` |
| `username` | `string \| undefined` | Optional | - |
| `usernameStatus` | [`ContentStatusEnum \| undefined`](../../doc/models/content-status-enum.md) | Optional | Status for content like usernames, profile attributes, etc. |
| `verified` | `boolean \| undefined` | Optional | - |
| `verifiedInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastLoginInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "verifiedInstant": 1659380719000,
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
  "preferredLanguages": [
    "preferredLanguages8",
    "preferredLanguages7"
  ],
  "tokens": {
    "key0": "tokens1",
    "key1": "tokens2",
    "key2": "tokens3"
  },
  "applicationId": "000000c6-0000-0000-0000-000000000000",
  "authenticationToken": "authenticationToken8"
}
```

