
# Monthly Active User Report Response

Response for the daily active user report.

## Structure

`MonthlyActiveUserReportResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monthlyActiveUsers` | [`Count[] \| undefined`](../../doc/models/count.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "monthlyActiveUsers": [
    {
      "count": 78,
      "interval": 146
    },
    {
      "count": 78,
      "interval": 146
    }
  ],
  "total": 68
}
```

