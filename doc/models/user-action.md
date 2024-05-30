
# User Action

An action that can be executed on a user (discipline or reward potentially).

## Structure

`UserAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `active` | `boolean \| undefined` | Optional | - |
| `cancelEmailTemplateId` | `string \| undefined` | Optional | - |
| `endEmailTemplateId` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `includeEmailInEventJSON` | `boolean \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `localizedNames` | `unknown \| undefined` | Optional | Models a set of localized Strings that can be stored as JSON. |
| `modifyEmailTemplateId` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `options` | [`UserActionOption[] \| undefined`](../../doc/models/user-action-option.md) | Optional | - |
| `preventLogin` | `boolean \| undefined` | Optional | - |
| `sendEndEvent` | `boolean \| undefined` | Optional | - |
| `startEmailTemplateId` | `string \| undefined` | Optional | - |
| `temporal` | `boolean \| undefined` | Optional | - |
| `transactionType` | [`TransactionTypeEnum \| undefined`](../../doc/models/transaction-type-enum.md) | Optional | The transaction types for Webhooks and other event systems within FusionAuth. |
| `userEmailingEnabled` | `boolean \| undefined` | Optional | - |
| `userNotificationsEnabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "active": false,
  "cancelEmailTemplateId": "00001bc8-0000-0000-0000-000000000000",
  "endEmailTemplateId": "000013b8-0000-0000-0000-000000000000",
  "id": "000008e4-0000-0000-0000-000000000000",
  "includeEmailInEventJSON": false
}
```

