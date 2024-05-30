
# Application O Auth Scope

A custom OAuth scope for a specific application.

## Structure

`ApplicationOAuthScope`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `defaultConsentDetail` | `string \| undefined` | Optional | - |
| `defaultConsentMessage` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |
| `required` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "applicationId": "00001852-0000-0000-0000-000000000000",
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "defaultConsentDetail": "defaultConsentDetail0",
  "defaultConsentMessage": "defaultConsentMessage8",
  "description": "description6"
}
```

