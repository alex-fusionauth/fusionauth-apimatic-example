
# System Trusted Proxy Configuration

## Structure

`SystemTrustedProxyConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `trustPolicy` | [`SystemTrustedProxyConfigurationPolicyEnum \| undefined`](../../doc/models/system-trusted-proxy-configuration-policy-enum.md) | Optional | - |
| `trusted` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "trustPolicy": "All",
  "trusted": [
    "trusted2",
    "trusted3"
  ]
}
```

