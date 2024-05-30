
# Validate Response

## Structure

`ValidateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `jwt` | [`JWT \| undefined`](../../doc/models/jwt.md) | Optional | JSON Web Token (JWT) as defined by RFC 7519.  <pre>  From RFC 7519 Section 1. Introduction:     The suggested pronunciation of JWT is the same as the English word "jot".  <pre>  The JWT is not Thread-Safe and should not be re-used. |

## Example (as JSON)

```json
{
  "jwt": {
    "aud": {
      "key1": "val1",
      "key2": "val2"
    },
    "exp": 62,
    "iat": 12,
    "iss": "iss8",
    "nbf": 76
  }
}
```

