
# Registration Report Response

Response for the registration report.

## Structure

`RegistrationReportResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hourlyCounts` | [`Count[] \| undefined`](../../doc/models/count.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "hourlyCounts": [
    {
      "count": 86,
      "interval": 138
    },
    {
      "count": 86,
      "interval": 138
    },
    {
      "count": 86,
      "interval": 138
    }
  ],
  "total": 14
}
```

