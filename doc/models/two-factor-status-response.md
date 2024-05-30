
# Two Factor Status Response

## Structure

`TwoFactorStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `trusts` | [`TwoFactorTrust[] \| undefined`](../../doc/models/two-factor-trust.md) | Optional | - |
| `twoFactorTrustId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "trusts": [
    {
      "applicationId": "00000640-0000-0000-0000-000000000000",
      "expiration": 30,
      "startInstant": 222
    },
    {
      "applicationId": "00000640-0000-0000-0000-000000000000",
      "expiration": 30,
      "startInstant": 222
    }
  ],
  "twoFactorTrustId": "twoFactorTrustId2"
}
```

