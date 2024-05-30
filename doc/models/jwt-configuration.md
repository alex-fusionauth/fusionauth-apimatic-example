
# JWT Configuration

JWT Configuration. A JWT Configuration for an Application may not be active if it is using the global configuration, the configuration  may be <code>enabled = false<code>.

## Structure

`JWTConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessTokenKeyId` | `string \| undefined` | Optional | - |
| `idTokenKeyId` | `string \| undefined` | Optional | - |
| `refreshTokenExpirationPolicy` | [`RefreshTokenExpirationPolicyEnum \| undefined`](../../doc/models/refresh-token-expiration-policy-enum.md) | Optional | - |
| `refreshTokenRevocationPolicy` | [`RefreshTokenRevocationPolicy \| undefined`](../../doc/models/refresh-token-revocation-policy.md) | Optional | - |
| `refreshTokenSlidingWindowConfiguration` | [`RefreshTokenSlidingWindowConfiguration \| undefined`](../../doc/models/refresh-token-sliding-window-configuration.md) | Optional | - |
| `refreshTokenTimeToLiveInMinutes` | `number \| undefined` | Optional | - |
| `refreshTokenUsagePolicy` | [`RefreshTokenUsagePolicyEnum \| undefined`](../../doc/models/refresh-token-usage-policy-enum.md) | Optional | - |
| `timeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "accessTokenKeyId": "00001d94-0000-0000-0000-000000000000",
  "idTokenKeyId": "000003e4-0000-0000-0000-000000000000",
  "refreshTokenExpirationPolicy": "SlidingWindow",
  "refreshTokenRevocationPolicy": {
    "onLoginPrevented": false,
    "onMultiFactorEnable": false,
    "onPasswordChanged": false
  },
  "refreshTokenSlidingWindowConfiguration": {
    "maximumTimeToLiveInMinutes": 234
  }
}
```

