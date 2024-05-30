
# Totals Report Response

The response from the total report. This report stores the total numbers for each application.

## Structure

`TotalsReportResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationTotals` | [`Record<string, Totals> \| undefined`](../../doc/models/totals.md) | Optional | - |
| `globalRegistrations` | `bigint \| undefined` | Optional | - |
| `totalGlobalRegistrations` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "applicationTotals": {
    "key0": {
      "logins": 162,
      "registrations": 148,
      "totalRegistrations": 114
    },
    "key1": {
      "logins": 162,
      "registrations": 148,
      "totalRegistrations": 114
    },
    "key2": {
      "logins": 162,
      "registrations": 148,
      "totalRegistrations": 114
    }
  },
  "globalRegistrations": 148,
  "totalGlobalRegistrations": 92
}
```

