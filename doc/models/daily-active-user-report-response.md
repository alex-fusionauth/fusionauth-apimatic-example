
# Daily Active User Report Response

Response for the daily active user report.

## Structure

`DailyActiveUserReportResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dailyActiveUsers` | [`Count[] \| undefined`](../../doc/models/count.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "dailyActiveUsers": [
    {
      "count": 180,
      "interval": 148
    },
    {
      "count": 180,
      "interval": 148
    }
  ],
  "total": 58
}
```

