
# JSON Web Key

A JSON Web Key as defined by <a href="https:tools.ietf.orghtmlrfc7517#section-4">RFC 7517 JSON Web Key (JWK)  Section 4<a> and <a href="https:tools.ietf.orghtmlrfc7518">RFC 7518 JSON Web Algorithms (JWA)<a>.

## Structure

`JSONWebKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `alg` | [`AlgorithmEnum \| undefined`](../../doc/models/algorithm-enum.md) | Optional | Available JSON Web Algorithms (JWA) as described in RFC 7518 available for this JWT implementation. |
| `crv` | `string \| undefined` | Optional | - |
| `d` | `string \| undefined` | Optional | - |
| `dp` | `string \| undefined` | Optional | - |
| `dq` | `string \| undefined` | Optional | - |
| `e` | `string \| undefined` | Optional | - |
| `kid` | `string \| undefined` | Optional | - |
| `kty` | [`KeyTypeEnum \| undefined`](../../doc/models/key-type-enum.md) | Optional | - |
| `n` | `string \| undefined` | Optional | - |
| `other` | `Record<string, unknown> \| undefined` | Optional | - |
| `p` | `string \| undefined` | Optional | - |
| `q` | `string \| undefined` | Optional | - |
| `qi` | `string \| undefined` | Optional | - |
| `use` | `string \| undefined` | Optional | - |
| `x` | `string \| undefined` | Optional | - |
| `x5c` | `string[] \| undefined` | Optional | - |
| `x5t` | `string \| undefined` | Optional | - |
| `x5tS256` | `string \| undefined` | Optional | - |
| `y` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "alg": "HS256",
  "crv": "crv2",
  "d": "d2",
  "dp": "dp0",
  "dq": "dq0"
}
```

