
# Login Prevented Response

The summary of the action that is preventing login to be returned on the login response.

## Structure

`LoginPreventedResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionId` | `string \| undefined` | Optional | - |
| `actionerUserId` | `string \| undefined` | Optional | - |
| `expiry` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `localizedName` | `string \| undefined` | Optional | - |
| `localizedOption` | `string \| undefined` | Optional | - |
| `localizedReason` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `option` | `string \| undefined` | Optional | - |
| `reason` | `string \| undefined` | Optional | - |
| `reasonCode` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "expiry": 1659380719000,
  "actionId": "00000d3a-0000-0000-0000-000000000000",
  "actionerUserId": "00001636-0000-0000-0000-000000000000",
  "localizedName": "localizedName0",
  "localizedOption": "localizedOption4"
}
```

