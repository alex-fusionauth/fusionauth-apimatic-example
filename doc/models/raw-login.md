
# Raw Login

Raw login information for each time a user logs into an application.

## Structure

`RawLogin`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `instant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `ipAddress` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "instant": 1659380719000,
  "applicationId": "00000ca2-0000-0000-0000-000000000000",
  "ipAddress": "ipAddress4",
  "userId": "0000270a-0000-0000-0000-000000000000"
}
```

