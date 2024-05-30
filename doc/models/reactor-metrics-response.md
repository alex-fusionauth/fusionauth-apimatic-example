
# Reactor Metrics Response

## Structure

`ReactorMetricsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metrics` | [`ReactorMetrics \| undefined`](../../doc/models/reactor-metrics.md) | Optional | - |

## Example (as JSON)

```json
{
  "metrics": {
    "breachedPasswordMetrics": {
      "key0": {
        "actionRequired": 244,
        "matchedCommonPasswordCount": 68,
        "matchedExactCount": 56,
        "matchedPasswordCount": 64,
        "matchedSubAddressCount": 98
      },
      "key1": {
        "actionRequired": 244,
        "matchedCommonPasswordCount": 68,
        "matchedExactCount": 56,
        "matchedPasswordCount": 64,
        "matchedSubAddressCount": 98
      },
      "key2": {
        "actionRequired": 244,
        "matchedCommonPasswordCount": 68,
        "matchedExactCount": 56,
        "matchedPasswordCount": 64,
        "matchedSubAddressCount": 98
      }
    }
  }
}
```

