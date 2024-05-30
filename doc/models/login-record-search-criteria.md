
# Login Record Search Criteria

## Structure

`LoginRecordSearchCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `end` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `start` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `userId` | `string \| undefined` | Optional | - |
| `numberOfResults` | `number \| undefined` | Optional | - |
| `orderBy` | `string \| undefined` | Optional | - |
| `startRow` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "end": 1659380719000,
  "start": 1659380719000,
  "applicationId": "00000c22-0000-0000-0000-000000000000",
  "userId": "0000268a-0000-0000-0000-000000000000",
  "numberOfResults": 158
}
```

