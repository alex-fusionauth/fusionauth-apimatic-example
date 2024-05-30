
# User

The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc.

## Structure

`User`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `preferredLanguages` | `string[] \| undefined` | Optional | - |
| `active` | `boolean \| undefined` | Optional | - |
| `birthDate` | `string \| undefined` | Optional | A date without a time-zone in the ISO-8601 calendar system, such as 2007-12-03.<br>**Constraints**: *Pattern*: `^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$` |
| `cleanSpeakId` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `expiry` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `firstName` | `string \| undefined` | Optional | - |
| `fullName` | `string \| undefined` | Optional | - |
| `imageUrl` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastName` | `string \| undefined` | Optional | - |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `middleName` | `string \| undefined` | Optional | - |
| `mobilePhone` | `string \| undefined` | Optional | - |
| `parentEmail` | `string \| undefined` | Optional | - |
| `tenantId` | `string \| undefined` | Optional | - |
| `timezone` | `string \| undefined` | Optional | Timezone Identifier<br>**Constraints**: *Pattern*: `^w+/w+$` |
| `twoFactor` | [`UserTwoFactorConfiguration \| undefined`](../../doc/models/user-two-factor-configuration.md) | Optional | - |
| `memberships` | [`GroupMember[] \| undefined`](../../doc/models/group-member.md) | Optional | - |
| `registrations` | [`UserRegistration[] \| undefined`](../../doc/models/user-registration.md) | Optional | - |
| `breachedPasswordLastCheckedInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `breachedPasswordStatus` | [`BreachedPasswordStatusEnum \| undefined`](../../doc/models/breached-password-status-enum.md) | Optional | - |
| `connectorId` | `string \| undefined` | Optional | - |
| `encryptionScheme` | `string \| undefined` | Optional | - |
| `factor` | `number \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `lastLoginInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `password` | `string \| undefined` | Optional | - |
| `passwordChangeReason` | [`ChangePasswordReasonEnum \| undefined`](../../doc/models/change-password-reason-enum.md) | Optional | - |
| `passwordChangeRequired` | `boolean \| undefined` | Optional | - |
| `passwordLastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `salt` | `string \| undefined` | Optional | - |
| `uniqueUsername` | `string \| undefined` | Optional | - |
| `username` | `string \| undefined` | Optional | - |
| `usernameStatus` | [`ContentStatusEnum \| undefined`](../../doc/models/content-status-enum.md) | Optional | Status for content like usernames, profile attributes, etc. |
| `verified` | `boolean \| undefined` | Optional | - |
| `verifiedInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |

## Example (as JSON)

```json
{
  "birthDate": "2007-12-03",
  "expiry": 1659380719000,
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "breachedPasswordLastCheckedInstant": 1659380719000,
  "lastLoginInstant": 1659380719000,
  "passwordLastUpdateInstant": 1659380719000,
  "verifiedInstant": 1659380719000,
  "preferredLanguages": [
    "preferredLanguages0"
  ],
  "active": false,
  "cleanSpeakId": "00000eac-0000-0000-0000-000000000000",
  "data": {
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

