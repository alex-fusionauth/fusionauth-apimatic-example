
# Web Authn Extensions Client Outputs

Contains extension output for requested extensions during a WebAuthn ceremony

## Structure

`WebAuthnExtensionsClientOutputs`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `credProps` | [`CredentialPropertiesOutput \| undefined`](../../doc/models/credential-properties-output.md) | Optional | Contains the output for the {@code credProps} extension |

## Example (as JSON)

```json
{
  "credProps": {
    "rk": false
  }
}
```

