
# Web Authn Register Complete Response

API response for completing WebAuthn credential registration or assertion

## Structure

`WebAuthnRegisterCompleteResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `credential` | [`WebAuthnCredential \| undefined`](../../doc/models/web-authn-credential.md) | Optional | A User's WebAuthnCredential. Contains all data required to complete WebAuthn authentication ceremonies. |

## Example (as JSON)

```json
{
  "credential": {
    "algorithm": "PS256",
    "attestationType": "none",
    "authenticatorSupportsUserVerification": false,
    "credentialId": "credentialId6",
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      },
      "key1": {
        "key1": "val1",
        "key2": "val2"
      },
      "key2": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  }
}
```

