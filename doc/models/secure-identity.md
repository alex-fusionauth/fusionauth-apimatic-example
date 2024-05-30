
# Secure Identity

## Structure

`SecureIdentity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
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
  "breachedPasswordLastCheckedInstant": 1659380719000,
  "lastLoginInstant": 1659380719000,
  "passwordLastUpdateInstant": 1659380719000,
  "verifiedInstant": 1659380719000,
  "breachedPasswordStatus": "PasswordOnly",
  "connectorId": "000023e4-0000-0000-0000-000000000000",
  "encryptionScheme": "encryptionScheme0",
  "factor": 208
}
```

