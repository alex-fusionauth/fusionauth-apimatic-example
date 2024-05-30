
# Log History

A historical state of a user log event. Since events can be modified, this stores the historical state.

## Structure

`LogHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `historyItems` | [`HistoryItem[] \| undefined`](../../doc/models/history-item.md) | Optional | - |

## Example (as JSON)

```json
{
  "historyItems": [
    {
      "actionerUserId": "00001434-0000-0000-0000-000000000000",
      "comment": "comment6",
      "createInstant": 78,
      "expiry": 42
    },
    {
      "actionerUserId": "00001434-0000-0000-0000-000000000000",
      "comment": "comment6",
      "createInstant": 78,
      "expiry": 42
    },
    {
      "actionerUserId": "00001434-0000-0000-0000-000000000000",
      "comment": "comment6",
      "createInstant": 78,
      "expiry": 42
    }
  ]
}
```

