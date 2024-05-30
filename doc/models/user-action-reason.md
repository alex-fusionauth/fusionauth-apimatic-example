
# User Action Reason

Models action reasons.

## Structure

`UserActionReason`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `localizedTexts` | `unknown \| undefined` | Optional | Models a set of localized Strings that can be stored as JSON. |
| `text` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "code": "code4",
  "id": "00002360-0000-0000-0000-000000000000",
  "localizedTexts": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

