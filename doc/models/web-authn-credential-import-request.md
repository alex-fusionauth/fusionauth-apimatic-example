
# Web Authn Credential Import Request

API request to import an existing WebAuthn credential(s)

## Structure

`WebAuthnCredentialImportRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `credentials` | [`WebAuthnCredential[] \| undefined`](../../doc/models/web-authn-credential.md) | Optional | - |
| `validateDbConstraints` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "credentials": [
    {
      "algorithm": "PS512",
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
        }
      }
    },
    {
      "algorithm": "PS512",
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
        }
      }
    },
    {
      "algorithm": "PS512",
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
        }
      }
    }
  ],
  "validateDbConstraints": false
}
```

