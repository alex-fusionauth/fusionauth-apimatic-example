
# Web Authn Start Response

API response for starting a WebAuthn authentication ceremony

## Structure

`WebAuthnStartResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `options` | [`PublicKeyCredentialRequestOptions \| undefined`](../../doc/models/public-key-credential-request-options.md) | Optional | Provides the <i>authenticator<i> with the data it needs to generate an assertion. |

## Example (as JSON)

```json
{
  "options": {
    "allowCredentials": [
      {
        "id": "id0",
        "transports": [
          "transports4",
          "transports5"
        ],
        "type": "publicKey"
      },
      {
        "id": "id0",
        "transports": [
          "transports4",
          "transports5"
        ],
        "type": "publicKey"
      },
      {
        "id": "id0",
        "transports": [
          "transports4",
          "transports5"
        ],
        "type": "publicKey"
      }
    ],
    "challenge": "challenge0",
    "rpId": "rpId4",
    "timeout": 250,
    "userVerification": "preferred"
  }
}
```

