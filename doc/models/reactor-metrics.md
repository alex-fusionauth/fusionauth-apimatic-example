
# Reactor Metrics

## Structure

`ReactorMetrics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `breachedPasswordMetrics` | [`Record<string, BreachedPasswordTenantMetric> \| undefined`](../../doc/models/breached-password-tenant-metric.md) | Optional | - |

## Example (as JSON)

```json
{
  "breachedPasswordMetrics": {
    "key0": {
      "actionRequired": 244,
      "matchedCommonPasswordCount": 68,
      "matchedExactCount": 56,
      "matchedPasswordCount": 64,
      "matchedSubAddressCount": 98
    }
  }
}
```

