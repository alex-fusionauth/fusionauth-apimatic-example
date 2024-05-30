
# JWKS Response

## Structure

`JWKSResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keys` | [`JSONWebKey[] \| undefined`](../../doc/models/json-web-key.md) | Optional | - |

## Example (as JSON)

```json
{
  "keys": [
    {
      "alg": "PS512",
      "crv": "crv6",
      "d": "d4",
      "dp": "dp2",
      "dq": "dq8"
    }
  ]
}
```

