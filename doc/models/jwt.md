
# JWT

JSON Web Token (JWT) as defined by RFC 7519.  <pre>  From RFC 7519 Section 1. Introduction:     The suggested pronunciation of JWT is the same as the English word "jot".  <pre>  The JWT is not Thread-Safe and should not be re-used.

## Structure

`JWT`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aud` | `unknown \| undefined` | Optional | - |
| `exp` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `iat` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `iss` | `string \| undefined` | Optional | - |
| `nbf` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `otherClaims` | `Record<string, unknown> \| undefined` | Optional | - |
| `sub` | `string \| undefined` | Optional | - |
| `jti` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "exp": 1659380719000,
  "iat": 1659380719000,
  "nbf": 1659380719000,
  "aud": {
    "key1": "val1",
    "key2": "val2"
  },
  "iss": "iss2"
}
```

