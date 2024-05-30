
# Tenant Rate Limit Configuration

## Structure

`TenantRateLimitConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `failedLogin` | [`RateLimitedRequestConfiguration \| undefined`](../../doc/models/rate-limited-request-configuration.md) | Optional | - |
| `forgotPassword` | [`RateLimitedRequestConfiguration \| undefined`](../../doc/models/rate-limited-request-configuration.md) | Optional | - |
| `sendEmailVerification` | [`RateLimitedRequestConfiguration \| undefined`](../../doc/models/rate-limited-request-configuration.md) | Optional | - |
| `sendPasswordless` | [`RateLimitedRequestConfiguration \| undefined`](../../doc/models/rate-limited-request-configuration.md) | Optional | - |
| `sendRegistrationVerification` | [`RateLimitedRequestConfiguration \| undefined`](../../doc/models/rate-limited-request-configuration.md) | Optional | - |
| `sendTwoFactor` | [`RateLimitedRequestConfiguration \| undefined`](../../doc/models/rate-limited-request-configuration.md) | Optional | - |

## Example (as JSON)

```json
{
  "failedLogin": {
    "limit": 254,
    "timePeriodInSeconds": 194,
    "enabled": false
  },
  "forgotPassword": {
    "limit": 66,
    "timePeriodInSeconds": 126,
    "enabled": false
  },
  "sendEmailVerification": {
    "limit": 126,
    "timePeriodInSeconds": 62,
    "enabled": false
  },
  "sendPasswordless": {
    "limit": 212,
    "timePeriodInSeconds": 236,
    "enabled": false
  },
  "sendRegistrationVerification": {
    "limit": 194,
    "timePeriodInSeconds": 130,
    "enabled": false
  }
}
```

